import { Link } from "react-router-dom";
import { TrailerModal } from "@components/trailer-modal";
import { getYear } from "@utils/formats";
import { imageNotFound } from "@assets/images";
import { BASE_IMAGE_URL, BackdropSizes } from "@utils/api-config";
import { Fragment, memo } from "react";

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
  return (
    <Fragment>
      <article className="mx-2 md:mx-0 relative">
        <Link to={`/movie/${id}`}>
          <picture className="block aspect-w-16 aspect-h-9 2xl:aspect-none">
            <source
              srcSet={
                imageUrl
                  ? `${BASE_IMAGE_URL}${BackdropSizes.lg}${imageUrl}`
                  : imageNotFound
              }
              media="(min-width: 1280px)"
            />
            <source
              srcSet={
                imageUrl
                  ? `${BASE_IMAGE_URL}${BackdropSizes.md}${imageUrl}`
                  : imageNotFound
              }
              media="(min-width: 780px)"
            />
            <img
              className="w-full h-full object-top object-cover shadow-lg rounded-md md:rounded-none md:shadow-none 2xl:w-full 2xl:h-screen"
              src={
                imageUrl
                  ? `${BASE_IMAGE_URL}${BackdropSizes.sm}${imageUrl}`
                  : imageNotFound
              }
              alt={title}
            />
          </picture>
        </Link>
        <section className="container mx-auto pt-3 pb-4 px-4 flex justify-between items-center sm:px-6 md:hidden">
          <h2 className="text-gray-600 text-xl tracking-wide truncate w-4/6">
            {title}
          </h2>
          <span className="text-gray-700 tracking-wide font-light">
            {getYear(releaseDate)}
          </span>
        </section>
        <section>
          <div className="hidden md:absolute md:top-0 md:w-full md:h-full md:bg-black md:bg-opacity-50 md:block" />
          <div className="hidden md:container md:mb-16 md:block md:absolute md:bottom-0 md:inset-x-0 md:mx-auto md:px-10 lg:mb-24 lg:max-w-screen-lg">
            <Link to={`/movie/${id}`}>
              <h2 className="w-3/4 pr-32 leading-none overflow-hidden text-gray-200 text-3xl tracking-widest font-black uppercase lg:text-6xl">
                {title.length < 23
                  ? title
                  : `${(/[\w &]+/.exec(title) as RegExpMatchArray)[0]}`}
              </h2>
            </Link>
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
              <TrailerModal movieID={id} />
            </div>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export const PrimaryCard = memo(PrimaryCardView);
