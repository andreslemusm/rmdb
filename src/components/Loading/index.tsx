import React from "react";
import { useLoadingStatus } from "../../hooks";

export const Loading = (): React.ReactElement => {
  const isLoading = useLoadingStatus(100, true);
  const remove = useLoadingStatus(4600, false);
  return (
    <div
      className={`h-screen w-screen transition-opacity fixed top-0 z-50 ${
        isLoading ? "opacity-100" : "opacity-0"
      } ${remove ? "hidden" : "block"}`}
      style={{
        background: "linear-gradient(to right, #c31432, #240b36)",
        transitionDuration: "4.5s",
      }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
