import React from "react";
import { Hero } from "./components/Hero";
import { Carousel } from "../../components/Carousel";
import { dummyMovies, dummyTvShows, dummyPeople } from "./dummy";

export const Premier = (): React.ReactElement => (
  <React.Fragment>
    <Hero />
    <div className="pb-8 md:pb-16 md:pt-2">
      <Carousel
        title="FILMS"
        data={dummyMovies}
        cardType="movie"
        titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 md:font-normal"
        sliderClass="px-5 sm:px-8 md:p-0"
        wrapperClass="my-8 md:mx-5"
      />
      <hr className="my-2 mx-auto border-gray-900 hidden md:block w-2/3 xl:w-1/2 " />
      <Carousel
        title="TV SHOWS"
        data={dummyTvShows}
        cardType="tv"
        titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 md:font-normal"
        sliderClass="px-5 sm:px-8 md:p-0"
        wrapperClass="my-8 md:mx-5"
      />
      <hr className="my-2 mx-auto border-gray-900 hidden md:block w-2/3 xl:w-1/2" />
      <Carousel
        title="PEOPLE"
        data={dummyPeople}
        cardType="popularPerson"
        titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 md:font-normal"
        sliderClass="px-5 sm:px-8 md:p-0"
        wrapperClass="my-8 md:mx-5"
      />
      <hr className="my-2 mx-auto border-gray-900 hidden md:block w-2/3 xl:w-1/2" />
    </div>
  </React.Fragment>
);
