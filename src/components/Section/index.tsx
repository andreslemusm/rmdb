import React from "react";
import { SecondaryCard } from "../SecondaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Mousewheel } from "swiper";

SwiperCore.use([A11y, Mousewheel]);

export const Section = (): React.ReactElement => (
  <section className="max-w-screen-lg md:mx-4 my-6 md:my-0 md:py-6 lg:mx-auto">
    <h2 className="pl-10 md:pl-0 md:w-2/3 lg:w-3/4 md:mx-auto pb-3 text-lg text-gray-800 md:text-gray-400 font-light md:font-normal tracking-wider uppercase">
      Films
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
        "640": {},
        "768": {
          slidesPerView: 5,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        "1024": { slidesPerView: 6 },
        "1280": { slidesPerView: 6 },
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      spaceBetween={15}
      slidesPerView={2}
    >
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
      <SwiperSlide>
        <SecondaryCard />
      </SwiperSlide>
    </Swiper>
  </section>
);
