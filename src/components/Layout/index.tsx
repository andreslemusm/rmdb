import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <div className="relative">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
