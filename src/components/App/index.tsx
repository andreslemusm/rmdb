import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Premier } from "../../pages/Premier";
import { Discover } from "../../pages/Discover";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path="/premier">
            <Premier />
          </Route>
          <Route path="/discover/:section">
            <Discover />
          </Route>
          <Redirect from="*" to="/premier" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
