import { MovieItemAttr } from "../../components/Carousel/types";
import { API_KEY, BASE_URL } from "../../apiConfig";
import { GenreAttr } from "./types";

export const getDiscover = async (
  _key: "discover",
  page = 1
): Promise<MovieItemAttr[]> => {
  // Query
  const searchQuery = fetch(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&page=${page}`
  );

  // Request
  const response = await searchQuery;
  const data = (await response.json()) as { results: MovieItemAttr[] };

  // Formatter
  const movies = data.results;

  return movies;
};

export const getGenres = async (): Promise<
  { name: string; value: string }[]
> => {
  // Query
  const genresQuery = fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);

  // Request
  const response = await genresQuery;
  const data = (await response.json()) as { genres: GenreAttr[] };

  // Formatter
  const genresOptions = data.genres.map((genre) => ({
    value: genre.id.toString(),
    name: genre.name,
  }));

  return genresOptions;
};
