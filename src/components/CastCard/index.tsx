import React from "react";
import { Link } from "react-router-dom";

type CastCardProps = {
  id: number;
  character: string;
  imageUrl: string;
  name: string;
};

export const CastCard = ({
  id,
  character,
  imageUrl,
  name,
}: CastCardProps): React.ReactElement => (
  <Link to={`/movie/${id}`}>
    <article className="w-full h-full flex flex-col items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-black sm:w-24 sm:h-24 md:w-full md:h-auto md:rounded-none md:bg-transparent">
        <img
          className="h-full w-full object-contain"
          src={`https://image.tmdb.org/t/p/original${imageUrl}`}
          alt={name}
        />
      </div>
      <div className="mt-3 self-start">
        <h2 className="text-gray-700 text-center md:text-gray-600 md:text-sm md:text-left">
          {name}
        </h2>
        <div className="hidden md:block text-gray-800 text-xs">
          {character !== undefined && `${character}`}
        </div>
      </div>
    </article>
  </Link>
);
