export const formatTitle = (arg: string): string =>
  arg.length > 19 ? arg.slice(0, 16) + "..." : arg;

export const getYear = (date: string): string => date.slice(0, 4);
