import { FactConfig } from "./types";
import { SpokenLanguage } from "../../types";

type FactFormatter = FactConfig["formatter"];

export const dateFormatter: FactFormatter = (data): string =>
  new Date(data as string).toUTCString().slice(0, 16);

export const langFormatter: FactFormatter = (data): string =>
  (data as SpokenLanguage[])[0].name;

export const moneyFormatter: FactFormatter = (data): string =>
  `$ ${(data as number).toLocaleString()}`;
