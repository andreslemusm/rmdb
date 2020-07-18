import React from "react";
import { SecondaryCard } from "../../components/SecondaryCard";
import { dummyMovies } from "../../components/App/dummy";
import { DropdownButton } from "../../components/DropdownButton";

export const Search = (): React.ReactElement => (
  <section className="px-5 max-w-6xl pt-24 md:mx-4 lg:mx-auto">
    <div className="flex justify-around items-center">
      <h2 className="md:pl-16 uppercase text-lg text-gray-800 font-light tracking-wider">
        Films
      </h2>
      <div className="flex justify-center">
        {[1, 2, 3, 4, 5].map((key) => (
          <DropdownButton key={key} />
        ))}
      </div>
    </div>
    <div className="pt-12 pb-40 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 col-gap-4 row-gap-6 place-items-center grid-flow-row-dense">
      {dummyMovies.map((movie) => (
        <SecondaryCard
          key={movie.id}
          imageUrl={movie.poster_path}
          title={movie.title}
          language={movie.original_language}
          releaseDate={movie.release_date}
          voteAvg={movie.vote_average}
        />
      ))}
    </div>
  </section>
);
