import React from "react";

export const useLocalStorage = <T>(
  defaultState: T,
  key: string
): readonly [T, React.Dispatch<React.SetStateAction<T>>] => {
  const getInitialState = (): T => {
    const storedState = localStorage.getItem(key);

    if (storedState !== null) {
      return JSON.parse(storedState) as T;
    }

    return defaultState;
  };

  const [state, setState] = React.useState(getInitialState());

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
};
