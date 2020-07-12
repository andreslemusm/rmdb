import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

const sections = ["Premier", "Movies", "TV Shows", "People"];

export const Navbar = (): React.ReactElement => (
  <header className="md:absolute w-full md:z-40">
    <div className="container mx-auto flex p-5 flex-row items-center justify-between">
      <a
        href="/"
        className="flex font-black tracking-widest text-gray-200 items-center text-xl"
      >
        <span className="text-primary">R</span>MDB
      </a>
      <nav className="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex flex-wrap items-center text-sm justify-center">
        {sections.map(
          (section): React.ReactElement => (
            <a
              href="/"
              className={`mr-5 hover:text-primary uppercase ${
                section === "Premier" ? "text-primary" : ""
              }`}
              key={section}
            >
              {section}
            </a>
          )
        )}
      </nav>
      <MenuIcon className="fill-current text-gray-200 cursor-pointer md:hidden" />
      <button className="hidden md:inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none rounded-sm text-base">
        Sign in
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
);
