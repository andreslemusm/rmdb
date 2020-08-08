import React from "react";
import {
  BASE_IMAGE_URL,
  backdropSize,
  API_KEY,
  BASE_API_URL,
} from "../../../../apiConfig";
import { ReactComponent as CaretRight } from "../../../../assets/caret-right.svg";
import { ReactComponent as Close } from "../../../../assets/close.svg";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";

type PrimaryCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  score: number;
};

export const PrimaryCard = ({
  id,
  title,
  imageUrl,
  description,
  score,
}: PrimaryCardProps): React.ReactElement => {
  // Trailer modal
  const [showModal, toggleModal] = React.useState(false);
  function handleOpenModal(): void {
    toggleModal(true);
  }
  function handleCloseModal(): void {
    toggleModal(false);
  }

  // Trailer request
  const [video, setVideo] = React.useState<string>();
  const fetchVideos = async (id: number): Promise<void> => {
    try {
      const response = await fetch(
        `${BASE_API_URL}/${id}/videos?api_key=${API_KEY}`
      );
      const videos = (await response.json()) as {
        results: Record<string, string>[];
      };
      const trailer = videos.results.find((video) => video.type === "Trailer");
      if (trailer !== undefined) {
        setVideo(trailer.key);
      }
    } catch (error) {
      console.error("An error ocurred while fetching the videos: ", error);
    }
  };
  React.useEffect(() => {
    void fetchVideos(id);
  }, [id]);

  return (
    <React.Fragment>
      <article className="mx-2 md:mx-0 relative">
        <div className="relative">
          <Link to={`/movie/${id}`}>
            <picture>
              <source
                srcSet={`${BASE_IMAGE_URL}${backdropSize.lg}${imageUrl}`}
                media="(min-width: 1024px)"
              />
              <img
                className="relative w-full object-cover object-top shadow-lg rounded-md md:rounded-none md:shadow-none xl:h-screen"
                src={`${BASE_IMAGE_URL}${backdropSize.md}${imageUrl}`}
                alt={title}
              />
            </picture>
          </Link>
          <section>
            <div className="hidden absolute top-0 w-full h-full bg-black bg-opacity-50 md:block" />
            <div className="hidden container md:mb-16 md:block md:absolute md:bottom-0 md:inset-x-0 md:mx-auto md:px-10 lg:mb-24 lg:max-w-screen-lg">
              <Link to={`/movie/${id}`}>
                <h2 className="w-3/4 pr-32 leading-none overflow-hidden text-gray-200 text-3xl tracking-widest font-black uppercase lg:text-6xl">
                  {title.length < 23
                    ? title
                    : `${(/[\w &]+/.exec(title) as RegExpMatchArray)[0]}`}
                </h2>
              </Link>
              <p className="w-3/4 pr-16 pt-6 tracking-wider text-gray-300 text-sm lg:text-base">
                {description.length < 200
                  ? description
                  : `${description.slice(0, 197)}`}
              </p>
              <div className="flex justify-between items-center font-light">
                <p className="text-gray-300 pt-2 tracking-wider text-sm md:text-base">
                  TMDb{" "}
                  <span className="text-gray-200 text-2xl lg:text-4xl pl-2">
                    {score}
                  </span>
                </p>
                {video !== undefined && (
                  <button
                    onClick={handleOpenModal}
                    className="tracking-widest inline-flex text-gray-200 items-center bg-primary border-0 py-2 pl-6 pr-8 mr-5 focus:outline-none rounded-sm text-sm lg:mr-8"
                  >
                    <CaretRight className="w-5 h-5 fill-current" />
                    PLAY
                  </button>
                )}
              </div>
            </div>
          </section>
          <section>
            <div className="md:hidden container mx-auto pt-3 pb-4 px-4 sm:px-6 flex justify-between items-center">
              <h2 className="text-gray-600 text-xl tracking-wide truncate w-4/6">
                {title}
              </h2>
              <span className="text-gray-700 tracking-wide font-light">
                2019
              </span>
            </div>
          </section>
        </div>
      </article>
      {showModal && (
        <Modal>
          <div className="w-screen h-screen px-20 fixed top-0 flex flex-col items-center justify-center z-40 bg-black bg-opacity-50">
            <button
              className="self-end text-gray-100"
              onClick={handleCloseModal}
            >
              <Close className="w-10 h-10 fill-current" />
            </button>
            <div
              className="relative h-0 w-full"
              style={{
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                title={`${title} Trailer`}
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${video!}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};
