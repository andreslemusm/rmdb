import React from "react";

export const useLoadingStatus = (
  timeOut: number,
  defaultStatus: boolean
): boolean => {
  const [isLoading, toggle] = React.useState(defaultStatus);
  React.useEffect(() => {
    setTimeout(() => {
      toggle(!defaultStatus);
    }, timeOut);
  });
  return isLoading;
};
