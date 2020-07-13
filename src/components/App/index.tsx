import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Section } from "../Section";

export const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <div className="pb-4 md:pb-16 md:pt-2">
          <Section />
          <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
          <Section />
          <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
          <Section />
          <hr className="hidden md:block w-2/3 xl:w-1/2 my-2 mx-auto border-gray-900" />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};
