export type SectionProps = {
  title: string;
  data: (MovieItemAttr | TvShowItemAttr | PersonItemAttr)[];
};

export type MovieItemAttr = {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: "movie";
};

export type TvShowItemAttr = {
  original_name: string;
  id: number;
  name: string;
  vote_count: number;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  overview: string;
  origin_country: string[];
  popularity: number;
  media_type: "tv";
};

export type PersonItemAttr = {
  adult: boolean;
  gender: number;
  name: string;
  id: number;
  known_for: (MovieItemAttr | TvShowItemAttr)[];
  known_for_department: string;
  profile_path: string;
  popularity: number;
  media_type: "person";
};
