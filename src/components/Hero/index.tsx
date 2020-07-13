import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import { PrimaryCard } from "../PrimaryCard";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

export const Hero = (): React.ReactElement => {
  return (
    <Swiper
      tag="section"
      className="px-4 pb-4 sm:px-8 md:p-0"
      a11y={{
        enabled: true,
      }}
      speed={800}
      initialSlide={1}
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
