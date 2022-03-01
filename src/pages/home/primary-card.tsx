import { Link } from "react-router-dom";
import { TrailerModal } from "@components/trailer-modal";
import { getYear } from "@utils/formats";
import { imageNotFound } from "@assets/images";
import { BASE_IMAGE_URL, BackdropSizes } from "@utils/remote-images";
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
      <article className="relative mx-2 md:mx-0">
        <Link to={`/movie/${id}`}>
          <picture className="aspect-w-16 aspect-h-9 block 2xl:aspect-none">
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
              className="h-full w-full rounded-md object-cover object-top shadow-lg md:rounded-none md:shadow-none 2xl:h-screen 2xl:w-full"
              src={
                imageUrl
                  ? `${BASE_IMAGE_URL}${BackdropSizes.sm}${imageUrl}`
                  : imageNotFound
              }
              alt={title}
            />
          </picture>
        </Link>
        <section className="container mx-auto flex items-center justify-between px-4 pt-3 pb-4 sm:px-6 md:hidden">
          <h2 className="w-4/6 truncate text-xl tracking-wide text-gray-600">
            {title}
          </h2>
          <span className="font-light tracking-wide text-gray-700">
            {getYear(releaseDate)}
          </span>
        </section>
        <section>
          <div className="hidden md:absolute md:top-0 md:block md:h-full md:w-full md:bg-black md:bg-opacity-50" />
          <div className="hidden md:container md:absolute md:inset-x-0 md:bottom-0 md:mx-auto md:mb-16 md:block md:px-10 lg:mb-24 lg:max-w-screen-lg">
            <Link to={`/movie/${id}`}>
              <h2 className="w-3/4 overflow-hidden pr-32 text-3xl font-black uppercase leading-none tracking-widest text-gray-200 lg:text-6xl">
                {title.length < 23
                  ? title
                  : `${(/[\w &]+/.exec(title) as RegExpMatchArray)[0]}`}
              </h2>
            </Link>
            <p className="w-3/4 pr-16 pt-6 text-sm tracking-wider text-gray-300 lg:text-base">
              {description.length < 200
                ? description
                : `${description.slice(0, 197)}...`}
            </p>
            <div className="flex items-center justify-between font-light">
              <p className="pt-2 text-sm tracking-wider text-gray-300 md:text-base">
                TMDb{" "}
                <span className="pl-2 text-2xl text-gray-200 lg:text-4xl">
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
