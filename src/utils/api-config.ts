const BASE_IMAGE_URL = process.env.REACT_APP_API_IMAGE!;

const BASE_URL = process.env.REACT_APP_API_BACKEND!;

const API_KEY = process.env.REACT_APP_API_KEY!;

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
