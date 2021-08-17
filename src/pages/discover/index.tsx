import { Dropdown } from "./dropdown";
import { Loading } from "@components/loading";
import { MovieCard } from "@components/movie-card";
import { getDiscover, getGenres } from "./queries";
import { useInfiniteQuery, useQuery } from "react-query";

// Filters
const sortByData = [
  { value: "popularity.asc", name: "Popularity Ascending" },
  { value: "release_date.desc", name: "Release Date Descending" },
  { value: "release_date.asc", name: "Release Date Ascending" },
  { value: "revenue.desc", name: "Revenue Descending" },
  { value: "revenue.asc", name: "Revenue Ascending" },
  { value: "vote_average.desc", name: "Vote Average Descending" },
  { value: "vote_average.asc", name: "Vote Average Ascending" },
];

const Discover = (): React.ReactElement => {
  // Filters
  const { data: genresData } = useQuery("genres", getGenres, {
    staleTime: Infinity,
  });

  // Search movies
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("discover", getDiscover, {
      staleTime: Infinity,
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    });

  return isLoading || data === undefined ? (
    <Loading />
  ) : (
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
      <div className="pt-12 pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-6 grid-flow-row-dense">
        {data.pages.flatMap((movies) =>
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              language={movie.original_language}
              releaseDate={movie.release_date}
              voteAvg={movie.vote_average}
            />
          ))
        )}
      </div>
      <div className="flex justify-center items-center h-20 mb-20">
        {isFetchingNextPage ? (
          <Loading height="h-auto" />
        ) : (
          !isLoading && (
            <button
              onClick={() => fetchNextPage()}
              className="uppercase text-gray-800 tracking-widest transition-colors duration-200 hover:text-gray-500"
            >
              Load More
            </button>
          )
        )}
      </div>
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default Discover;
