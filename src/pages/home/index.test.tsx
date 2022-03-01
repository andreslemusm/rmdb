import { App } from "@app/index";
import { SignUpFormFields } from "./sign-up-form/types";
import { build, fake } from "@jackfranklin/test-data-bot";
import {
  render,
  screen,
  userEvent,
  waitForLoadingToFinish,
} from "@test/test-utils";

const renderSignUpView = async (user: ReturnType<typeof userEvent.setup>) => {
  render(<App />);
  await waitForLoadingToFinish();
  await user.click(
    screen.getByRole("link", {
      name: /sign up\./i,
    })
  );
};

const buildSignUpForm = build<
  Omit<SignUpFormFields, "termsAgreement" | "password" | "confirmPassword">
>({
  fields: {
    email: fake((f) => f.internet.email()),
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    businessName: fake((f) => f.company.companyName()),
  },
});

const fillSignUpForm = async (
  user: ReturnType<typeof userEvent.setup>,
  { password, confirmPassword }: { password: string; confirmPassword: string }
) => {
  const { firstName, lastName, businessName, email } = buildSignUpForm();
  await user.type(
    screen.getByRole("textbox", { name: /first name/i }),
    firstName
  );
  await user.type(
    screen.getByRole("textbox", { name: /last name/i }),
    lastName
  );
  await user.type(
    screen.getByRole("textbox", { name: /business name/i }),
    businessName
  );
  await user.type(
    screen.getByRole("textbox", { name: /email address/i }),
    email
  );
  await user.type(screen.getByLabelText("Password"), password);
  await user.type(screen.getByLabelText(/confirm password/i), confirmPassword);
  await user.click(
    screen.getByRole("checkbox", {
      name: /i agree to the terms of service and privacy policy/i,
    })
  );
};

describe("home", () => {
  test("mock test", async () => {
    const user = userEvent.setup();
    await renderSignUpView(user);
  });
});
