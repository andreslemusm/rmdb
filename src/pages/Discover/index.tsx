import React from "react";
import { MovieCard } from "../../components/MovieCard";
import { dummyMovies } from "../Premier/dummy";
import { Dropdown } from "./components/Dropdown";
import { genres } from "./dummy";
import { Layout } from "../../components/Layout";

export const Discover = (): React.ReactElement => {
  const filters = ["country", "genre", "language", "year"];

  const genresOptions = genres.map((genre) => ({
    value: genre.id.toString(),
    name: genre.name,
  }));

  // React.useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/configuration/countries?api_key=${API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);
  // React.useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <Layout>
      <section className="px-5 max-w-6xl md:pt-24 md:mx-4 lg:mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <h2 className="lg:pl-16 uppercase text-lg text-gray-800 font-light tracking-wider">
            Movies
          </h2>
          <div className="pt-5 md:p-0 flex flex-wrap sm:flex-no-wrap justify-center max-w-xl">
            {filters.map((filter) => (
              <Dropdown key={filter} label={filter} options={genresOptions} />
            ))}
          </div>
        </div>
        <div className="pt-12 pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 col-gap-4 row-gap-6 grid-flow-row-dense">
          {dummyMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path || ""}
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
    </Layout>
  );
};
