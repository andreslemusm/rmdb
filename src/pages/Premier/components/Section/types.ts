type ItemAttr = {
  id: number;
  popularity: number;
};

type EntertaimentItemAttr = ItemAttr & {
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  original_language: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
};

export type MovieItemAttr = EntertaimentItemAttr & {
  video: boolean;
  title: string;
  release_date: string;
  original_title: string;
  adult: boolean;
  popularity: number;
  media_type: "movie";
};

export type TvShowItemAttr = EntertaimentItemAttr & {
  name: string;
  first_air_date: string;
  original_name: string;
  origin_country: string[];
  popularity: number;
  media_type: "tv";
};

export type PersonItemAttr = ItemAttr & {
  adult: boolean;
  gender: number;
  name: string;
  known_for: (MovieItemAttr | TvShowItemAttr)[];
  known_for_department: string;
  profile_path: string;
  popularity: number;
  media_type: "person";
};
