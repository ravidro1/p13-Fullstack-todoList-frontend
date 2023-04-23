import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";
import mockAxios from "axios";



test("username input should change when type", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
  const usernameInputElement = screen.getByRole("usernameInput");
  fireEvent.change(usernameInputElement, {
    target: { value: "usernameInput" },
  });
  expect(usernameInputElement.value).toBe("usernameInput");
});

test("password input should change when type", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const passwordInputElement = screen.getByRole("passwordInput");
  fireEvent.change(passwordInputElement, {
    target: { value: "passwordInput" },
  });
  expect(passwordInputElement.value).toBe("passwordInput");
});

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("mock http req and navigation signUp function success", async () => {
  mockedUsedNavigate.mockClear();

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: "success",
    })
  );

  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const usernameInputElement = screen.getByRole("usernameInput");

  const passwordInputElement = screen.getByRole("passwordInput");

  fireEvent.change(usernameInputElement, {
    target: { value: "usernameInput" },
  });
  fireEvent.change(passwordInputElement, {
    target: { value: "passwordInput" },
  });

  const loginButton_login = screen.getByRole("signUpButton_signUp");
  // await fireEvent.click(loginButton_login);
  await fireEvent.click(loginButton_login);

  expect(mockedUsedNavigate).toBeCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});

test("mock http req and navigation signUp function fail", async () => {
  mockedUsedNavigate.mockClear();

  mockAxios.post.mockImplementationOnce(() =>
    Promise.reject({
      data: "fail",
    })
  );

  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const usernameInputElement = screen.getByRole("usernameInput");

  const passwordInputElement = screen.getByRole("passwordInput");

  fireEvent.change(usernameInputElement, {
    target: { value: "usernameInput" },
  });
  fireEvent.change(passwordInputElement, {
    target: { value: "passwordInput" },
  });

  const loginButton_login = screen.getByRole("signUpButton_signUp");
  await fireEvent.click(loginButton_login);

  expect(mockedUsedNavigate).toBeCalledTimes(0);
});

test("mock navigation to-login on button click", async () => {
  mockedUsedNavigate.mockClear();

  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const loginButton_login = screen.getByRole("toLoginButton_SignUp");
  await fireEvent.click(loginButton_login);

  expect(mockedUsedNavigate).toBeCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
