import React from "react";

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export const Badge = ({
  className = "",
  children,
}: BadgeProps): React.ReactElement => (
  <span className={`text-sm border px-2 py-1 rounded-md ${className}`}>
    {children}
  </span>
);
