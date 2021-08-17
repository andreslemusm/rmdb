type FacebookProps = {
  className?: string;
};

export const Facebook = ({ className }: FacebookProps): React.ReactElement => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
