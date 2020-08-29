import React, { memo } from "react";
import { ReactComponent as ArrowRight } from "../../../../assets/arrow-right.svg";

type ReviewProps = {
  author: string;
  content: string;
  url: string;
};

const ReviewView = ({
  author,
  content,
  url,
}: ReviewProps): React.ReactElement => (
  <article className="w-full shadow-2xl p-8">
    <h3 className="text-gray-100 mb-4">{author}</h3>
    <p className="leading-relaxed mb-6">{`${content.slice(0, 195)}...`}</p>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      className="text-primary inline-flex items-center"
    >
      Read More
      <ArrowRight className="h-4 w-4 ml-1" />
    </a>
  </article>
);

export const Review = memo(ReviewView);
