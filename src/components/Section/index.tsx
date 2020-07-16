import React from "react";
import { SecondaryCard } from "../SecondaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Mousewheel } from "swiper";
import { SectionProps } from "./types";

SwiperCore.use([A11y, Mousewheel]);

export const Section = ({ data, title }: SectionProps): React.ReactElement => (
  <section className="max-w-screen-lg md:mx-4 my-6 md:my-0 md:py-6 lg:mx-auto">
    <h2 className="pl-10 md:pl-0 md:w-2/3 lg:w-3/4 md:mx-auto pb-3 md:pb-6 text-lg text-gray-800 md:text-gray-500 font-light md:font-normal tracking-wider uppercase">
      {title}
    </h2>
    <Swiper
      tag="section"
      className="px-5 pb-4 sm:px-8 md:p-0"
      centeredSlides
      centeredSlidesBounds
      a11y={{
        enabled: true,
      }}
      breakpoints={{
        "470": { slidesPerView: 3 },
        "768": {
          slidesPerView: 5,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        "1024": {
          slidesPerView: 6,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      spaceBetween={15}
      slidesPerView={2}
    >
      {data !== undefined &&
        data.length > 1 &&
        data.map((item) => {
          switch (item.media_type) {
            case "movie": {
              const {
                id,
                original_language,
                poster_path,
                release_date,
                title,
                vote_average,
              } = item;
              return (
                <SwiperSlide key={id}>
                  <SecondaryCard
                    imageUrl={poster_path}
                    language={original_language}
                    releaseDate={release_date}
                    title={title}
                    voteAvg={vote_average}
                  />
                </SwiperSlide>
              );
            }
            case "tv": {
              const {
                id,
                name,
                original_language,
                poster_path,
                first_air_date,
                vote_average,
              } = item;
              return (
                <SwiperSlide key={id}>
                  <SecondaryCard
                    imageUrl={poster_path}
                    language={original_language}
                    releaseDate={first_air_date}
                    title={name}
                    voteAvg={vote_average}
                  />
                </SwiperSlide>
              );
            }
            case "person": {
              const { id, profile_path, name, known_for_department } = item;
              return (
                <SwiperSlide key={id}>
                  <SecondaryCard
                    imageUrl={profile_path}
                    deparment={known_for_department}
                    title={name}
                  />
                </SwiperSlide>
              );
            }
            default:
              return <React.Fragment />;
          }
        })}
    </Swiper>
  </section>
);
