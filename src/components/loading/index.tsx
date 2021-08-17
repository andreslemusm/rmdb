type LoadingProps = {
  height?: string;
};

export const Loading = ({
  height = "h-screen",
}: LoadingProps): React.ReactElement => (
  <div className={`${height} flex justify-center items-center`}>
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
