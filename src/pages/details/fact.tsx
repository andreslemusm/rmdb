import { MovieDetailsAttr } from "@services/movie";

type FactProps = {
  name: string;
  data: unknown;
  formatter?: (data: unknown) => string | number;
};

const Fact = ({ name, data, formatter }: FactProps): React.ReactElement => (
  <section className="grid grid-cols-2" style={{ justifyItems: "center" }}>
    <h3 className="text-lg font-light tracking-wider text-gray-800">{name}</h3>
    <p className="text-gray-700">
      {formatter === undefined ? (data as string | number) : formatter(data)}
    </p>
  </section>
);

const dateFormatter: FactProps["formatter"] = (data): string =>
  new Date(data as string).toUTCString().slice(0, 16);

const langFormatter: FactProps["formatter"] = (data): string =>
  (data as MovieDetailsAttr["spoken_languages"])[0]?.name ?? undefined;

const moneyFormatter: FactProps["formatter"] = (data): string =>
  `$ ${(data as number)?.toLocaleString()}` ?? undefined;

export { dateFormatter, langFormatter, moneyFormatter, Fact };
export type { FactProps };
