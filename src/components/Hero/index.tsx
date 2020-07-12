import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, Autoplay } from "swiper";
import { PrimaryCard } from "../PrimaryCard";

SwiperCore.use([Scrollbar, A11y, Autoplay]);

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
    >
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryCard />
      </SwiperSlide>
    </Swiper>
  );
};
