import React from "react";
import { getYear, toHourFormat } from "../../utils/formats";
import { Badge } from "./components/Badge";
import { CircularProgress } from "../../components/CircularProgress";
import { Fact } from "./components/Fact";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { BASE_IMAGE_URL, backdropSize, posterSize } from "../../apiConfig";
import {
  dateFormatter,
  langFormatter,
  moneyFormatter,
} from "./components/Fact/formatters";
import { FactConfig } from "./components/Fact/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetails } from "./queries";
import { Loading } from "../../components/Loading";
import { useTrailerModal } from "../../utils/hooks";
import imageNotFound from "../../assets/no-image-found.svg";

export const Details = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();

  const facts: FactConfig[] = [
    { name: "Status", key: "status" },
    {
      name: "Release date",
      key: "release_date",
      formatter: dateFormatter,
    },
    {
      name: "Language",
      key: "spoken_languages",
      formatter: langFormatter,
    },
    {
      name: "Budget",
      key: "budget",
      formatter: moneyFormatter,
    },
    {
      name: "Revenue",
      key: "revenue",
      formatter: moneyFormatter,
    },
  ];

  const { data: movieDetails, isLoading } = useQuery(
    ["details", id],
    getDetails,
    {
      staleTime: Infinity,
    }
  );

  const { showButton, showModal, TrailerModal, PlayButton } = useTrailerModal(
    id
  );

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        movieDetails !== undefined && (
          <section className="md:pt-18">
            <div className="relative">
              <picture>
                <source
                  srcSet={
                    movieDetails.backdrop_path
                      ? `${BASE_IMAGE_URL}${backdropSize.md}${movieDetails.backdrop_path}`
                      : undefined
                  }
                  media="(min-width: 768px)"
                />
                <img
                  className="block absolute left-0 z-0 object-cover w-full h-full"
                  style={{ filter: "grayscale(1) contrast(1.5)" }}
                  src={
                    movieDetails.backdrop_path
                      ? `${BASE_IMAGE_URL}${backdropSize.sm}${movieDetails.backdrop_path}`
                      : undefined
                  }
                  alt={`${movieDetails.title} backdrop`}
                />
              </picture>
              <div
                className="block absolute left-0 z-10 w-full h-full"
                style={{
                  backgroundColor: `${movieDetails.vibrantColor}E6`,
                }}
              />
              <section className="px-5 md:px-6 py-10 md:py-10 flex flex-col md:flex-row relative z-20 max-w-5xl mx-auto">
                <picture className="w-full md:w-4/12">
                  <source
                    srcSet={
                      movieDetails.poster_path
                        ? `${BASE_IMAGE_URL}${posterSize.md}${movieDetails.poster_path}`
                        : imageNotFound
                    }
                    media="(min-width: 500px) and (max-width: 768px)"
                  />
                  <img
                    className="w-full bg-gray-400 rounded-md md:rounded shadow-md"
                    src={
                      movieDetails.poster_path
                        ? `${BASE_IMAGE_URL}${posterSize.sm}${movieDetails.poster_path}`
                        : imageNotFound
                    }
                    alt={`${movieDetails.title} poster`}
                  />
                </picture>
                <article className="mt-6 md:mt-0 md:ml-6 md:w-8/12 text-gray-100">
                  <h2 className="text-4xl">{movieDetails.title}</h2>
                  <div className="mt-3">
                    <span className="mr-6">
                      <Badge>{getYear(movieDetails.release_date)}</Badge>
                    </span>
                    <span className="mr-6">
                      {movieDetails.genres.map((genre) => (
                        <span className="mr-1" key={genre.id}>
                          <Badge>{genre.name}</Badge>
                        </span>
                      ))}
                    </span>
                    <span className="hidden sm:inline-block">
                      <p className="text-gray-200">
                        {movieDetails.runtime
                          ? toHourFormat(movieDetails.runtime)
                          : toHourFormat(200)}
                      </p>
                    </span>
                  </div>
                  <div className="mt-5">
                    <p className="italic">
                      {movieDetails.tagline
                        ? `"${movieDetails.tagline}"`
                        : undefined}
                    </p>
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="w-12 mr-8">
                      <CircularProgress
                        value={
                          movieDetails.vote_average === 0
                            ? 5
                            : movieDetails.vote_average
                        }
                      />
                    </div>
                    {showButton && <PlayButton />}
                  </div>
                  <section>
                    <h3 className="mt-5 text-xs leading-4 uppercase text-gray-400 tracking-wide">
                      Overview
                    </h3>
                    <p className="mt-2 tracking-wide text-sm">
                      {movieDetails.overview}
                    </p>
                  </section>
                  <div className="flex flex-col items-start">
                    {(["directors", "writters"] as const).map(
                      (job) =>
                        movieDetails.credits[job].length > 0 && (
                          <section className="mt-5 flex flex-col" key={job}>
                            <h3 className="uppercase text-gray-400 tracking-wide text-xs">
                              {job}
                            </h3>
                            <div className="flex">
                              {movieDetails.credits[job].map((name, index) => (
                                <div
                                  key={name}
                                  className={`mt-2 ${
                                    index !== 0 ? "ml-3" : ""
                                  }`}
                                >
                                  <Badge>{name}</Badge>
                                </div>
                              ))}
                            </div>
                          </section>
                        )
                    )}
                  </div>
                </article>
              </section>
            </div>
            {movieDetails.credits.cast.length > 0 && (
              <Carousel
                title="Starring"
                titleClass="pl-5 md:pl-10 pb-4 md:pb-6"
                data={movieDetails.credits.cast.slice(0, 30)}
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
            )}
            <hr className="w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl" />
            <section className="h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl">
              {facts.map(
                (fact) =>
                  movieDetails[fact.key] !== 0 && (
                    <Fact
                      name={fact.name}
                      formatter={fact.formatter}
                      data={movieDetails[fact.key]}
                      key={fact.key}
                    />
                  )
              )}
            </section>
            <hr className="w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl" />
            {movieDetails.recommendations.length > 0 && (
              <Carousel
                title="Recommended"
                data={movieDetails.recommendations}
                cardType="movie"
                titleClass="pl-5 pb-4 md:pl-10 md:pb-6"
                sliderClass="px-5 md:px-0 md:mx-5"
                breakpointsConfig={{
                  "0": { slidesPerView: 3 },
                  "575": { slidesPerView: 4 },
                  "765": { slidesPerView: 5 },
                  "1024": { slidesPerView: 6 },
                }}
              />
            )}
            <hr className="w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl" />
            {movieDetails.videos.length > 0 && (
              <Carousel
                title="Videos"
                data={movieDetails.videos}
                cardType="trailer"
                titleClass="pl-5 pb-4 md:pl-10 md:pb-6"
                sliderClass="mx-5"
                breakpointsConfig={{
                  "0": { slidesPerView: 1, cssMode: true },
                  "575": { slidesPerView: 2, cssMode: true },
                  "900": { slidesPerView: 3, cssMode: true },
                }}
                wrapperClass="pb-16"
              />
            )}
          </section>
        )
      )}
      {showModal && <TrailerModal />}
    </Layout>
  );
};
