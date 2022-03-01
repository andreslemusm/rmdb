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
  <article className="flex h-full w-full flex-col">
    <picture className="h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24 md:h-auto md:w-full md:rounded-none">
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
        className="h-full w-full bg-gray-200 object-contain"
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
      className="mt-3 overflow-hidden text-center text-gray-700 md:truncate md:text-left md:text-sm"
    >
      {name}
    </h2>
    <p className="hidden md:block md:truncate md:text-xs md:text-gray-900">
      {character}
    </p>
  </article>
);

export const CastCard = memo(CastCardView);
