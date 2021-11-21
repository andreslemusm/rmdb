import { UseQueryOptions } from "react-query";

export type CustomQueryOptions<
  TKeyFactory extends (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any -- any is the appropiate type
    ...args: Array<any>
  ) => ReadonlyArray<
    string | Record<string, unknown> | number | undefined | null
  >,
  TData
> = Omit<
  UseQueryOptions<TData, unknown, TData, ReturnType<TKeyFactory>>,
  "queryFn" | "queryKey"
>;
