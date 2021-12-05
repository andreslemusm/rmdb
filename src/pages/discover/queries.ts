// TODO: remove file
import { GenreAttr } from "./types";
import { MovieItemAttr } from "@components/carousel";

const BASE_URL = import.meta.env.VITE_API_BACKEND as string;
const API_KEY = import.meta.env.VITE_API_KEY as string;

const getDiscover = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<Array<MovieItemAttr>> => {
  // Query
  const searchQuery = fetch(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&page=${pageParam}`
  );

  // Request
  const response = await searchQuery;
  const data = (await response.json()) as { results: Array<MovieItemAttr> };

  // Formatter
  const movies = data.results;

  return movies;
};

const getGenres = async (): Promise<Array<{ name: string; value: string }>> => {
  // Query
  const genresQuery = fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);

  // Request
  const response = await genresQuery;
  const data = (await response.json()) as { genres: Array<GenreAttr> };

  // Formatter
  const genresOptions = data.genres.map((genre) => ({
    value: genre.id.toString(),
    name: genre.name,
  }));

  return genresOptions;
};

export { getDiscover, getGenres };
