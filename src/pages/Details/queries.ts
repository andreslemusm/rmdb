import { MovieDetailsAttr, CastPersonAttr, VideoAttr } from "./types";
import { MovieItemAttr } from "../../components/Carousel/types";
import {
  BASE_URL,
  API_KEY,
  BASE_IMAGE_URL,
  backdropSize,
} from "../../apiConfig";
import Vibrant from "node-vibrant";
import { getPrincipalCrew } from "./utils";

export const getDetails = async (
  _key: string,
  id: string
): Promise<
  Omit<MovieDetailsAttr, "credits" | "recommendations" | "videos"> & {
    credits: {
      cast: CastPersonAttr[];
      directors: string[];
      writters: string[];
    };
    recommendations: MovieItemAttr[];
    vibrantColor: string;
    videos: VideoAttr[];
  }
> => {
  // Query
  const detailsQuery = fetch(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations,videos`
  );

  // Requests
  const response = await detailsQuery;
  const data = (await response.json()) as MovieDetailsAttr;
  const palette = data.backdrop_path
    ? await Vibrant.from(
        `${BASE_IMAGE_URL}${backdropSize.sm}/${data.backdrop_path}`
      ).getPalette()
    : undefined;

  // Formatter
  const movieDetails = {
    ...data,
    credits: {
      cast: data.credits.cast,
      ...getPrincipalCrew(data.credits.crew),
    },
    recommendations: data.recommendations.results,
    vibrantColor: palette?.DarkVibrant?.getHex() || "",
    videos: data.videos.results.filter((video) => video.type !== "Trailer"),
  };

  return movieDetails;
};
