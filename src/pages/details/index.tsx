import { Badge } from "./badge";
import { Carousel } from "@components/carousel";
import { CircularProgress } from "@components/circular-progress";
import { Fact } from "./fact";
import { FactConfig } from "./fact/types";
import { Fragment } from "react";
import { Loading } from "@components/loading";
import { Review } from "./review";
import { getDetails } from "./queries";
import { imageNotFound } from "@assets/images";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useTrailerModal } from "@utils/hooks";
import { BASE_IMAGE_URL, BackdropSizes, PosterSizes } from "@root/api-config";
import {
  dateFormatter,
  langFormatter,
  moneyFormatter,
} from "./fact/formatters";
import { getYear, toHourFormat } from "@utils/formats";

const facts: Array<FactConfig> = [
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
  const { id } = useParams();

  const { data: movieDetails, isLoading } = useQuery(
    ["details", id],
    () => getDetails(id),
    {
      staleTime: Infinity,
    }
  );

  const { showButton, showModal, TrailerModal, PlayButton } =
    useTrailerModal(id);

  return isLoading || movieDetails === undefined ? (
    <Loading />
  ) : (
    <section className="pb-16">
      <div className="relative">
        <picture>
          <source
            srcSet={
              movieDetails.backdrop_path
                ? `${BASE_IMAGE_URL}${BackdropSizes.md}${movieDetails.backdrop_path}`
                : imageNotFound
            }
            media="(min-width: 768px)"
          />
          <img
            className="block absolute left-0 z-0 object-cover w-full h-full bg-gray-500"
            style={{ filter: "grayscale(1) contrast(1.5)" }}
            src={
              movieDetails.backdrop_path
                ? `${BASE_IMAGE_URL}${BackdropSizes.sm}${movieDetails.backdrop_path}`
                : imageNotFound
            }
            alt={`${movieDetails.title} backdrop`}
          />
        </picture>
        <div
          className="block absolute left-0 z-10 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${movieDetails.vibrantColor}E6, #111822)`,
          }}
        />
        <article className="px-5 pt-10 flex flex-col relative z-20 max-w-5xl mx-auto md:flex-row md:px-6 md:pt-20 lg:pt-24">
          <img
            className="w-full h-full object-cover bg-gray-400 md:w-4/12 md:mt-1 rounded-md md:rounded shadow-md"
            src={
              movieDetails.poster_path
                ? `${BASE_IMAGE_URL}${PosterSizes.md}${movieDetails.poster_path}`
                : imageNotFound
            }
            alt={`${movieDetails.title} poster`}
          />
          <div className="mt-6 text-gray-100 self-center md:mt-0 md:ml-6 md:w-8/12">
            <h2 className="text-4xl leading-none">{movieDetails.title}</h2>
            <div className="flex flex-wrap">
              <span className="mr-6 mt-5">
                <Badge>
                  {movieDetails.release_date
                    ? getYear(movieDetails.release_date)
                    : new Date().getFullYear() + 1}
                </Badge>
              </span>
              <span className="mt-5 mr-5">
                {movieDetails.genres.slice(0, 4).map((genre) => (
                  <span className="mr-1" key={genre.id}>
                    <Badge>{genre.name}</Badge>
                  </span>
                ))}
              </span>
              <p className="inline text-gray-200 mt-5 ml-1">
                {movieDetails.runtime
                  ? toHourFormat(movieDetails.runtime)
                  : toHourFormat(200)}
              </p>
            </div>
            <p className="italic mt-5">
              {movieDetails.tagline ? `"${movieDetails.tagline}"` : undefined}
            </p>
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
            <h3 className="mt-5 font-light text-gray-700 text-lg tracking-wide md:text-base">
              Overview
            </h3>
            <p className="mt-3 tracking-wide text-gray-600 text-sm leading-normal">
              {movieDetails.overview}
            </p>
            {(["directors", "writters"] as const).map(
              (job) =>
                movieDetails.credits[job].length > 0 && (
                  <Fragment key={job}>
                    <h3 className="capitalize font-light text-gray-800 tracking-wide text-lg mt-12 md:mt-5 md:text-base">
                      {job}
                    </h3>
                    {movieDetails.credits[job].map((name) => (
                      <span
                        key={name}
                        className="inline-block mt-2 mr-3 text-gray-600"
                      >
                        <Badge>{name}</Badge>
                      </span>
                    ))}
                  </Fragment>
                )
            )}
          </div>
        </article>
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
          wrapperClass="mt-16"
          preRenderedSlides={5}
        />
      )}
      <div className="mt-16 h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl">
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
      </div>
      {movieDetails.recommendations.length > 0 && (
        <Carousel
          title="Recommended"
          data={movieDetails.recommendations}
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
      )}
      {movieDetails.videos.length > 0 && (
        <Carousel
          title="Videos"
          data={movieDetails.videos}
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
      )}
      {movieDetails.reviews.length > 0 && (
        <section className="max-w-screen-lg lg:mx-auto mt-16">
          <h2 className="text-gray-800 font-light tracking-wider text-lg pl-5 pb-4 md:pl-10 md:pb-6">
            Reviews
          </h2>
          <ul className="flex flex-col mx-5">
            {movieDetails.reviews.map((review) => (
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
      )}
      {showModal && <TrailerModal />}
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default Details;
