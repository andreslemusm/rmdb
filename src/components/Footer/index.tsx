import React from "react";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { Link } from "react-router-dom";

export const Footer = (): React.ReactElement => (
  <footer className="bg-primary">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link
        to="/premier"
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
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/themoviedb/"
        >
          <FacebookIcon className="w-5 h-5 hover:text-gray-200" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/themoviedb/"
          className="ml-3"
        >
          <TwitterIcon className="w-5 h-5 hover:text-gray-200" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/imdb/"
          className="ml-3"
        >
          <InstagramIcon className="w-5 h-5 hover:text-gray-200" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/andresclm/"
          className="ml-3"
        >
          <LinkedinIcon className="w-5 h-5 hover:text-gray-200" />
        </a>
      </span>
    </div>
  </footer>
);
