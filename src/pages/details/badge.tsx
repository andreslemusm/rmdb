type BadgeProps = {
  children: React.ReactNode;
};

export const Badge = ({ children }: BadgeProps): React.ReactElement => (
  <span className="w-auto rounded-md border px-2 py-1 text-xs">{children}</span>
);
