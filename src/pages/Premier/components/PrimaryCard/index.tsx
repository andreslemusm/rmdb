import React from "react";
import { BASE_URL, backdropSize } from "../../../../apiConfig";
import { ReactComponent as CaretRight } from "../../../../assets/caret-right.svg";

type PrimaryCardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

export const PrimaryCard = ({
  title,
  imageUrl,
  description,
}: PrimaryCardProps): React.ReactElement => (
  <article className="mx-2 md:mx-0 relative">
    <div className="relative">
      <picture>
        <source
          srcSet={`${BASE_URL}${backdropSize.lg}${imageUrl}`}
          media="(min-width: 1024px)"
        />
        <img
          className="relative w-full object-cover object-top shadow-lg rounded-md md:rounded-none md:shadow-none xl:h-screen"
          src={`${BASE_URL}${backdropSize.md}${imageUrl}`}
          alt={title}
        />
      </picture>
      <div className="hidden absolute top-0 w-full h-full bg-black bg-opacity-25 md:block" />
      <div className="hidden container md:mb-24 md:block md:absolute md:bottom-0 md:inset-x-0 md:mx-auto md:px-10 lg:max-w-screen-lg">
        <h2 className="w-3/4 pr-32 leading-none overflow-hidden text-gray-200 text-6xl tracking-widest font-black uppercase">
          {title.length < 23
            ? title
            : `${(/[\w &]+/.exec(title) as RegExpMatchArray)[0]}`}
        </h2>
        <p className="w-3/4 pr-16 pt-6 tracking-wider text-gray-400">
          {description.length < 200
            ? description
            : `${description.slice(0, 197)}...`}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-300 pt-2 tracking-wider">
            TMDb{" "}
            <span className="text-gray-200 text-4xl font-light pl-2">7.9</span>
          </p>
          <button className="tracking-widest inline-flex text-gray-200 items-center bg-primary border-0 py-2 pl-6 pr-8 focus:outline-none rounded-sm text-sm">
            <CaretRight className="w-5 h-5 fill-current" />
            PLAY
          </button>
        </div>
      </div>
      <div className="md:hidden container mx-auto pt-3 pb-4 px-4 sm:px-6 flex justify-between items-center">
        <h2 className="text-gray-600 text-xl tracking-wide truncate w-4/6">
          {title}
        </h2>
        <span className="text-gray-700 tracking-wide font-light">2019</span>
      </div>
    </div>
  </article>
);
