const getYear = (date: string): string => date.slice(0, 4);

const toHourFormat = (min: number): string =>
  `${Math.floor(min / 60)}h ${min % 60}m`;

const classNames = (...args: Array<string | boolean>): string =>
  args.filter(Boolean).join("");

export { getYear, toHourFormat, classNames };
