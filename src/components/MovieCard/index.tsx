import React from "react";
import { Link } from "react-router-dom";
import { getYear } from "../../utils/formats";
import { CircularProgress } from "../CircularProgress";
import { BASE_IMAGE_URL, posterSize } from "../../apiConfig";

type ItemCardProps = {
  id: number;
  imageUrl: string;
  language: string;
  title: string;
  releaseDate: string;
  voteAvg: number;
};

export const MovieCard = ({
  id,
  imageUrl,
  language,
  releaseDate,
  title,
  voteAvg,
}: ItemCardProps): React.ReactElement => (
  <article className="w-full h-full">
    <Link to={`/movie/${id}`}>
      <img
        className="w-full rounded-md md:rounded-none"
        src={`${BASE_IMAGE_URL}${posterSize.xs}${imageUrl}`}
        alt={title}
      />
      <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
        <h2 className="text-gray-700 w-3/4 md:text-sm md:w-full whitespace-no-wrap truncate">
          {title}
        </h2>
        <div className="w-1/4 md:hidden">
          {voteAvg !== undefined && <CircularProgress value={voteAvg} />}
        </div>
        <div className="hidden md:block">
          <span className="text-xs text-gray-900 uppercase">
            {releaseDate !== undefined &&
              language !== undefined &&
              `${getYear(releaseDate)} ${language}`}
          </span>
        </div>
      </div>
    </Link>
  </article>
);
