export const getYear = (date: string): string => date.slice(0, 4);

export const toHourFormat = (min: number): string =>
  `${Math.floor(min / 60)}h ${min % 60}m`;
