import React from "react";

type FactProps = {
  name: string;
  data: unknown;
  formatter?: (data: unknown) => string | number;
};

export const Fact = ({
  name,
  data,
  formatter,
}: FactProps): React.ReactElement => (
  <article className="grid grid-cols-2" style={{ justifyItems: "center" }}>
    <h3 className="text-lg text-gray-800 font-light tracking-wider">{name}</h3>
    <p className="text-gray-700">
      {formatter === undefined ? (data as string | number) : formatter(data)}
    </p>
  </article>
);
