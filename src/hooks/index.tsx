import React from "react";

export const useLoadingStatus = (timeOut: number): boolean => {
  const [isLoading, toggle] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      toggle(false);
    }, timeOut);
  });
  return isLoading;
};
