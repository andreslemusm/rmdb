import { Fragment } from "react";
import { classNames } from "@utils/formats";
import { Facebook, Instagram, LinkedIn, Menu, Twitter } from "@assets/icons";
import { Link, NavLink } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <header className="w-full md:absolute md:z-40">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 tracking-wide md:justify-start lg:px-10">
        <Link
          to="/"
          className="flex items-center text-xl font-black tracking-widest text-gray-200"
        >
          <span className="text-primary">R</span>MDB
        </Link>
        <nav className="hidden md:ml-4 md:flex md:w-full md:items-center md:justify-between md:border-l md:border-gray-300 md:pl-4 md:text-sm">
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              classNames(
                isActive && "text-primary",
                "mr-5 uppercase transition-colors duration-200 hover:text-primary"
              )
            }
          >
            Discover
          </NavLink>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              window.alert("Ups! Not Avaliable yet");
            }}
            className="text-sm font-light uppercase text-gray-400 transition-colors duration-200 hover:text-primary"
          >
            Sign in
          </a>
        </nav>
        <Menu className="menu-alt2 h-8 w-8 cursor-pointer md:hidden" />
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-primary">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row lg:px-10">
        <Link
          to="/"
          className="ml-3 flex items-center justify-center text-xl font-black tracking-widest text-gray-200 md:justify-start"
        >
          RMDB
        </Link>
        <p className="mt-4 text-sm text-gray-300 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          &copy; 2020 Andres Lemus —
          <a
            href="https://github.com/andresclm/"
            className="ml-1 text-gray-300 hover:text-gray-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            &#64;andresclm
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/themoviedb/"
          >
            <Facebook className="h-5 w-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/themoviedb/"
            className="ml-3"
          >
            <Twitter className="h-5 w-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/imdb/"
            className="ml-3"
          >
            <Instagram className="h-5 w-5 hover:text-gray-200" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/andresclm/"
            className="ml-3"
          >
            <LinkedIn className="h-5 w-5 hover:text-gray-200" />
          </a>
        </span>
      </div>
    </footer>
  </Fragment>
);
