import { CrewPersonAttr } from "../pages/Details/types";

export const getYear = (date: string): string => date.slice(0, 4);

export const toHourFormat = (min: number): string =>
  `${Math.floor(min / 60)}h ${min % 60}m`;

export const getPrincipalCrew = (
  crewPeople: CrewPersonAttr[]
): {
  directors: string[];
  writters: string[];
} =>
  crewPeople.reduce(
    (accu, crewPerson) => {
      switch (crewPerson.job) {
        case "Director":
          return { ...accu, directors: [...accu.directors, crewPerson.name] };
        case "Writer":
          return { ...accu, writters: [...accu.writters, crewPerson.name] };
        default:
          return accu;
      }
    },
    {
      directors: [] as string[],
      writters: [] as string[],
    }
  );
