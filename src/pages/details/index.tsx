import { Badge } from "./badge";
import { Carousel } from "@components/carousel";
import { CircularProgress } from "@components/circular-progress";
import { Fragment } from "react";
import { Loading } from "@components/loading";
import { Review } from "./review";
import { TrailerModal } from "@components/trailer-modal";
import { imageNotFound } from "@assets/images";
import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL, BackdropSizes, PosterSizes } from "@utils/api-config";
import {
  Fact,
  FactProps,
  dateFormatter,
  langFormatter,
  moneyFormatter,
} from "./fact";
import { MovieDetailsAttr, useMovie } from "@services/movie";
import { getYear, toHourFormat } from "@utils/formats";

const getPrincipalCrew = (
  crewPeople: MovieDetailsAttr["credits"]["crew"]
): {
  directors: Array<string>;
  writters: Array<string>;
} =>
  crewPeople.reduce<{
    directors: Array<string>;
    writters: Array<string>;
  }>(
    (accu, crewPerson) => {
      if (crewPerson.job === "Director") {
        return { ...accu, directors: [...accu.directors, crewPerson.name] };
      }
      if (crewPerson.job === "Writer") {
        return { ...accu, writters: [...accu.writters, crewPerson.name] };
      }

      return accu;
    },
    {
      directors: [],
      writters: [],
    }
  );

const facts: Array<
  {
    key: keyof MovieDetailsAttr;
  } & Omit<FactProps, "data">
> = [
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

const Details = (): React.ReactElement => {
  const { id: movieID } = useParams();

  const movieQuery = useMovie(movieID);

  if (movieQuery.isSuccess) {
    const principalCrew = getPrincipalCrew(movieQuery.data.credits.crew);
    const renderPrincipalCrew = (
      job: keyof typeof principalCrew
    ): React.ReactElement | null =>
      principalCrew[job].length > 0 ? (
        <Fragment>
          <h3 className="capitalize font-light text-gray-800 tracking-wide text-lg mt-12 md:mt-5 md:text-base">
            {job}
          </h3>
          {principalCrew[job].map((name) => (
            <span key={name} className="inline-block mt-2 mr-3 text-gray-600">
              <Badge>{name}</Badge>
            </span>
          ))}
        </Fragment>
      ) : null;

    const trailers = movieQuery.data.videos.results.filter(
      (video) => video.type !== "Trailer"
    );

    return (
      <section className="pb-16">
        <div className="relative">
          <picture>
            <source
              srcSet={
                movieQuery.data.backdrop_path
                  ? `${BASE_IMAGE_URL}${BackdropSizes.md}${movieQuery.data.backdrop_path}`
                  : imageNotFound
              }
              media="(min-width: 768px)"
            />
            <img
              className="block absolute left-0 z-0 object-cover w-full h-full bg-gray-500"
              style={{ filter: "grayscale(1) contrast(1.5)" }}
              src={
                movieQuery.data.backdrop_path
                  ? `${BASE_IMAGE_URL}${BackdropSizes.sm}${movieQuery.data.backdrop_path}`
                  : imageNotFound
              }
              alt={`${movieQuery.data.title} backdrop`}
            />
          </picture>
          <div
            className="block absolute left-0 z-10 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(${movieQuery.data.vibrantColor}E6, #111822)`,
            }}
          />
          <article className="px-5 pt-10 flex flex-col relative z-20 max-w-5xl mx-auto md:flex-row md:px-6 md:pt-20 lg:pt-24">
            <div className="md:w-4/12 md:mt-1">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="w-full h-full object-cover bg-gray-400 rounded-md md:rounded shadow-md"
                  src={
                    movieQuery.data.poster_path
                      ? `${BASE_IMAGE_URL}${PosterSizes.md}${movieQuery.data.poster_path}`
                      : imageNotFound
                  }
                  alt={`${movieQuery.data.title} poster`}
                />
              </div>
            </div>
            <div className="mt-6 text-gray-100 self-center md:mt-0 md:ml-6 md:w-8/12">
              <h2 className="text-4xl leading-none">{movieQuery.data.title}</h2>
              <div className="flex flex-wrap">
                <span className="mr-6 mt-5">
                  <Badge>
                    {movieQuery.data.release_date
                      ? getYear(movieQuery.data.release_date)
                      : new Date().getFullYear() + 1}
                  </Badge>
                </span>
                <span className="mt-5 mr-5">
                  {movieQuery.data.genres.slice(0, 4).map((genre) => (
                    <span className="mr-1" key={genre.id}>
                      <Badge>{genre.name}</Badge>
                    </span>
                  ))}
                </span>
                <p className="inline text-gray-200 mt-5 ml-1">
                  {movieQuery.data.runtime
                    ? toHourFormat(movieQuery.data.runtime)
                    : toHourFormat(200)}
                </p>
              </div>
              <p className="italic mt-5">
                {movieQuery.data.tagline
                  ? `"${movieQuery.data.tagline}"`
                  : null}
              </p>
              <div className="flex items-center mt-5">
                <div className="w-12 mr-8">
                  <CircularProgress
                    value={
                      movieQuery.data.vote_average === 0
                        ? 5
                        : movieQuery.data.vote_average
                    }
                  />
                </div>
                <TrailerModal movieID={movieID} />
              </div>
              <h3 className="mt-5 font-light text-gray-700 text-lg tracking-wide md:text-base">
                Overview
              </h3>
              <p className="mt-3 tracking-wide text-gray-600 text-sm leading-normal">
                {movieQuery.data.overview}
              </p>
              {renderPrincipalCrew("directors")}
              {renderPrincipalCrew("writters")}
            </div>
          </article>
        </div>
        {movieQuery.data.credits.cast.length > 0 ? (
          <Carousel
            title="Starring"
            titleClass="pl-5 md:pl-10 pb-4 md:pb-6"
            data={movieQuery.data.credits.cast.slice(0, 30)}
            cardType="castPerson"
            breakpointsConfig={{
              "0": { slidesPerView: 4 },
              "470": { slidesPerView: 5 },
              "575": { slidesPerView: 6 },
              "1024": { slidesPerView: 7 },
            }}
            sliderClass="px-5 md:px-0 md:mx-5"
            wrapperClass="mt-16"
            preRenderedSlides={5}
          />
        ) : null}
        <div className="mt-16 h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl">
          {facts.map((fact) =>
            movieQuery.data[fact.key] !== 0 ? (
              <Fact
                name={fact.name}
                formatter={fact.formatter}
                data={movieQuery.data[fact.key]}
                key={fact.key}
              />
            ) : null
          )}
        </div>
        {movieQuery.data.recommendations.results.length > 0 ? (
          <Carousel
            title="Recommended"
            data={movieQuery.data.recommendations.results}
            cardType="movie"
            titleClass="pl-5 pb-4 md:pl-10 md:pb-6"
            sliderClass="px-5 md:px-0 md:mx-5"
            wrapperClass="mt-16"
            breakpointsConfig={{
              "0": { slidesPerView: 3 },
              "575": { slidesPerView: 4 },
              "765": { slidesPerView: 5 },
              "1024": { slidesPerView: 6 },
            }}
            preRenderedSlides={4}
          />
        ) : null}
        {trailers.length > 0 ? (
          <Carousel
            title="Videos"
            data={trailers}
            cardType="trailer"
            titleClass="pl-5 pb-4 md:pl-10 md:pb-6"
            sliderClass="mx-5"
            wrapperClass="mt-16"
            breakpointsConfig={{
              "0": { slidesPerView: 1, cssMode: true },
              "575": { slidesPerView: 2, cssMode: true },
              "900": { slidesPerView: 3, cssMode: true },
            }}
          />
        ) : null}
        {movieQuery.data.reviews.results.length > 0 ? (
          <section className="max-w-screen-lg lg:mx-auto mt-16">
            <h2 className="text-gray-800 font-light tracking-wider text-lg pl-5 pb-4 md:pl-10 md:pb-6">
              Reviews
            </h2>
            <ul className="flex flex-col mx-5">
              {movieQuery.data.reviews.results.map((review) => (
                <li className="mb-5" key={review.id}>
                  <Review
                    url={review.url}
                    author={review.author}
                    content={review.content}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>
    );
  }

  if (movieQuery.isError) {
    return <p>There was an error while getting the movie :C</p>;
  }

  return <Loading />;
};

// eslint-disable-next-line import/no-default-export
export default Details;
