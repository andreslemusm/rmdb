const BASE_IMAGE_URL = import.meta.env.VITE_API_IMAGE as string;

const BASE_URL = import.meta.env.VITE_API_BACKEND as string;

const API_KEY = import.meta.env.VITE_API_KEY as string;

const enum BackdropSizes {
  xs = "w300",
  sm = "w780",
  md = "w1280",
  lg = "original",
}

const enum PosterSizes {
  xs = "w185",
  sm = "w342",
  md = "w500",
  lg = "w780",
}

const enum ProfileSizes {
  sm = "w185",
  md = "h632",
  xl = "original",
}

export {
  BASE_IMAGE_URL,
  BASE_URL,
  API_KEY,
  BackdropSizes,
  PosterSizes,
  ProfileSizes,
};
