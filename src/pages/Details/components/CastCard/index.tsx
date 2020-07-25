import React from "react";
import { Link } from "react-router-dom";

type CastCardProps = {
  id: number;
  deparment?: string;
  imageUrl: string;
  language?: string;
  title: string;
  releaseDate?: string;
  voteAvg?: number;
};

export const CastCard = ({
  id,
  deparment,
  imageUrl,
  title,
}: CastCardProps): React.ReactElement => (
  <article className="w-full h-full">
    <Link to={`/movie/${id}`}>
      <img
        className="w-full rounded-md md:rounded-none"
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        alt={title}
      />
      <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
        <h2 className="text-gray-700 md:text-sm whitespace-no-wrap truncate">
          {title}
        </h2>
        <div className="hidden md:block">
          <span className="text-xs text-gray-900 uppercase">
            {deparment !== undefined && `${deparment}`}
          </span>
        </div>
      </div>
    </Link>
  </article>
);
