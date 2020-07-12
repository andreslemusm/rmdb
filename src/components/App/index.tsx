import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Hero } from "../Hero";

export const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Footer />
    </React.Fragment>
  );
};
