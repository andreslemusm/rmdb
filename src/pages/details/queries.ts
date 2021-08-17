import { MovieItemAttr } from "@components/carousel";
import Vibrant from "node-vibrant";
import { getPrincipalCrew } from "./utils";
import {
  API_KEY,
  BASE_IMAGE_URL,
  BASE_URL,
  BackdropSizes,
} from "../../api-config";
import {
  CastPersonAttr,
  MovieDetailsAttr,
  ReviewAttr,
  VideoAttr,
} from "./types";

export const getDetails = async (
  id: string
): Promise<
  Omit<
    MovieDetailsAttr,
    "credits" | "recommendations" | "videos" | "reviews"
  > & {
    credits: {
      cast: Array<CastPersonAttr>;
      directors: Array<string>;
      writters: Array<string>;
    };
    recommendations: Array<MovieItemAttr>;
    vibrantColor: string;
    videos: Array<VideoAttr>;
    reviews: Array<ReviewAttr>;
  }
> => {
  // Query
  const detailsQuery = fetch(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations,videos,reviews`
  );

  // Requests
  const response = await detailsQuery;
  const data = (await response.json()) as MovieDetailsAttr;
  const palette = data.backdrop_path
    ? await Vibrant.from(
        `${BASE_IMAGE_URL}${BackdropSizes.sm}/${data.backdrop_path}`
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
    vibrantColor: palette?.DarkVibrant?.hex || "#555555",
    videos: data.videos.results.filter((video) => video.type !== "Trailer"),
    reviews: data.reviews.results,
  };

  return movieDetails;
};
