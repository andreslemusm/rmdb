import { Footer } from "./footer";
import { Fragment } from "react";
import { Navbar } from "./nav-bar";

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
