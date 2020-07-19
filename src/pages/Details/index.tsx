import React from "react";
import { dummyMovie } from "./dummy";

export const Details = (): React.ReactElement => (
  <section className="h-screen md:h-auto text-gray-700">
    <header className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${dummyMovie.backdrop_path}`}
        alt={`${dummyMovie.title} backdrop`}
      />
      <img
        className="absolute top-0 w-1/3 ml-12"
        src={`https://image.tmdb.org/t/p/original/${dummyMovie.poster_path}`}
        alt={`${dummyMovie.title} poster`}
      />
    </header>
  </section>
);
