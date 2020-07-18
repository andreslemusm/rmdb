import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Premier } from "../../pages/Premier";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Search } from "../../pages/Search";

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path="/movies">
            <Search />
          </Route>
          <Route path="/premier">
            <Premier />
          </Route>
          <Redirect from="*" to="/premier" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
