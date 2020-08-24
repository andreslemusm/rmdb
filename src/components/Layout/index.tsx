import React, { Fragment } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Fragment>
);
