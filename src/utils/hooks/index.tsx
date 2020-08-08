import React from "react";

export function useLoadingStatus(
  timeOut: number,
  defaultState: boolean
): boolean {
  const [isLoading, toggle] = React.useState(defaultState);
  React.useEffect(() => {
    const id = window.setTimeout(() => {
      toggle(!defaultState);
    }, timeOut);
    return (): void => {
      clearTimeout(id);
    };
  });
  return isLoading;
}

export function useLocalStorage<T>(
  defaultState: T,
  key: string
): readonly [T, React.Dispatch<React.SetStateAction<T>>] {
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
}
