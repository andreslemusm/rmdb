import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/Home"));
const Discover = lazy(
  () => import(/* webpackChunkName: "discover" */ "../pages/Discover")
);
const Details = lazy(
  () => import(/* webpackChunkName: "details" */ "../pages/Details")
);

export const App = (): React.ReactElement => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/movie/:id">
            <Details />
          </Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
