export type MovieItemAttr = {
  id: number;
  popularity: number;
  video: boolean;
  title: string;
  release_date: string;
  original_title: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  overview: string;
  original_language: string;
  poster_path: string | null;
  vote_count: number;
  vote_average: number;
};
