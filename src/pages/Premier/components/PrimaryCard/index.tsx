import React from "react";
import { BASE_IMAGE_URL, backdropSize } from "../../../../apiConfig";
import { Link } from "react-router-dom";
import { useTrailerModal } from "../../../../utils/hooks";
import { getYear } from "../../../../utils/formats";
import imageNotFound from "../../../../assets/image-not-found.svg";

type PrimaryCardProps = {
  id: string;
  title: string;
  imageUrl: string | null;
  description: string;
  score: number;
  releaseDate: string;
};

const PrimaryCardView = ({
  id,
  title,
  imageUrl,
  description,
  score,
  releaseDate,
}: PrimaryCardProps): React.ReactElement => {
  const { showModal, showButton, PlayButton, TrailerModal } = useTrailerModal(
    id
  );

  return (
    <article className="mx-2 md:mx-0 relative">
      <div className="relative">
        <Link to={`/movie/${id}`}>
          <picture>
            <source
              srcSet={
                imageUrl
                  ? `${BASE_IMAGE_URL}${backdropSize.md}${imageUrl}`
                  : imageNotFound
              }
              media="(min-width: 768px)"
            />
            <img
              className="relative w-full object-cover object-top shadow-lg rounded-md md:rounded-none md:shadow-none xl:h-screen"
              src={
                imageUrl
                  ? `${BASE_IMAGE_URL}${backdropSize.sm}${imageUrl}`
                  : imageNotFound
              }
              alt={title}
            />
          </picture>
        </Link>
        <section>
          <div className="hidden absolute top-0 w-full h-full bg-black bg-opacity-50 md:block" />
          <div className="hidden container md:mb-16 md:block md:absolute md:bottom-0 md:inset-x-0 md:mx-auto md:px-10 lg:mb-24 lg:max-w-screen-lg">
            <h2 className="w-3/4 pr-32 leading-none overflow-hidden text-gray-200 text-3xl tracking-widest font-black uppercase lg:text-6xl">
              <Link to={`/movie/${id}`}>
                {title.length < 23
                  ? title
                  : `${(/[\w &]+/.exec(title) as RegExpMatchArray)[0]}`}
              </Link>
            </h2>
            <p className="w-3/4 pr-16 pt-6 tracking-wider text-gray-300 text-sm lg:text-base">
              {description.length < 200
                ? description
                : `${description.slice(0, 197)}...`}
            </p>
            <div className="flex justify-between items-center font-light">
              <p className="text-gray-300 pt-2 tracking-wider text-sm md:text-base">
                TMDb{" "}
                <span className="text-gray-200 text-2xl lg:text-4xl pl-2">
                  {score === 0 ? 5 : score}
                </span>
              </p>
              {showButton && <PlayButton />}
            </div>
          </div>
        </section>
        <section>
          <div className="md:hidden container mx-auto pt-3 pb-4 px-4 sm:px-6 flex justify-between items-center">
            <h2 className="text-gray-600 text-xl tracking-wide truncate w-4/6">
              {title}
            </h2>
            <span className="text-gray-700 tracking-wide font-light">
              {getYear(releaseDate)}
            </span>
          </div>
        </section>
      </div>
      {showModal && <TrailerModal />}
    </article>
  );
};

export const PrimaryCard = React.memo(PrimaryCardView);
