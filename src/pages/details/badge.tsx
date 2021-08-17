type BadgeProps = {
  children: React.ReactNode;
};

export const Badge = ({ children }: BadgeProps): React.ReactElement => (
  <span className="text-xs border px-2 py-1 rounded-md w-auto">{children}</span>
);
