import React, { createContext } from "react";
import { BASE_API_URL, API_KEY } from "../../../apiConfig";
import { MovieItemAttr } from "../../../components/Carousel/types";
import { useThunkReducer, Thunk } from "../../../utils/hooks";

export const moviesLists = ["now_playing", "popular", "top_rated", "upcoming"];

// Actions
type MoviesAction =
  | { type: "MOVIES/FAILURE"; payload: Error }
  | { type: "MOVIES/LOADING" }
  | { type: "MOVIES/SUCCESS"; payload: { results: MovieItemAttr[] }[] };

// Reducer
type MoviesState = {
  error: Error | null;
  loading: boolean;
  movies: Record<string, MovieItemAttr[]> | null;
};

const moviesReducer = (
  state: MoviesState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case "MOVIES/LOADING":
      return {
        error: null,
        loading: true,
        movies: null,
      };
    case "MOVIES/FAILURE":
      return {
        error: action.payload,
        loading: false,
        movies: null,
      };
    case "MOVIES/SUCCESS":
      return {
        error: null,
        loading: false,
        movies: moviesLists.reduce(
          (movies, movielist, index) => ({
            ...movies,
            [movielist]: action.payload[index].results,
          }),
          {}
        ),
      };
    default:
      return state;
  }
};

// Thunks
const fetchMovies = (dispatch: React.Dispatch<MoviesAction>): void => {
  dispatch({ type: "MOVIES/LOADING" });

  void (async (): Promise<void> => {
    try {
      const responses = await Promise.all(
        moviesLists.map((movieList) =>
          fetch(`${BASE_API_URL}/${movieList}?api_key=${API_KEY}&page=1`)
        )
      );
      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      dispatch({
        type: "MOVIES/SUCCESS",
        payload: data as { results: MovieItemAttr[] }[],
      });
    } catch (error) {
      dispatch({ type: "MOVIES/FAILURE", payload: error as Error });
    }
  })();
};

// Context
type MoviesContextState = {
  state: MoviesState;
  dispatch: (action: MoviesAction | Thunk<MoviesAction>) => void;
  thunks: Record<string, Thunk<MoviesAction>>;
};

export const MoviesContext = createContext({} as MoviesContextState);

type MoviesProviderProps = {
  children: React.ReactNode;
};

export const MoviesProvider = ({
  children,
}: MoviesProviderProps): React.ReactElement => {
  const [state, dispatch] = useThunkReducer(moviesReducer, {
    error: null,
    loading: true,
    movies: null,
  });

  return (
    <MoviesContext.Provider
      value={{ state, dispatch, thunks: { fetchMovies } }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
