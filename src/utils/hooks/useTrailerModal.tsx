import React, { useState, useEffect } from "react";
import { Modal } from "../../components/Modal";
import { ReactComponent as CaretRight } from "../../assets/caret-right.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { BASE_MOVIE_URL, API_KEY } from "../../apiConfig";

type TrailerModalProps = {
  title: string;
};

export const useTrailerModal = (
  id: number
): readonly [boolean, boolean, React.FC, React.FC<TrailerModalProps>] => {
  // Handle Modal
  const [showModal, toggleModal] = useState(false);
  function handleOpenModal(): void {
    toggleModal(true);
  }
  function handleCloseModal(): void {
    toggleModal(false);
  }

  // Trailer request
  const [video, setVideo] = useState<string>();
  const fetchVideos = async (id: number): Promise<void> => {
    try {
      const response = await fetch(
        `${BASE_MOVIE_URL}/${id}/videos?api_key=${API_KEY}`
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
  useEffect(() => {
    void fetchVideos(id);
  }, [id]);

  const TrailerModal = ({ title }: TrailerModalProps): React.ReactElement => (
    <Modal>
      <div className="w-screen h-screen px-20 fixed top-0 flex flex-col items-center justify-center z-40 bg-black bg-opacity-50">
        <button className="self-end text-gray-100" onClick={handleCloseModal}>
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
  );

  const PlayButton = (): React.ReactElement => (
    <button
      onClick={handleOpenModal}
      className="tracking-widest inline-flex text-gray-200 items-center bg-primary border-0 py-2 pl-6 pr-8 mr-5 focus:outline-none rounded-sm text-sm lg:mr-8"
    >
      <CaretRight className="w-5 h-5 fill-current" />
      PLAY
    </button>
  );

  const showButton = video !== undefined;

  return [showModal, showButton, PlayButton, TrailerModal] as const;
};
