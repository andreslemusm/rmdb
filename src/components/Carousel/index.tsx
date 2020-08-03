import React from "react";
import { MovieCard } from "../MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Mousewheel, SwiperOptions } from "swiper";
import { MovieItemAttr } from "./types";
import { CastPersonAttr } from "../../pages/Details/types";
import { CastCard } from "../CastCard";

SwiperCore.use([A11y, Mousewheel]);

type CarouselProps = {
  title: string;
  titleClass?: string;
  data: (MovieItemAttr | CastPersonAttr)[];
  breakpointsConfig?: {
    [width: number]: SwiperOptions;
  };
  cardType: "movie" | "castPerson";
  wrapperClass?: string;
  sliderClass?: string;
};

export const Carousel = ({
  data,
  title,
  cardType,
  breakpointsConfig = {
    "0": { slidesPerView: 2 },
    "470": { slidesPerView: 3 },
    "690": { slidesPerView: 4 },
    "768": { slidesPerView: 5 },
    "1024": { slidesPerView: 6 },
    "1280": { slidesPerView: 7 },
  },
  titleClass = "",
  wrapperClass = "",
  sliderClass = "",
}: CarouselProps): React.ReactElement => (
  <section className={`max-w-screen-lg lg:mx-auto ${wrapperClass}`}>
    <h2
      className={`text-gray-800 font-light tracking-wider text-lg ${titleClass}`}
    >
      {title}
    </h2>
    <Swiper
      tag="section"
      className={sliderClass}
      a11y={{
        enabled: true,
      }}
      breakpoints={breakpointsConfig}
      mousewheel={{
        forceToAxis: true,
      }}
      spaceBetween={15}
    >
      {data.length > 1 &&
        data.map((element) => {
          switch (cardType) {
            case "movie": {
              const {
                id,
                original_language,
                poster_path,
                release_date,
                title,
                vote_average,
              } = element as MovieItemAttr;
              return (
                <SwiperSlide key={id}>
                  <MovieCard
                    id={id}
                    imageUrl={poster_path}
                    language={original_language}
                    releaseDate={release_date}
                    title={title}
                    voteAvg={vote_average}
                  />
                </SwiperSlide>
              );
            }
            default: {
              const castPerson = element as CastPersonAttr;
              const { id, profile_path, character, name } = castPerson;
              return (
                <SwiperSlide key={id}>
                  <CastCard
                    id={id}
                    imageUrl={profile_path as string}
                    character={character}
                    name={name}
                  />
                </SwiperSlide>
              );
            }
          }
        })}
    </Swiper>
  </section>
);
