import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Premier } from "./pages/Premier";
import { Discover } from "./pages/Discover";
import { Details } from "./pages/Details";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/Layout";

export const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </React.Fragment>
  );
};
