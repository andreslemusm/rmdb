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
    <section className="max-w-6xl px-5 md:mx-4 md:pt-24 lg:mx-auto">
      <div className="flex flex-col items-center justify-around md:flex-row">
        <h2 className="text-lg font-light uppercase tracking-wider text-gray-800 lg:pl-16">
          Movies
        </h2>
        <div className="sm:flex-no-wrap flex max-w-xl flex-wrap justify-center pt-5 md:p-0">
          <Dropdown label="genre" options={genresData} />
          <Dropdown label="sort by" options={sortByData} />
        </div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-x-4 gap-y-6 pt-12 pb-20 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
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
      <div className="mb-20 flex h-20 items-center justify-center">
        {isFetchingNextPage ? (
          <Loading height="h-auto" />
        ) : (
          !isLoading && (
            <button
              onClick={() => fetchNextPage()}
              className="uppercase tracking-widest text-gray-800 transition-colors duration-200 hover:text-gray-500"
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
