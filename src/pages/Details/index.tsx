import React from "react";
import { dummyMovie } from "./dummy";
import Vibrant from "node-vibrant";
import { getYear, toHourFormat } from "../../utils";
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
        console.log(palette);
        setVibrant(palette.DarkVibrant?.getHex() as string);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="md:pt-18">
      <div className="px-5 relative">
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
        <div className="flex flex-col md:flex-row relative z-20">
          <img
            className="mx-auto mt-12 md:max-w-xs rounded-md shadow-md"
            src={`https://image.tmdb.org/t/p/original${dummyMovie.poster_path}`}
            alt={`${dummyMovie.title} poster`}
          />
          <div className="mt-6 text-gray-100">
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
            <p className="text-gray-300 my-4 tracking-wide">
              {dummyMovie.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
