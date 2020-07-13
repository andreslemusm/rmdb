import React from "react";

export const SecondaryCard = (): React.ReactElement => (
  <article>
    <img
      className="w-48 msx- rounded-md md:rounded-none"
      src="https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
      alt="avengers"
    />
    <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
      <h2 className="text-gray-700 md:text-sm">Once Upon a Time...</h2>
      <div className="relative flex justify-center md:hidden">
        <svg height="32" width="32">
          <circle
            stroke="#cc073c"
            fill="#111822"
            strokeDasharray="75"
            style={{ strokeDashoffset: 22.6195 }}
            strokeWidth="2"
            r="12"
            cx="16"
            cy="16"
          />
        </svg>
        <div className="absolute top-0 text-xs pt-2">7.5</div>
      </div>
      <div className="hidden md:block">
        <span className="text-xs text-gray-900 uppercase">2019 USA</span>
      </div>
    </div>
  </article>
);
