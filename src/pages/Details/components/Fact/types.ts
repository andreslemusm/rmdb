import { MovieDetailsAttr } from "../../types";

export type FactProps = {
  name: string;
  data: unknown;
  formatter?: (data: unknown) => string | number;
};

export type FactConfig = {
  name: string;
  key: keyof MovieDetailsAttr;
  formatter?: (data: unknown) => string | number;
};
