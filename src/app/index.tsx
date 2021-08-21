import { Layout } from "@components/layout";
import { Loading } from "@components/loading";
import { ReactQueryDevtools } from "react-query/devtools";
import { ScrollToTop } from "@components/scroll-to-top";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
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
  <BrowserRouter>
    <ScrollToTop />
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/movie/:id" element={<Details />} />
          </Routes>
        </Suspense>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>
);
