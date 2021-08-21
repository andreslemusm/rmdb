import { PrimaryCard } from "./primary-card";
import { useMovies } from "@services/movie";
import { Swiper, SwiperSlide } from "swiper/react";

export const Hero = (): React.ReactElement => {
  const moviesQuery = useMovies({ releaseType: "trending" });

  if (moviesQuery.isSuccess) {
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
        mousewheel={{
          forceToAxis: true,
        }}
        virtual
      >
        {moviesQuery.data.map((movie) => {
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
  }

  if (moviesQuery.isError) {
    return <p>There was an error while getting the trending movies! :C</p>;
  }

  return <p>Loading...</p>;
};
