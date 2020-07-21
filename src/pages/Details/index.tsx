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
          <div className="mt-6 md:mt-0 md:ml-6 text-gray-100 md:w-8/12">
            <h2 className="text-3xl">{dummyMovie.title}</h2>
            <div className="mt-4">
              <Badge>{getYear(dummyMovie.release_date)}</Badge>
              <span className="ml-6">
                {dummyMovie.genres.map((genre) => (
                  <Badge className="mr-1" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </span>
              <span className="ml-6">{toHourFormat(dummyMovie.runtime)}</span>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12">
                <CircularProgress value={dummyMovie.vote_average} />
              </div>
              <h3 className="text-gray-300 pl-6 italic">
                {`"${dummyMovie.tagline}"`}
              </h3>
            </div>
            <h3 className="mt-6 text-xl leading-4">Overview</h3>
            <p className="text-gray-300 mt-4 tracking-wide md:text-sm">
              {dummyMovie.overview}
            </p>
            <div className="mt-6 flex flex-wrap">
              <div className="flex flex-col">
                <h3>Directed By</h3>
                {principalCrew.directors.map((director) => (
                  <Badge key={director} className="mt-1">
                    {director}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col ml-16">
                <h3>Produced By</h3>
                {principalCrew.producers.map((producer) => (
                  <Badge key={producer} className="mt-1">
                    {producer}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col mt-10">
                <h3>Written By</h3>
                {principalCrew.writters.map((writer) => (
                  <Badge key={writer} className="mt-1">
                    {writer}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col ml-16 mt-10">
                <h3>Characters By</h3>
                {principalCrew.characters.map((character) => (
                  <Badge key={character} className="mt-1">
                    {character}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};
