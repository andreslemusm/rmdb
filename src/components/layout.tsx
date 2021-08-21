import { Fragment } from "react";
import { Outlet } from "react-router";
import { Facebook, Instagram, LinkedIn, Menu, Twitter } from "@assets/icons";
import { Link, NavLink } from "react-router-dom";

export const Layout = (): React.ReactElement => (
  <Fragment>
    <header className="md:absolute w-full md:z-40">
      <div className="container mx-auto flex px-5 py-5 items-center justify-between tracking-wide md:justify-start lg:px-10">
        <Link
          to="/"
          className="flex font-black tracking-widest text-gray-200 items-center text-xl"
        >
          <span className="text-primary">R</span>MDB
        </Link>
        <nav className="hidden md:flex md:items-center md:w-full md:ml-4 md:pl-4 md:border-l md:border-gray-300 md:text-sm md:justify-between">
          <NavLink
            to="/discover"
            activeClassName="text-primary"
            className="mr-5 transition-colors duration-200 hover:text-primary uppercase"
          >
            Discover
          </NavLink>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              window.alert("Ups! Not Avaliable yet");
            }}
            className="uppercase transition-colors duration-200 text-gray-400 font-light text-sm hover:text-primary"
          >
            Sign in
          </a>
        </nav>
        <Menu className="menu-alt2 w-8 h-8 cursor-pointer md:hidden" />
      </div>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="bg-primary">
      <div className="container px-5 py-8 mx-auto flex items-center flex-col sm:flex-row lg:px-10">
        <Link
          to="/"
          className="flex ml-3 text-xl text-gray-200 font-black tracking-widest items-center md:justify-start justify-center"
        >
          RMDB
        </Link>
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; 2020 Andres Lemus —
          <a
            href="https://github.com/andresclm/"
            className="text-gray-300 hover:text-gray-100 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            &#64;andresclm
          </a>
        </p>
        <span className="inline-flex mt-4 justify-center sm:ml-auto sm:mt-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/themoviedb/"
          >
            <Facebook className="w-5 h-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/themoviedb/"
            className="ml-3"
          >
            <Twitter className="w-5 h-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/imdb/"
            className="ml-3"
          >
            <Instagram className="w-5 h-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/andresclm/"
            className="ml-3"
          >
            <LinkedIn className="w-5 h-5 hover:text-gray-200" />
          </a>
        </span>
      </div>
    </footer>
  </Fragment>
);
