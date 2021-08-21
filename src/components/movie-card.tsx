import { CircularProgress } from "@components/circular-progress";
import { Link } from "react-router-dom";
import { getYear } from "@utils/formats";
import { imageNotFound } from "@assets/images";
import { memo } from "react";
import { BASE_IMAGE_URL, PosterSizes } from "@utils/api-config";

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
  <article className="w-full h-full">
    <Link to={`/movie/${id}`}>
      <img
        className="w-full rounded-md md:rounded-none bg-gray-400"
        src={
          imageUrl
            ? `${BASE_IMAGE_URL}${PosterSizes.sm}${imageUrl}`
            : imageNotFound
        }
        alt={title}
      />
    </Link>
    <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
      <Link className="w-3/4 md:w-full" to={`/movie/${id}`}>
        <h2 className="text-gray-700 md:text-sm whitespace-no-wrap truncate">
          {title}
        </h2>
      </Link>
      <div className="w-1/4 md:hidden">
        {<CircularProgress value={voteAvg === 0 ? 5 : voteAvg} />}
      </div>
      <p className="hidden md:block md:text-xs md:text-gray-900 md:uppercase">
        {`${
          releaseDate ? getYear(releaseDate) : new Date().getFullYear() + 1
        } ${language}`}
      </p>
    </div>
  </article>
);

export const MovieCard = memo(MovieCardView);
