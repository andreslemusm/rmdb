import { handlers } from "./server-handlers";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);
