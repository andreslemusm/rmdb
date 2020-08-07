import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useLoadingStatus } from "../../hooks";

type CircularProgressProps = {
  value: number;
};

export const CircularProgress = ({
  value,
}: CircularProgressProps): React.ReactElement => {
  const isLoading = useLoadingStatus(400, true);
  return (
    <CircularProgressbar
      className="shadow-2xl"
      value={isLoading ? 0 : value}
      maxValue={10}
      text={`${value}`}
      background={true}
      backgroundPadding={8}
      styles={{
        path: {
          stroke: "#cc073c",
          transition: "stroke-dashoffset 0.7s ease 500ms",
        },
        text: {
          fill: "#F3F3F4",
          fontSize: "1.7rem",
          dominantBaseline: "middle",
          textAnchor: "middle",
        },
        trail: {
          stroke: "#00000000",
        },
        background: {
          fill: "#111822",
        },
      }}
    />
  );
};
