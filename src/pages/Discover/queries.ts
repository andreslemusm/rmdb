import { MovieItemAttr } from "../../components/Carousel/types";
import { BASE_DISCOVER_URL, API_KEY } from "../../apiConfig";

export const searchMovies = async (
  _key: "discover",
  page = 1
): Promise<MovieItemAttr[]> => {
  // Query
  const searchQuery = fetch(
    `${BASE_DISCOVER_URL}?api_key=${API_KEY}&page=${page}`
  );

  // Request
  const response = await searchQuery;
  const data = (await response.json()) as { results: MovieItemAttr[] };

  // Formatter
  const movies = data.results;

  return movies;
};
