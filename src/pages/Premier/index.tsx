import React from "react";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import {
  dummyMovies,
  dummyTvShows,
  dummyPeople,
} from "../../components/App/dummy";

export const Premier = (): React.ReactElement => (
  <React.Fragment>
    <Hero />
    <div className="pb-4 md:pb-16 md:pt-2">
      <Section title="Films" data={dummyMovies} />
      <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
      <Section title="TV Shows" data={dummyTvShows} />
      <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
      <Section title="People" data={dummyPeople} />
      <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
    </div>
  </React.Fragment>
);
