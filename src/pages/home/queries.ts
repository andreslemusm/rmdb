import { MovieItemAttr } from "@components/carousel";
import { API_KEY, BASE_URL } from "@root/api-config";

const releaseTypes = ["now_playing", "popular", "top_rated", "upcoming"];

const fetchMovies = async (): Promise<Record<string, Array<MovieItemAttr>>> => {
  // Queries
  const releaseMovieQueries = releaseTypes.map((movieList) =>
    fetch(`${BASE_URL}movie/${movieList}?api_key=${API_KEY}`)
  );
  const trendingMovieQuery = fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );

  // Request
  const responses = await Promise.all([
    ...releaseMovieQueries,
    trendingMovieQuery,
  ]);
  const data = (await Promise.all(
    responses.map((response) => response.json())
  )) as Array<{ results: Array<MovieItemAttr> }>;

  // Formatter
  const movies = {
    ...releaseTypes.reduce(
      (movies, releaseType, index) => ({
        ...movies,
        [releaseType]: data[index].results,
      }),
      {}
    ),
    trending: data.slice(-1)[0].results,
  };

  return movies as Record<string, Array<MovieItemAttr>>;
};

export { fetchMovies, releaseTypes };
