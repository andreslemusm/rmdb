import React from "react";
import { useLoadingStatus } from "../../hooks";

type LoadingProps = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: LoadingProps): React.ReactElement => {
  const remove = useLoadingStatus(5200);
  return (
    <div
      className={`h-screen w-screen transition-opacity fixed top-0 z-50 ${
        isLoading ? "opacity-100" : "opacity-0"
      } ${remove ? "block" : "hidden"}`}
      style={{
        background: "linear-gradient(to right, #c31432, #240b36)",
        transitionDuration: "5s",
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
