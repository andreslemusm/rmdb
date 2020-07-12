import React from "react";

export const PrimaryCard = (): React.ReactElement => (
  <article className="mx-2 md:mx-0 relative">
    <img
      className="w-full shadow-lg rounded-md md:relative md:top-0 md:rounded-none md:shadow-none xl:h-screen"
      src="https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
      alt="avengers"
    />
    <div className="md:hidden container mx-auto pt-3 pb-4 px-4 sm:px-6 flex justify-between items-center">
      <h2 className="text-gray-600 text-xl tracking-wide">Avengers: Endgame</h2>
      <span className="text-gray-700 tracking-wide font-light">2019</span>
    </div>
  </article>
);
