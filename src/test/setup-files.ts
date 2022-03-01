/* eslint-disable functional/immutable-data
  --
  Add properties to window not implemented in JSDOM
*/
import { configure } from "@testing-library/react";
// import { removeAuthInCache } from "@utils/auth-provider";
import { server } from "./server/test-server";
import { setLogger } from "react-query";
import { vi } from "vitest";
import "@testing-library/jest-dom";

// JSDOM hasn't implemented matchMedia and scrollTo yet.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
window.scrollTo = vi.fn(() => null);

/*
 * Speeds up *ByRole queries a bit
 * https://github.com/testing-library/dom-testing-library/issues/552
 */
configure({ defaultHidden: true });

/*
 * Make debug output for TestingLibrary Errors larger
 */
// eslint-disable-next-line functional/immutable-data
process.env.DEBUG_PRINT_LIMIT = "15000";

/*
 * Enable API mocking in test runs using the same request handlers
 * as for the client-side mocking.
 */
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// General cleanup
// afterEach(() => {
//   removeAuthInCache();
// });

// Silence React Query errors
setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  // eslint-disable-next-line no-console
  warn: console.warn,
  error: () => null,
});
