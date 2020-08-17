import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import { PrimaryCard } from "../PrimaryCard";
import { MovieItemAttr } from "../../../../components/Carousel/types";

SwiperCore.use([A11y, Autoplay, Mousewheel, Scrollbar]);

type HeroProps = {
  data: MovieItemAttr[];
};

export const Hero = ({ data }: HeroProps): React.ReactElement => {
  return (
    <Swiper
      tag="section"
      className="px-4 pb-4 sm:px-8 md:p-0"
      a11y={{
        enabled: true,
      }}
      speed={500}
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
      {data.map((movie) => {
        const { id, title, backdrop_path, overview, vote_average } = movie;
        return (
          <SwiperSlide key={id}>
            <PrimaryCard
              id={id}
              title={title}
              imageUrl={backdrop_path || ""}
              description={overview}
              score={vote_average}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
