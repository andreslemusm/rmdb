import React from "react";

export type Thunk<T> = (dispatch: React.Dispatch<T>) => void;

export function useThunkReducer<S, A>(
  reducer: React.Reducer<S, A>,
  initialState: S
): readonly [S, (action: A | Thunk<A>) => void] {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const enhancedDispatch = React.useCallback((action: A | Thunk<A>): void => {
    if (typeof action === "function") {
      return (action as Thunk<A>)(dispatch);
    }
    return dispatch(action);
  }, []);

  return [state, enhancedDispatch] as const;
}
