type LoadingProps = {
  height?: string;
};

export const Loading = ({
  height = "h-screen",
}: LoadingProps): React.ReactElement => (
  <div className={`${height} flex items-center justify-center`}>
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
