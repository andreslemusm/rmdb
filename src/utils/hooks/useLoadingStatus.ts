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
