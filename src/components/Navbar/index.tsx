import React from "react";
import { ReactComponent as MenuAlt1 } from "../../assets/menu-alt1.svg";
import { NavLink, Link } from "react-router-dom";

export const Navbar = (): React.ReactElement => {
  function handleUnavaliable(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    e.preventDefault();
    alert("Ups! Not Avaliable yet");
  }

  return (
    <header className="md:absolute w-full md:z-40">
      <div className="container mx-auto flex px-5 py-5 items-center justify-between tracking-wide md:justify-start lg:px-10">
        <Link
          to="/"
          className="flex font-black tracking-widest text-gray-200 items-center text-xl"
        >
          <span className="text-primary">R</span>MDB
        </Link>
        <nav className="hidden md:w-full md:ml-4 md:pl-4 md:border-l md:border-gray-300 md:flex md:items-center md:text-sm md:justify-between">
          <NavLink
            to="/discover"
            activeClassName="text-primary"
            className="mr-5 transition-colors duration-200 hover:text-primary uppercase"
          >
            Discover
          </NavLink>
          <a
            href="/login"
            onClick={handleUnavaliable}
            className="hidden md:block uppercase transition-colors duration-200 text-gray-400 font-light text-sm hover:text-primary"
          >
            Sign in
          </a>
        </nav>
        <div className="cursor-pointer md:hidden">
          <MenuAlt1 />
        </div>
      </div>
    </header>
  );
};
