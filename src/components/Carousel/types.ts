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
