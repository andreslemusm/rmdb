import { Fragment } from "react";
import { Hero } from "./hero";
import { MovieCarousel } from "./movie-carousel";

const Home = (): React.ReactElement => (
  <Fragment>
    <Hero />
    <div className="pb-8 md:pb-16 md:pt-2">
      <MovieCarousel releaseType="now_playing" />
      <MovieCarousel releaseType="popular" />
      <MovieCarousel releaseType="top_rated" />
      <MovieCarousel releaseType="upcoming" />
    </div>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default Home;
