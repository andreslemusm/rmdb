type MenuProps = {
  className?: string;
};

export const Menu = ({ className }: MenuProps): React.ReactElement => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" />
  </svg>
);
