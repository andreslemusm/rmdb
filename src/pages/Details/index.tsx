import React from "react";
import { dummyMovie, dummyCredits, dummyRecommended } from "./dummy";
import Vibrant from "node-vibrant";
import { getYear, toHourFormat, getPrincipalCrew } from "../../utils";
import { Badge } from "./components/Badge";
import { CircularProgress } from "../../components/CircularProgress";
import SwiperCore, { A11y, Mousewheel } from "swiper";
import { Fact } from "./components/Fact";
import { FactConfig, SpokenLanguage } from "./types";
import { Carousel } from "../../components/Carousel";
import { MovieItemAttr } from "../../components/Carousel/types";

SwiperCore.use([A11y, Mousewheel]);

export const Details = (): React.ReactElement => {
  const [vibrant, setVibrant] = React.useState("");

  React.useEffect(() => {
    Vibrant.from(
      `https://image.tmdb.org/t/p/original/${dummyMovie.backdrop_path}`
    )
      .getPalette()
      .then((palette) => {
        setTimeout(() => {
          setVibrant(palette.DarkVibrant?.getHex() as string);
        }, 200);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const principalCrew = getPrincipalCrew(dummyCredits.crew);

  const facts: FactConfig[] = [
    { name: "Status", key: "status" },
    {
      name: "Release date",
      key: "release_date",
      formatter: (data): string =>
        new Date(data as string).toUTCString().slice(0, 16),
    },
    {
      name: "Language",
      key: "spoken_languages",
      formatter: (data): string => (data as SpokenLanguage[])[0].name,
    },
    {
      name: "Budget",
      key: "budget",
      formatter: (data): string => `$ ${(data as number).toLocaleString()}`,
    },
    {
      name: "Revenue",
      key: "revenue",
      formatter: (data): string => `$ ${(data as number).toLocaleString()}`,
    },
  ];

  return (
    <section className="md:pt-18">
      <section className="relative">
        <img
          className="block absolute left-0 z-0 object-cover w-full h-full"
          style={{ filter: "grayscale(1) contrast(1.5)" }}
          src={`https://image.tmdb.org/t/p/original${dummyMovie.backdrop_path}`}
          alt={`${dummyMovie.title} backdrop`}
        />
        <div
          className="block absolute left-0 z-10 w-full h-full transition-color duration-1000"
          style={{
            backgroundColor: `${vibrant}E6`,
          }}
        />
        <section className="px-5 md:px-6 py-10 md:py-10 flex flex-col md:flex-row relative z-20 max-w-5xl mx-auto">
          <img
            className="w-full md:w-5/12 lg:w-4/12 rounded-md md:rounded shadow-md"
            src={`https://image.tmdb.org/t/p/original${dummyMovie.poster_path}`}
            alt={`${dummyMovie.title} poster`}
          />
          <article className="mt-6 md:mt-0 md:ml-6 md:w-7/12 lg:w-8/12 text-gray-100">
            <h2 className="text-4xl">{dummyMovie.title}</h2>
            <div className="mt-3">
              <Badge>{getYear(dummyMovie.release_date)}</Badge>
              <span className="ml-6">
                {dummyMovie.genres.map((genre) => (
                  <Badge className="mr-1" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </span>
              <span className="ml-6 text-gray-200">
                {toHourFormat(dummyMovie.runtime)}
              </span>
            </div>
            <div className="flex items-center mt-5">
              <div className="w-12">
                <CircularProgress value={dummyMovie.vote_average} />
              </div>
              <p className="pl-6 italic">{`"${dummyMovie.tagline}"`}</p>
            </div>
            <section>
              <h3 className="mt-5 text-xs leading-4 uppercase text-gray-400 tracking-wide">
                Overview
              </h3>
              <p className="mt-2 tracking-wide text-sm">
                {dummyMovie.overview}
              </p>
            </section>
            <div className="flex flex-col items-start">
              {(["directors", "writters"] as ["directors", "writters"]).map(
                (job) => (
                  <section className="mt-5 flex flex-col" key={job}>
                    <h3 className="uppercase text-gray-400 tracking-wide text-xs">
                      {job}
                    </h3>
                    <div className="flex">
                      {principalCrew[job].map((name, index) => (
                        <Badge
                          key={name}
                          className={`mt-2 ${index !== 0 ? "ml-3" : ""}`}
                        >
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </section>
                )
              )}
            </div>
          </article>
        </section>
      </section>
      <Carousel
        title="Starring"
        titleClass="pl-5 md:pl-10 pb-4 md:pb-6"
        data={dummyCredits.cast}
        cardType="castPerson"
        breakpointsConfig={{
          "0": { slidesPerView: 4 },
          "470": { slidesPerView: 5 },
          "575": { slidesPerView: 6 },
          "1024": { slidesPerView: 7 },
        }}
        sliderClass="px-5 md:px-0 md:mx-5"
        wrapperClass="pt-10"
      />
      <hr className="w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl" />
      <section className="h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl">
        {facts.map((fact) => (
          <Fact
            name={fact.name}
            formatter={fact.formatter}
            data={dummyMovie[fact.key]}
            key={fact.key}
          />
        ))}
      </section>
      <hr className="w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl" />
      <Carousel
        title="Recommended"
        data={dummyRecommended as MovieItemAttr[]}
        cardType="movie"
        titleClass="pl-5 pb-4 md:pl-10 md:pb-6"
        sliderClass="px-5 md:px-0 md:mx-5"
        breakpointsConfig={{
          "0": { slidesPerView: 3 },
          "575": { slidesPerView: 4 },
          "765": { slidesPerView: 5 },
          "1024": { slidesPerView: 6 },
        }}
        wrapperClass="pb-12"
      />
    </section>
  );
};
