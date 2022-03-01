import { ArrowRight } from "@assets/icons";

type ReviewProps = {
  author: string;
  content: string;
  url: string;
};

export const Review = ({
  author,
  content,
  url,
}: ReviewProps): React.ReactElement => (
  <article className="w-full p-8 shadow-2xl">
    <h3 className="mb-4 text-gray-300">{author}</h3>
    <p className="mb-6 leading-relaxed text-gray-600">{`${content.slice(
      0,
      195
    )}...`}</p>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      className="inline-flex items-center text-primary"
    >
      Read More
      <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </article>
);
