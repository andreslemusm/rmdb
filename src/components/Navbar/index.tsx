import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { NavLink, Link } from "react-router-dom";

export const Navbar = (): React.ReactElement => {
  const sections = [
    { name: "Premier", path: "/premier" },
    { name: "Movies", path: "/discover/movies" },
    { name: "TV Shows", path: "/discover/tv" },
    { name: "People", path: "/people" },
  ];

  return (
    <header className="md:absolute w-full md:z-40">
      <div className="container mx-auto flex p-5 flex-row items-center justify-between tracking-wide lg:px-8">
        <Link
          to="/"
          className="flex font-black tracking-widest text-gray-200 items-center text-xl"
        >
          <span className="text-primary">R</span>MDB
        </Link>
        <nav className="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300 md:flex flex-wrap items-center text-sm justify-center">
          {sections.map(
            (section): React.ReactElement => (
              <NavLink
                to={section.path}
                activeClassName="text-primary"
                className={`mr-5 hover:text-primary uppercase`}
                key={section.name}
              >
                {section.name}
              </NavLink>
            )
          )}
        </nav>
        <Link
          to="/login"
          className="hidden md:block uppercase text-gray-400 font-light text-sm hover:text-primary"
        >
          Sign in
        </Link>
        <MenuIcon className="fill-current text-gray-200 cursor-pointer md:hidden" />
      </div>
    </header>
  );
};
