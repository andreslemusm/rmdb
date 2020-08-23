import React from "react";
import { Link } from "react-router-dom";
import { getYear } from "../../utils/formats";
import { CircularProgress } from "../CircularProgress";
import { BASE_IMAGE_URL, posterSize } from "../../apiConfig";
import imageNotFound from "../../assets/image-not-found.svg";

type ItemCardProps = {
  id: number;
  imageUrl: string | null;
  language: string;
  title: string;
  releaseDate: string;
  voteAvg: number;
};

const MovieCardView = ({
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
        className="w-full rounded-md md:rounded-none bg-gray-400"
        src={
          imageUrl
            ? `${BASE_IMAGE_URL}${posterSize.xs}${imageUrl}`
            : imageNotFound
        }
        alt={title}
      />
    </Link>
    <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
      <Link className="w-3/4 md:w-full" to={`/movie/${id}`}>
        <h2 className="text-gray-700 md:text-sm whitespace-no-wrap truncate">
          {title}
        </h2>
      </Link>
      <div className="w-1/4 md:hidden">
        {<CircularProgress value={voteAvg === 0 ? 5 : voteAvg} />}
      </div>
      <span className="hidden md:block text-xs text-gray-900 uppercase">
        {`${getYear(releaseDate)} ${language}`}
      </span>
    </div>
  </article>
);

export const MovieCard = React.memo(MovieCardView);
