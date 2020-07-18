import React from "react";

export const DropdownButton = (): React.ReactElement => (
  <div className="relative mr-1">
    <select
      className="appearance-none w-full bg-transparent border border-gray-800 text-gray-800 py-1 px-4 pr-8 focus:outline-none"
      id="grid-state"
    >
      <option>language</option>
      <option>Missouri</option>
      <option>Texas</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);
