import React from "react";
import { BASE_IMAGE_URL, backdropSize } from "../../../../apiConfig";
import { Link } from "react-router-dom";
import { useTrailerModal } from "../../../../utils/hooks";

type PrimaryCardProps = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  score: number;
};

export const PrimaryCard = ({
  id,
  title,
  imageUrl,
  description,
  score,
}: PrimaryCardProps): React.ReactElement => {
  const { showModal, showButton, PlayButton, TrailerModal } = useTrailerModal(
    id
  );

  return (
    <React.Fragment>
      <article className="mx-2 md:mx-0 relative">
        <div className="relative">
          <Link to={`/movie/${id}`}>
            <picture>
              <source
                srcSet={`${BASE_IMAGE_URL}${backdropSize.lg}${imageUrl}`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${BASE_IMAGE_URL}${backdropSize.md}${imageUrl}`}
                media="(min-width: 768px)"
              />
              <img
                className="relative w-full object-cover object-top shadow-lg rounded-md md:rounded-none md:shadow-none xl:h-screen"
                src={`${BASE_IMAGE_URL}${backdropSize.sm}${imageUrl}`}
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
                    {score}
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
                2019
              </span>
            </div>
          </section>
        </div>
      </article>
      {showModal && <TrailerModal />}
    </React.Fragment>
  );
};
