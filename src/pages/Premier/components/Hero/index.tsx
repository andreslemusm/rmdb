import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import { PrimaryCard } from "../PrimaryCard";
import { dummyMovies } from "../../dummy";

SwiperCore.use([A11y, Autoplay, Mousewheel, Scrollbar]);

export const Hero = (): React.ReactElement => {
  return (
    <Swiper
      tag="section"
      className="px-4 pb-4 sm:px-8 md:p-0"
      a11y={{
        enabled: true,
      }}
      speed={800}
      scrollbar={{
        draggable: true,
        dragClass: "swiper-scrollbar-drag bg-primary",
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
    >
      {dummyMovies.map((movie) => {
        const { id, title, backdrop_path, overview } = movie;
        return (
          <SwiperSlide key={id}>
            <PrimaryCard
              title={title}
              imageUrl={backdrop_path}
              description={overview}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
