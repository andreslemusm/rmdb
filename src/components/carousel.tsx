import { CastCard } from "@components/cast-card";
import { MovieCard } from "@components/movie-card";
import { MovieDetailsAttr, MovieItemAttr } from "@services/movie";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { SwiperOptions } from "swiper";
import { useEffect, useRef } from "react";

type CarouselProps = {
  title: string;
  preRenderedSlides?: number;
  titleClass?: string;
  data: Array<
    | MovieItemAttr
    | MovieDetailsAttr["credits"]["cast"][number]
    | MovieDetailsAttr["videos"]["results"][number]
  >;
  breakpointsConfig?: {
    [width: number]: SwiperOptions;
  };
  cardType: "movie" | "castPerson" | "trailer";
  wrapperClass?: string;
  sliderClass?: string;
};

const Carousel = ({
  data,
  title,
  cardType,
  preRenderedSlides,
  breakpointsConfig = {
    "0": { slidesPerView: 2 },
    "470": { slidesPerView: 3 },
    "649": { slidesPerView: 4 },
    "768": { slidesPerView: 5 },
    "1024": { slidesPerView: 6 },
    "1280": { slidesPerView: 7 },
  },
  titleClass = "",
  wrapperClass = "",
  sliderClass = "",
}: CarouselProps): React.ReactElement => {
  // Workaround to update swiper slides between rerenders.
  const swiperRef = useRef<SwiperCore>();
  useEffect(() => {
    swiperRef.current?.updateSlides();
  }, [data]);

  return (
    <section className={`max-w-screen-lg lg:mx-auto ${wrapperClass}`}>
      <h2
        className={`text-lg font-light tracking-wider text-gray-800 ${titleClass}`}
      >
        {title}
      </h2>
      <Swiper
        tag="section"
        wrapperTag="ul"
        className={sliderClass}
        a11y={{
          enabled: true,
        }}
        breakpoints={breakpointsConfig}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={15}
        onInit={(swiper): void => {
          swiperRef.current = swiper;
        }}
        virtual={
          preRenderedSlides
            ? { addSlidesAfter: preRenderedSlides, addSlidesBefore: 2 }
            : false
        }
      >
        {data.length > 0 &&
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
                  <SwiperSlide tag="li" key={id}>
                    <MovieCard
                      id={id}
                      imageUrl={poster_path || ""}
                      language={original_language}
                      releaseDate={release_date}
                      title={title}
                      voteAvg={vote_average}
                    />
                  </SwiperSlide>
                );
              }
              case "trailer": {
                const { name, key, id } =
                  element as MovieDetailsAttr["videos"]["results"][number];

                return (
                  <SwiperSlide tag="li" key={id}>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        title={name}
                        src={`https://www.youtube-nocookie.com/embed/${key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </SwiperSlide>
                );
              }
              default: {
                const castPerson =
                  element as MovieDetailsAttr["credits"]["cast"][number];
                const { id, profile_path, character, name, gender } =
                  castPerson;

                return (
                  <SwiperSlide tag="li" key={id}>
                    <CastCard
                      gender={gender ?? 1}
                      imageUrl={profile_path}
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
};

export { Carousel };
export type { CarouselProps, MovieItemAttr };
