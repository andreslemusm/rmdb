import { Carousel } from "@root/components/carousel";
import { UseMoviesParams, useMovies } from "@services/movie";

type MovieCarouselProps = UseMoviesParams;

export const MovieCarousel = ({
  releaseType,
}: MovieCarouselProps): React.ReactElement => {
  const moviesQuery = useMovies({ releaseType });

  if (moviesQuery.isSuccess) {
    return (
      <Carousel
        title={releaseType.split("_").join(" ")}
        data={moviesQuery.data}
        cardType="movie"
        titleClass="pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 uppercase"
        sliderClass="px-5 sm:px-8 md:p-0"
        wrapperClass="my-8 md:mx-5 md:my-16"
        preRenderedSlides={5}
      />
    );
  }

  if (moviesQuery.isError) {
    return <span>Error while loading</span>;
  }

  return <span>Loading...</span>;
};
