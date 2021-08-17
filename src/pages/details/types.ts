import { GenreAttr } from "../discover/types";
import { MovieItemAttr } from "@components/carousel";

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  iso_639_1: string;
  name: string;
};

type VideoAttr = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: 360 | 480 | 720 | 1080;
  type:
    | "Trailer"
    | "Teaser"
    | "Clip"
    | "Featurette"
    | "Behind the Scenes"
    | "Bloopers";
};

type ReviewAttr = {
  id: string;
  author: string;
  content: string;
  url: string;
};

type MovieDetailsAttr = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  belongs_to_collection: Record<string, unknown> | null;
  budget: number;
  genres: Array<GenreAttr>;
  homepage: string | null;
  imdb_id: string | null;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: Array<CastPersonAttr>;
    crew: Array<CrewPersonAttr>;
  };
  recommendations: {
    results: Array<MovieItemAttr>;
  };
  videos: {
    results: Array<VideoAttr>;
  };
  reviews: {
    results: Array<ReviewAttr>;
  };
};

type CrewPersonAttr = {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
};

type CastPersonAttr = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
};

export type {
  SpokenLanguage,
  VideoAttr,
  CastPersonAttr,
  CrewPersonAttr,
  MovieDetailsAttr,
  ReviewAttr,
};
