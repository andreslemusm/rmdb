import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Virtual,
} from "swiper";
import { PrimaryCard } from "../PrimaryCard";
import { MovieItemAttr } from "../../../../components/Carousel/types";

SwiperCore.use([A11y, Autoplay, Mousewheel, Scrollbar, Virtual]);

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
      virtual
    >
      {data.slice(0, 10).map((movie) => {
        const {
          id,
          title,
          backdrop_path,
          overview,
          vote_average,
          release_date,
        } = movie;
        return (
          <SwiperSlide key={id}>
            <PrimaryCard
              id={id.toString()}
              title={title}
              releaseDate={release_date}
              imageUrl={backdrop_path}
              description={overview}
              score={vote_average}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
