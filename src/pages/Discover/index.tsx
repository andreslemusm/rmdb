import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { MovieCard } from "../../components/MovieCard";
import { Dropdown } from "./components/Dropdown";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { getDiscover, getGenres } from "./queries";

export const Discover = (): React.ReactElement => {
  // Filters
  const { data: genresData } = useQuery("genres", getGenres, {
    staleTime: Infinity,
  });
  const sortByData = [
    { value: "popularity.asc", name: "Popularity Ascending" },
    { value: "release_date.desc", name: "Release Date Descending" },
    { value: "release_date.asc", name: "Release Date Ascending" },
    { value: "revenue.desc", name: "Revenue Descending" },
    { value: "revenue.asc", name: "Revenue Ascending" },
    { value: "vote_average.desc", name: "Vote Average Descending" },
    { value: "vote_average.asc", name: "Vote Average Ascending" },
  ];

  // Search movies
  const { data, isLoading, fetchMore, isFetchingMore } = useInfiniteQuery(
    "discover",
    getDiscover,
    {
      staleTime: Infinity,
      getFetchMore: (_lastPage, allPages) => allPages.length + 1,
    }
  );
  function handleLoadMore(): void {
    void fetchMore();
  }

  return (
    <Layout>
      <section className="px-5 max-w-6xl md:pt-24 md:mx-4 lg:mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <h2 className="lg:pl-16 uppercase text-lg text-gray-800 font-light tracking-wider">
            Movies
          </h2>
          <div className="pt-5 md:p-0 flex flex-wrap sm:flex-no-wrap justify-center max-w-xl">
            <Dropdown label="genre" options={genresData} />
            <Dropdown label="sort by" options={sortByData} />
          </div>
        </div>
        <div className="pt-12 pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 col-gap-4 row-gap-6 grid-flow-row-dense">
          {isLoading
            ? "loading..."
            : data !== undefined &&
              data
                .flat()
                .map((movie) => (
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
        <div className="flex justify-center items-center h-20 mb-20">
          {isFetchingMore ? (
            <Loading />
          ) : (
            <button
              onClick={handleLoadMore}
              className="uppercase text-gray-800 tracking-widest transition-colors duration-200 hover:text-gray-500"
            >
              Load More
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
};
