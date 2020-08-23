import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Premier } from "./pages/Premier";
import { Discover } from "./pages/Discover";
import { Details } from "./pages/Details";
import { ScrollToTop } from "./components/ScrollToTop";
import { ReactQueryDevtools } from "react-query-devtools";
import { Layout } from "./components/Layout";

export const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route exact path="/premier">
              <Premier />
            </Route>
            <Route exact path="/discover">
              <Discover />
            </Route>
            <Route exact path="/movie/:id">
              <Details />
            </Route>
            <Redirect from="*" to="/premier" />
          </Switch>
        </Layout>
      </BrowserRouter>
      {/* Only in development mode */}
      <ReactQueryDevtools initialIsOpen />
    </React.Fragment>
  );
};
