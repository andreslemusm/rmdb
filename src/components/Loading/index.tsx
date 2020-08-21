import React from "react";

export const Loading = (): React.ReactElement => (
  <div className="h-screen flex justify-center items-center">
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
