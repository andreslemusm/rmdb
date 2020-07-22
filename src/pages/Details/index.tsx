import React from "react";
import { dummyMovie, dummyCredits } from "./dummy";
import Vibrant from "node-vibrant";
import { getYear, toHourFormat, getPrincipalCrew } from "../../utils";
import { Badge } from "../../components/Badge";
import { CircularProgress } from "../../components/CircularProgress";

export const Details = (): React.ReactElement => {
  const [vibrant, setVibrant] = React.useState("");

  React.useEffect(() => {
    Vibrant.from(
      `https://image.tmdb.org/t/p/original/${dummyMovie.backdrop_path}`
    )
      .getPalette()
      .then((palette) => {
        setVibrant(palette.DarkVibrant?.getHex() as string);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const principalCrew = getPrincipalCrew(dummyCredits.crew);

  return (
    <section className="md:pt-18">
      <div className="relative">
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
        <div className="px-5 md:px-6 py-12 md:py-10 flex flex-col md:flex-row relative z-20 max-w-5xl mx-auto">
          <img
            className="w-full md:w-4/12 rounded-md md:rounded shadow-md"
            src={`https://image.tmdb.org/t/p/original${dummyMovie.poster_path}`}
            alt={`${dummyMovie.title} poster`}
          />
          <div className="mt-6 md:mt-0 md:ml-6 md:w-8/12 text-gray-100">
            <h2 className="text-4xl">{dummyMovie.title}</h2>
            <div className="mt-4">
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
            <div className="flex items-center mt-8">
              <div className="w-12">
                <CircularProgress value={dummyMovie.vote_average} />
              </div>
              <h3 className="pl-6 italic">{`"${dummyMovie.tagline}"`}</h3>
            </div>
            <h3 className="mt-8 text-xs leading-4 uppercase text-gray-400 tracking-wide">
              Overview
            </h3>
            <p className="mt-3 tracking-wide text-sm">{dummyMovie.overview}</p>
            <div className="flex flex-col items-start">
              {(["directors", "writters"] as ["directors", "writters"]).map(
                (job) => (
                  <div className="mt-6 flex flex-col" key={job}>
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
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};
