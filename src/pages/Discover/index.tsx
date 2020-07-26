import React from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/ItemCard";
import { dummyMovies } from "../Premier/dummy";
import { DropdownButton } from "./components/DropdownButton";
import { genres } from "./dummy";

const filters = ["country", "genre", "language", "year"];

const genresOptions = genres.map((genre) => ({
  value: genre.id.toString(),
  label: genre.name,
}));

export const Discover = (): React.ReactElement => {
  const { section } = useParams<{ section: string }>();

  return (
    <section className="px-5 max-w-6xl md:pt-24 md:mx-4 lg:mx-auto">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <h2 className="lg:pl-16 uppercase text-lg text-gray-800 font-light tracking-wider">
          {section === "tv" ? "tv shows" : section}
        </h2>
        <div className="pt-5 md:p-0 flex flex-wrap sm:flex-no-wrap justify-center max-w-xl">
          {filters.map((filter) => (
            <DropdownButton
              key={filter}
              label={filter}
              options={genresOptions}
            />
          ))}
        </div>
      </div>
      <div className="pt-12 pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 col-gap-4 row-gap-6 items-center justify-items-center grid-flow-row-dense">
        {dummyMovies.map((movie) => (
          <ItemCard
            key={movie.id}
            id={movie.id}
            imageUrl={movie.poster_path}
            title={movie.title}
            language={movie.original_language}
            releaseDate={movie.release_date}
            voteAvg={movie.vote_average}
          />
        ))}
      </div>
      <button className="block mx-auto mb-20 uppercase text-gray-800 tracking-widest">
        Load More
      </button>
    </section>
  );
};
