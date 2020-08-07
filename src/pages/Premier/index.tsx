import React from "react";
import { Hero } from "./components/Hero";
import { Carousel } from "../../components/Carousel";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";
import { BASE_API_URL, API_KEY } from "../../apiConfig";
import { MovieItemAttr } from "../../components/Carousel/types";

type AppState = {
  error: Error | null;
  loading: boolean;
  movies: Record<string, MovieItemAttr[]> | null;
};

type Action =
  | { type: "FETCH_MOVIES_PENDING"; payload: boolean }
  | { type: "FETCH_MOVIES_FAILURE"; payload: Error }
  | {
      type: "FETCH_MOVIES_SUCCESS";
      payload: { types: string[]; data: { results: MovieItemAttr[] }[] };
    };

const moviesReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "FETCH_MOVIES_PENDING":
      return {
        ...state,
        loading: action.payload,
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        loading: false,
        movies: null,
        error: action.payload,
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        loading: false,
        error: null,
        movies: action.payload.types.reduce((movies, type, index) => {
          return {
            ...movies,
            [type]: action.payload.data[index].results,
          };
        }, {}),
      };
    default:
      return state;
  }
};

export const Premier = (): React.ReactElement => {
  const listTypes = ["now_playing", "popular", "top_rated", "upcoming"];

  // State management
  const [state, dispatch] = React.useReducer(moviesReducer, {
    error: null,
    loading: true,
    movies: null,
  });
  function fetchMovies(listTypes: string[]): void {
    dispatch({ type: "FETCH_MOVIES_PENDING", payload: true });
    const fetchPromises = listTypes.map((listType) =>
      fetch(
        `${BASE_API_URL}/${listType}?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
    Promise.all(fetchPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        dispatch({
          type: "FETCH_MOVIES_SUCCESS",
          payload: {
            types: listTypes,
            data: data as { results: MovieItemAttr[] }[],
          },
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error as Error });
      });
  }
  React.useEffect(() => {
    fetchMovies(listTypes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              listTypes.map((listType) => (
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
      <Loading />
    </Layout>
  );
};
