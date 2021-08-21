import { useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";

export const ScrollToTop = (): React.ReactElement => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment />;
};
