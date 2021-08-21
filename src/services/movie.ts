import Vibrant from "node-vibrant";
import { publicRequest } from "@utils/public-request";
import { BASE_IMAGE_URL, BackdropSizes } from "@utils/api-config";
import { UseQueryResult, useQuery } from "react-query";

const MOVIE_ENDPOINT = "/movie";

const movieKeys = {
  all: ["movie"] as const,
  lists: () => [...movieKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) =>
    [...movieKeys.lists(), filters] as const,
  details: () => [...movieKeys.all, "detail"] as const,
  detail: (userid: string) => [...movieKeys.details(), userid] as const,
};

type MovieItemAttr = {
  id: number;
  popularity: number;
  video: boolean;
  title: string;
  release_date: string;
  original_title: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  overview: string;
  original_language: string;
  poster_path: string | null;
  vote_count: number;
  vote_average: number;
};

type MoviePageAttr = {
  page: number;
  results: Array<MovieItemAttr>;
  total_pages: number;
  total_results: number;
};

type UseMoviesParams = {
  releaseType:
    | "now_playing"
    | "popular"
    | "top_rated"
    | "upcoming"
    | "trending";
};

const useMovies = (
  params: UseMoviesParams
): UseQueryResult<Array<MovieItemAttr>> =>
  useQuery({
    queryKey: movieKeys.list(params),
    queryFn: async () => {
      const url =
        params.releaseType === "trending"
          ? `trending/${MOVIE_ENDPOINT}/day`
          : `${MOVIE_ENDPOINT}/${params.releaseType}`;
      const response = await publicRequest.get<MoviePageAttr>(url);

      return response.data.results;
    },
  });

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
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string | null;
  imdb_id: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: Array<{
      cast_id: number;
      character: string;
      credit_id: string;
      gender: number | null;
      id: number;
      name: string;
      order: number;
      profile_path: string | null;
    }>;
    crew: Array<{
      credit_id: string;
      department: string;
      gender: number;
      id: number;
      job: string;
      name: string;
      profile_path: string | null;
    }>;
  };
  recommendations: {
    results: Array<MovieItemAttr>;
  };
  videos: {
    results: Array<{
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
    }>;
  };
  reviews: {
    results: Array<{
      id: string;
      author: string;
      content: string;
      url: string;
    }>;
  };
  vibrantColor: string;
};

const useMovie = (movieID: string): UseQueryResult<MovieDetailsAttr> =>
  useQuery({
    queryKey: movieKeys.detail(movieID),
    queryFn: async () => {
      const response = await publicRequest.get<MovieDetailsAttr>(
        `${MOVIE_ENDPOINT}/${movieID}`,
        {
          params: {
            append_to_response: "credits,recommendations,videos,reviews",
          },
        }
      );

      const defaultVibrantColor = "#555555";
      const vibrantColor = response.data.backdrop_path
        ? await Vibrant.from(
            `${BASE_IMAGE_URL}${BackdropSizes.sm}/${response.data.backdrop_path}`
          )
            .getPalette()
            .then((palette) => palette.DarkVibrant?.hex ?? defaultVibrantColor)
        : defaultVibrantColor;

      return { ...response.data, vibrantColor };
    },
  });

export { useMovies, useMovie };
export type { UseMoviesParams, MovieDetailsAttr, MovieItemAttr };
