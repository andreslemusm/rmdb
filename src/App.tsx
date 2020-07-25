import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Premier } from "./pages/Premier";
import { Discover } from "./pages/Discover";
import { Details } from "./pages/Details";

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
          <Route path="/movie/:id">
            <Details />
          </Route>
          <Redirect from="*" to="/premier" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
