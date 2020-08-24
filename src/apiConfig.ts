export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const BASE_URL = "https://api.themoviedb.org/3/";

// You should use your own api key my man.
export const API_KEY = process.env.REACT_APP_API_KEY!;

export enum backdropSize {
  xs = "w300",
  sm = "w780",
  md = "w1280",
  lg = "original",
}

export enum posterSize {
  xs = "w185",
  sm = "w342",
  md = "w500",
  lg = "w780",
}

export enum profileSize {
  sm = "w185",
  md = "h632",
  xl = "original",
}
