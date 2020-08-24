import React, { Suspense, lazy } from "react";
import { Premier } from "./pages/Premier";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/Layout";
import { Loading } from "./components/Loading";

const Discover = lazy(() => import("./pages/Discover"));
const Details = lazy(() => import("./pages/Details"));

export const App = (): React.ReactElement => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Premier />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/movie/:id">
            <Details />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
