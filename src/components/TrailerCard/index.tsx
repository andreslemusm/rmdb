import React from "react";

type TrailerCard = {
  title: string;
  videoKey: string;
};

export const TrailerCard = ({
  title,
  videoKey,
}: TrailerCard): React.ReactElement => (
  <div
    className="relative h-0 w-full"
    style={{
      paddingBottom: "56.25%",
    }}
  >
    <iframe
      title={title}
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
