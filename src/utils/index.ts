export const formatTitle = (arg: string): string =>
  arg.length > 19 ? arg.slice(0, 16) + "..." : arg;

export const getYear = (date: string): string => date.slice(0, 4);

export const toHourFormat = (min: number): string =>
  `${Math.floor(min / 60)}h ${min % 60}m`;
