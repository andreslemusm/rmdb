import React from "react";
import { BASE_IMAGE_URL, profileSize } from "../../apiConfig";
import janeDoe from "../../assets/jane-doe.svg";
import johnDoe from "../../assets/john-doe.svg";

type CastCardProps = {
  character: string;
  imageUrl: string | null;
  name: string;
  gender: number;
};

export const CastCard = ({
  character,
  imageUrl,
  name,
  gender,
}: CastCardProps): React.ReactElement => (
  <article className="w-full h-full flex flex-col items-center">
    <div className="w-20 h-20 rounded-full overflow-hidden sm:w-24 sm:h-24 md:w-full md:h-auto md:rounded-none md:bg-transparent">
      <picture>
        <source
          srcSet={
            imageUrl
              ? `${BASE_IMAGE_URL}${profileSize.md}${imageUrl}`
              : gender === 1
              ? janeDoe
              : johnDoe
          }
          media="(min-width: 768px)"
        />
        <img
          className="h-full w-full object-contain bg-gray-200"
          src={
            imageUrl
              ? `${BASE_IMAGE_URL}${profileSize.sm}${imageUrl}`
              : gender === 1
              ? janeDoe
              : johnDoe
          }
          alt={name}
        />
      </picture>
    </div>
    <div className="mt-3 self-stretch">
      <h2 className="text-gray-700 text-center md:text-gray-600 md:text-sm md:text-left">
        {name}
      </h2>
      <p className="hidden md:block text-gray-800 text-xs">
        {character !== undefined && `${character}`}
      </p>
    </div>
  </article>
);
