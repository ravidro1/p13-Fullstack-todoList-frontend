import { render, screen } from "@testing-library/react";
import Login from "../Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("username input should be render", () => {
  render(<Login />);
  const usernameInputElement = screen.getByPlaceholderText(/username/i);
  expect(usernameInputElement).toBeInTheDocument();
});
