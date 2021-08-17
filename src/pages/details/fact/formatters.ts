import { FactConfig } from "./types";
import { SpokenLanguage } from "../types";

type FactFormatter = FactConfig["formatter"];

const dateFormatter: FactFormatter = (data): string =>
  new Date(data as string).toUTCString().slice(0, 16);

const langFormatter: FactFormatter = (data): string =>
  (data as Array<SpokenLanguage>)[0]?.name ?? undefined;

const moneyFormatter: FactFormatter = (data): string =>
  `$ ${(data as number)?.toLocaleString()}` ?? undefined;

export { dateFormatter, langFormatter, moneyFormatter };
