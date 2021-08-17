import { Carousel } from "@components/carousel";
import { Fragment } from "react";
import { Hero } from "./hero";
import { Loading } from "@components/loading";
import { useQuery } from "react-query";
import { fetchMovies, releaseTypes } from "./queries";

const Home = (): React.ReactElement => {
  const { isLoading, data } = useQuery("movies", fetchMovies, {
    staleTime: Infinity,
  });

  return isLoading || data === undefined ? (
    <Loading />
  ) : (
    <Fragment>
      <Hero data={data.trending} />
      <div className="pb-8 md:pb-16 md:pt-2">
        {releaseTypes.map((listType) => (
          <Carousel
            key={listType}
            title={listType.split("_").join(" ")}
            data={data[listType]}
            cardType="movie"
            titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 uppercase"
            sliderClass="px-5 sm:px-8 md:p-0"
            wrapperClass="my-8 md:mx-5 md:my-16"
            preRenderedSlides={5}
          />
        ))}
      </div>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
