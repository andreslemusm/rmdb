import React from "react";

type SecondaryCardProps = {
  deparment?: string;
  imageUrl: string;
  language?: string;
  title: string;
  releaseDate?: string;
  voteAvg?: number;
};

const formatTitle = (arg: string): string =>
  arg.length > 19 ? arg.slice(0, 16) + "..." : arg;

const getYear = (date: string): string => date.slice(0, 4);

export const SecondaryCard = ({
  deparment,
  imageUrl,
  language,
  releaseDate,
  title,
  voteAvg,
}: SecondaryCardProps): React.ReactElement => {
  const radius = 16;
  const strokeWidth = 2;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <article className="w-full h-full">
      <img
        className="w-full rounded-md md:rounded-none"
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        alt={title}
      />
      <div className="mt-3 px-2 flex items-center justify-between md:flex-col md:items-start">
        <h2 className="text-gray-700 md:text-sm">{formatTitle(title)}</h2>
        <div className="relative flex justify-center md:hidden">
          {voteAvg !== undefined && (
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="#cc073c"
                fill="#111822"
                strokeDasharray={`${circumference} ${circumference}`}
                style={{
                  strokeDashoffset:
                    circumference - (voteAvg / 10) * circumference,
                }}
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
          )}
          <div className="absolute top-0 text-xs pt-2">{voteAvg}</div>
        </div>
        <div className="hidden md:block">
          <span className="text-xs text-gray-900 uppercase">
            {releaseDate !== undefined &&
              language !== undefined &&
              `${getYear(releaseDate)} ${language}`}
            {deparment !== undefined && `${deparment}`}
          </span>
        </div>
      </div>
    </article>
  );
};
