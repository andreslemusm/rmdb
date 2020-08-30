import { useState, useEffect } from "react";

export const useLoadingStatus = (
  timeOut: number,
  defaultState: boolean
): boolean => {
  const [isLoading, toggle] = useState(defaultState);

  useEffect(() => {
    const id = window.setTimeout(() => {
      toggle(!defaultState);
    }, timeOut);

    return (): void => {
      window.clearTimeout(id);
    };
  });

  return isLoading;
};
