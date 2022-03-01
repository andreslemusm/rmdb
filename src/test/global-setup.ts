/* eslint-disable functional/immutable-data */

export const setup = (): void => {
  // @ts-expect-error -- Mock .env variables in test files
  import.meta.env.VITE_API_BACKEND = "https://mock.api.com";
  // @ts-expect-error -- Mock .env variables in test files
  import.meta.env.VITE_API_KEY = "FAKE_SECRET_KEY";
  // @ts-expect-error -- Mock .env variables in test files
  import.meta.env.VITE_API_IMAGE = "https://mock.api.com/image";
};
