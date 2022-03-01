/* eslint-disable import/export
  --
  We override React Testing Library's render with our own.
*/
// import { AppProviders } from "@context/index";
import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => {
  window.history.pushState({}, "Test page", "/");

  return rtlRender(ui, { ...options });
};

const waitForLoadingToFinish = (): Promise<void> =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 }
  );

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { render, waitForLoadingToFinish };
