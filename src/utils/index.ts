import { CrewPersonAttr } from "../pages/Details/types";

export const formatTitle = (arg: string): string =>
  arg.length > 19 ? arg.slice(0, 16) + "..." : arg;

export const getYear = (date: string): string => date.slice(0, 4);

export const toHourFormat = (min: number): string =>
  `${Math.floor(min / 60)}h ${min % 60}m`;

export const getPrincipalCrew = (
  crewPeople: CrewPersonAttr[]
): {
  directors: string[];
  producers: string[];
  writters: string[];
  characters: string[];
} =>
  crewPeople.reduce(
    (accu, crewPerson) => {
      switch (crewPerson.job) {
        case "Director":
          return { ...accu, directors: [...accu.directors, crewPerson.name] };
        case "Producer":
          return { ...accu, producers: [...accu.producers, crewPerson.name] };
        case "Writer":
          return { ...accu, writters: [...accu.writters, crewPerson.name] };
        case "Characters":
          return { ...accu, characters: [...accu.characters, crewPerson.name] };
        default:
          return accu;
      }
    },
    {
      directors: [] as string[],
      producers: [] as string[],
      writters: [] as string[],
      characters: [] as string[],
    }
  );
