import { memo } from "react";
import { BASE_IMAGE_URL, ProfileSizes } from "@root/utils/remote-images";
import { janeDoe, johnDoe } from "@assets/images";

type CastCardProps = {
  character: string;
  imageUrl: string | null;
  name: string;
  gender: number;
};

const CastCardView = ({
  character,
  imageUrl,
  name,
  gender,
}: CastCardProps): React.ReactElement => (
  <article className="w-full h-full flex flex-col">
    <picture className="w-20 h-20 rounded-full overflow-hidden sm:w-24 sm:h-24 md:w-full md:h-auto md:rounded-none">
      <source
        srcSet={
          imageUrl
            ? `${BASE_IMAGE_URL}${ProfileSizes.md}${imageUrl}`
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
            ? `${BASE_IMAGE_URL}${ProfileSizes.sm}${imageUrl}`
            : gender === 1
            ? janeDoe
            : johnDoe
        }
        alt={name}
      />
    </picture>
    <h2
      style={{ maxHeight: "3rem" }}
      className="mt-3 text-gray-700 text-center overflow-hidden md:text-sm md:text-left md:truncate"
    >
      {name}
    </h2>
    <p className="hidden md:block md:text-gray-900 md:text-xs md:truncate">
      {character}
    </p>
  </article>
);

export const CastCard = memo(CastCardView);
