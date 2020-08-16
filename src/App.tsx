import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Premier } from "./pages/Premier";
import { Discover } from "./pages/Discover";
import { Details } from "./pages/Details";
import { ScrollToTop } from "./components/ScrollToTop";
import { MoviesProvider } from "./pages/Premier/context/movies";

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MoviesProvider>
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
      </MoviesProvider>
    </BrowserRouter>
  );
};
