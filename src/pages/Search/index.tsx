import React from "react";
import SwiperCore, { A11y, Mousewheel } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { SecondaryCard } from "../../components/SecondaryCard";
import { dummyMovies } from "../../components/App/dummy";

SwiperCore.use([A11y, Mousewheel]);

export const Search = (): React.ReactElement => (
  <section className="max-w-screen-lg pt-20 md:mx-4 lg:mx-auto">
    <h2 className="pl-16 uppercase text-lg text-gray-800 font-light tracking-wider">
      Films
    </h2>
    <Swiper
      tag="section"
      slidesPerView={6}
      slidesPerColumn={3}
      slidesPerColumnFill="row"
      spaceBetween={15}
      mousewheel={{
        forceToAxis: true,
      }}
    >
      {dummyMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <SecondaryCard
            imageUrl={movie.poster_path}
            title={movie.title}
            language={movie.original_language}
            releaseDate={movie.release_date}
            voteAvg={movie.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
