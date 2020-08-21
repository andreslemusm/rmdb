import React from "react";
import { BASE_IMAGE_URL, profileSize } from "../../apiConfig";

type CastCardProps = {
  character: string;
  imageUrl: string;
  name: string;
};

export const CastCard = ({
  character,
  imageUrl,
  name,
}: CastCardProps): React.ReactElement => (
  <article className="w-full h-full flex flex-col items-center">
    <div className="w-20 h-20 rounded-full overflow-hidden bg-black sm:w-24 sm:h-24 md:w-full md:h-auto md:rounded-none md:bg-transparent">
      <picture>
        <source
          srcSet={`${BASE_IMAGE_URL}${profileSize.md}${imageUrl}`}
          media="(min-width: 768px)"
        />
        <img
          className="h-full w-full object-contain"
          src={`${BASE_IMAGE_URL}${profileSize.sm}${imageUrl}`}
          alt={name}
        />
      </picture>
    </div>
    <div className="mt-3 self-start">
      <h2 className="text-gray-700 text-center md:text-gray-600 md:text-sm md:text-left">
        {name}
      </h2>
      <p className="hidden md:block text-gray-800 text-xs">
        {character !== undefined && `${character}`}
      </p>
    </div>
  </article>
);
