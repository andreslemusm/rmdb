import { BASE_MOVIE_URL, API_KEY, BASE_TRENDING_URL } from "../../apiConfig";
import { MovieItemAttr } from "../../components/Carousel/types";

export const releaseTypes = ["now_playing", "popular", "top_rated", "upcoming"];

export const fetchMovies = async (): Promise<
  Record<string, MovieItemAttr[]>
> => {
  // Queries
  const releaseMovieQueries = releaseTypes.map((movieList) =>
    fetch(`${BASE_MOVIE_URL}/${movieList}?api_key=${API_KEY}`)
  );
  const trendingMovieQuery = fetch(`${BASE_TRENDING_URL}?api_key=${API_KEY}`);

  // Request
  const responses = await Promise.all([
    ...releaseMovieQueries,
    trendingMovieQuery,
  ]);
  const data = (await Promise.all(
    responses.map((response) => response.json())
  )) as { results: MovieItemAttr[] }[];

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

  return movies as Record<string, MovieItemAttr[]>;
};
