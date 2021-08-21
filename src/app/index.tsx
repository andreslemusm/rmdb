import { Layout } from "@components/layout";
import { Loading } from "@components/loading";
import { ReactQueryDevtools } from "react-query/devtools";
import { ScrollToTop } from "@components/scroll-to-top";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/home"));
const Discover = lazy(
  () => import(/* webpackChunkName: "discover" */ "../pages/discover")
);
const Details = lazy(
  () => import(/* webpackChunkName: "details" */ "../pages/details")
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const App = (): React.ReactElement => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Suspense fallback={<Loading />}>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/movie/:id" element={<Details />} />
          </Suspense>
        </Route>
      </Routes>
    </Router>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
