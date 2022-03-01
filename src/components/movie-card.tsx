import { CircularProgress } from "@components/circular-progress";
import { Link } from "react-router-dom";
import { getYear } from "@utils/formats";
import { imageNotFound } from "@assets/images";
import { memo } from "react";
import { BASE_IMAGE_URL, PosterSizes } from "@utils/remote-images";

type ItemCardProps = {
  id: number;
  imageUrl: string | null;
  language: string;
  title: string;
  releaseDate: string;
  voteAvg: number;
};

const MovieCardView = ({
  id,
  imageUrl,
  language,
  releaseDate,
  title,
  voteAvg,
}: ItemCardProps): React.ReactElement => (
  <article className="h-full w-full">
    <Link to={`/movie/${id}`}>
      <img
        className="w-full rounded-md bg-gray-400 md:rounded-none"
        src={
          imageUrl
            ? `${BASE_IMAGE_URL}${PosterSizes.sm}${imageUrl}`
            : imageNotFound
        }
        alt={title}
      />
    </Link>
    <div className="mt-3 flex items-center justify-between px-2 md:flex-col md:items-start">
      <Link className="w-3/4 md:w-full" to={`/movie/${id}`}>
        <h2 className="whitespace-no-wrap truncate text-gray-700 md:text-sm">
          {title}
        </h2>
      </Link>
      <div className="w-1/4 md:hidden">
        {<CircularProgress value={voteAvg === 0 ? 5 : voteAvg} />}
      </div>
      <p className="hidden md:block md:text-xs md:uppercase md:text-gray-900">
        {`${
          releaseDate ? getYear(releaseDate) : new Date().getFullYear() + 1
        } ${language}`}
      </p>
    </div>
  </article>
);

export const MovieCard = memo(MovieCardView);
