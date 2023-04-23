import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { mockedUsedNavigate } from "../setupTests";
import userEvent from "@testing-library/user-event";
import { server } from "../__mocks__/server";
import { rest } from "msw";

// test("username input should change when type", () => {
//   render(
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );
//   const usernameInputElement = screen.getByRole("usernameInput");
//   fireEvent.change(usernameInputElement, {
//     target: { value: "usernameInput" },
//   });
//   expect(usernameInputElement.value).toBe("usernameInput");
// });

// test("password input should change when type", () => {
//   render(
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );

//   const passwordInputElement = screen.getByRole("passwordInput");
//   fireEvent.change(passwordInputElement, {
//     target: { value: "passwordInput" },
//   });
//   expect(passwordInputElement.value).toBe("passwordInput");
// });

// test("mock http req and navigation login function success", async () => {
//   // mockedUsedNavigate.mockClear();

//   // mockAxios.post.mockImplementationOnce(() =>
//   //   Promise.resolve({
//   //     data: "success",
//   //   })
//   // );

//   render(
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );

//   const usernameInputElement = screen.getByRole("usernameInput");

//   const passwordInputElement = screen.getByRole("passwordInput");

//   fireEvent.change(usernameInputElement, {
//     target: { value: "usernameInput" },
//   });
//   fireEvent.change(passwordInputElement, {
//     target: { value: "passwordInput" },
//   });

//   const loginButton_login = screen.getByRole("loginButton_login");
//   // await userEvent.click(loginButton_login);
//   fireEvent.click(loginButton_login);
//   // waitFor

//   // await waitForElementToBeRemoved(() => screen.getByRole("loginButton_login"));
//   await waitFor(() => expect(mockedUsedNavigate).toBeCalledTimes(1));
//   expect(mockedUsedNavigate).toHaveBeenCalledWith("/List/usernameInput");
// });

test("mock http req and navigation login function fail", async () => {
  mockedUsedNavigate.mockClear();

  server.use(
    rest.post(`${process.env.REACT_APP_BACKEND_URL}/login`, (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ data: "fail" }));
    })
  );

  render(
    <BrowserRouter>
      <Login />
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

  const loginButton_login = screen.getByRole("loginButton_login");
  fireEvent.click(loginButton_login);

  const errorElement = await screen.findByRole("errorSpan_login");

  // await waitFor(() => expect())

  expect(errorElement).toBeInTheDocument();
});

// test("mock navigation to-register on button click", async () => {
//   mockedUsedNavigate.mockClear();

//   render(
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );

//   const loginButton_login = screen.getByRole("toRegisterButton_login");
//   await fireEvent.click(loginButton_login);

//   expect(mockedUsedNavigate).toBeCalledTimes(1);
//   expect(mockedUsedNavigate).toHaveBeenCalledWith("/SignUp");
// });
