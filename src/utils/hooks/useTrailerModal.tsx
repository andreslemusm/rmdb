import React, { useState } from "react";
import { useQuery } from "react-query";
import { Modal } from "../../components/Modal";
import { BASE_URL, API_KEY } from "../../apiConfig";
import { VideoAttr } from "../../pages/Details/types";
import { TrailerCard } from "../../components/TrailerCard";
import { Play, X } from "../../components/Icons";

const fetchTrailer = async (
  _key: string,
  id: string
): Promise<VideoAttr | undefined> => {
  // Query
  const videosQuery = fetch(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`);

  // Request
  const response = await videosQuery;
  const videos = (await response.json()) as {
    results: VideoAttr[];
  };

  // Formatter
  const trailer = videos.results.find((video) => video.type === "Trailer");

  return trailer;
};

export const useTrailerModal = (
  movieId: string
): {
  showModal: boolean;
  showButton: boolean;
  PlayButton: () => React.ReactElement;
  TrailerModal: () => React.ReactElement;
} => {
  const { data } = useQuery(["trailer", movieId], fetchTrailer, {
    staleTime: Infinity,
  });

  // Handle Modal
  const [showModal, toggleModal] = useState(false);
  function handleOpenModal(): void {
    toggleModal(true);
  }
  function handleCloseModal(): void {
    toggleModal(false);
  }

  const TrailerModal = (): React.ReactElement => (
    <Modal>
      <div className="w-screen h-screen px-5 fixed top-0 flex flex-col items-center justify-center z-40 bg-black bg-opacity-50 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <button
          className="self-end text-gray-500 transition-colors duration-200 hover:text-gray-100"
          onClick={handleCloseModal}
        >
          <X className="w-10 h-10" />
        </button>
        {data !== undefined && (
          <TrailerCard videoKey={data.key} title={data.name} />
        )}
      </div>
    </Modal>
  );

  const PlayButton = (): React.ReactElement => (
    <button
      onClick={handleOpenModal}
      className="tracking-widest inline-flex items-center transition-colors duration-500 ease-in-out text-gray-200 hover:text-primary bg-primary hover:bg-secondary border-primary hover:border-primary border py-2 pl-6 pr-8 mr-5 focus:outline-none rounded-sm text-sm lg:mr-8"
    >
      <Play className="w-5 h-5" />
      &nbsp;PLAY
    </button>
  );

  const showButton = data !== undefined;

  return { showModal, showButton, PlayButton, TrailerModal };
};
