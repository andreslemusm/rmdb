import { CrewPersonAttr } from "./types";

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
