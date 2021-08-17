const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

const BASE_URL = "https://api.themoviedb.org/3/";

// You should use your own api key my man.
const API_KEY = "8159e2d84c680cdf3f26ab87b194850a";

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
