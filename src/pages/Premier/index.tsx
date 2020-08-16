import React, { useContext, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { moviesLists, MoviesContext } from "./context/movies";

export const Premier = (): React.ReactElement => {
  const { state, dispatch, thunks } = useContext(MoviesContext);

  useEffect(() => {
    if (state.movies === null) {
      dispatch(thunks.fetchMovies);
    }
  }, [dispatch, thunks.fetchMovies, state.movies]);

  return (
    <Layout>
      <Hero />
      <div className="pb-8 md:pb-16 md:pt-2">
        {state.error !== null ? (
          <div>
            The app creator is procrasting (intead of creating a notification
            component), by the way check the console{" "}
          </div>
        ) : (
          <React.Fragment>
            {!state.loading &&
              state.movies !== null &&
              moviesLists.map((listType) => (
                <React.Fragment key={listType}>
                  <Carousel
                    title={listType.split("_").join(" ")}
                    data={state.movies![listType]}
                    cardType="movie"
                    titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 uppercase"
                    sliderClass="px-5 sm:px-8 md:p-0"
                    wrapperClass="my-8 md:mx-5"
                  />
                  <hr className="my-2 mx-auto border-gray-900 hidden md:block w-2/3 xl:w-1/2" />
                </React.Fragment>
              ))}
          </React.Fragment>
        )}
      </div>
    </Layout>
  );
};
