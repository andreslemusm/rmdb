import { Fragment } from "react";
import { Modal } from "@components/lib";
import { useDisclosure } from "@utils/hooks";
import { useMovie } from "@services/movie";
import { HiPlay, HiX } from "react-icons/hi";

type TrailerModalProps = {
  movieID: string;
};

export const TrailerModal = ({
  movieID,
}: TrailerModalProps): React.ReactElement => {
  const { isOpen, open, close } = useDisclosure();

  const movieQuery = useMovie(movieID, { enabled: isOpen });

  return (
    <Fragment>
      <button
        onClick={open}
        className="mr-5 inline-flex items-center rounded-sm border border-primary bg-primary py-2 pl-6 pr-8 text-sm tracking-widest text-gray-200 transition-colors duration-500 ease-in-out hover:border-primary hover:bg-secondary hover:text-primary focus:outline-none lg:mr-8"
      >
        <HiPlay className="h-5 w-5" />
        &nbsp;PLAY
      </button>
      <Modal open={isOpen} onClose={close}>
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md bg-primary bg-opacity-0 text-primary ring-offset-secondary transition hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={close}
          >
            <span className="sr-only">Close</span>
            <HiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {(() => {
          if (movieQuery.isSuccess) {
            const trailer = movieQuery.data.videos.results.find(
              (video) => video.type !== "Trailer"
            );
            if (trailer) {
              return (
                <div className="aspect-w-16 aspect-h-9 mt-5">
                  <iframe
                    title={trailer.name}
                    src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }

            return <p>No trailer found :C</p>;
          }

          if (movieQuery.isError) {
            return <p>An error ocurred while getting the movie trailer! :C</p>;
          }

          return <p>Loading...</p>;
        })()}
      </Modal>
    </Fragment>
  );
};
