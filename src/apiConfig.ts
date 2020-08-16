export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const BASE_MOVIE_URL = "https://api.themoviedb.org/3/movie";

export const BASE_TRENDING_URL =
  "https://api.themoviedb.org/3/trending/movie/day";

// You should use your own api key my man.
export const API_KEY = process.env.REACT_APP_API_KEY!;

export enum backdropSize {
  sm = "w780",
  md = "w1280",
  lg = "original",
}

export enum posterSize {
  sm = "w500",
  md = "w780",
  lg = "original",
}

export enum profileSize {
  sm = "w185",
  md = "h632",
  xl = "original",
}