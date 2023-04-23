import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ToDoList from "./ToDoList";
import React from "react";
import axiosMock from "axios";

// test("title input should change when type", () => {
//   render(
//     <BrowserRouter>
//       <ToDoList />
//     </BrowserRouter>
//   );
//   const titleInputElement = screen.getByRole("titleInput");
//   fireEvent.change(titleInputElement, {
//     target: { value: "titleInput" },
//   });
//   expect(titleInputElement.value).toBe("titleInput");
// });

// test("content input should change when type", () => {
//   render(
//     <BrowserRouter>
//       <ToDoList />
//     </BrowserRouter>
//   );
//   const contentInputElement = screen.getByRole("contentInput");
//   fireEvent.change(contentInputElement, {
//     target: { value: "contentInput" },
//   });
//   expect(contentInputElement.value).toBe("contentInput");
// });

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// const server = setupServer(
//   rest.post(
//     `${process.env.REACT_APP_BACKEND_URL}/getUserByUsername`,
//     (req, res, ctx) => {
//       return res(
//         ctx.delay(100),
//         ctx.status(200),
//         ctx.json({
//           username: "1",
//           password: "1",
//           _id: "111111111111111111111111",
//         })
//       );
//     }
//   )
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// test("server", () => {
//   render(
//     <BrowserRouter>
//       <ToDoList />
//     </BrowserRouter>
//   );
// });

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => {
    return { username: "1" };
  },
}));

test("mock http req addItem-function success", async () => {
  mockedUsedNavigate.mockClear();

  // jest.mock("axios", () => ({
  //   post: jest.fn().mockImplementation((url) => {
  //     console.warn(process.env.REACT_APP_BACKEND_URL, url);
  //     if (url === `${process.env.REACT_APP_BACKEND_URL}/getUserByUsername`) {
  //       return Promise.resolve({
  //         data: {
  //           username: "1",
  //           password: "1",
  //           _id: "111111111111111111111111",
  //         },
  //       });
  //     } else if (url === `${process.env.REACT_APP_BACKEND_URL}/getAllForUser`) {
  //       return Promise.resolve({
  //         data: {
  //           data: [
  //             {
  //               title: "t1",
  //               content: "c1",
  //               creatorRef: "111111111111111111111111",
  //             },
  //             {
  //               title: "t2",
  //               content: "c2",
  //               creatorRef: "111111111111111111111111",
  //             },
  //           ],
  //         },
  //       });
  //     }
  //   }),
  // }));

  render(
    <BrowserRouter>
      <ToDoList />
    </BrowserRouter>
  );

  const titleInputElement = screen.getByRole("titleInput");
  fireEvent.change(titleInputElement, {
    target: { value: "titleInput" },
  });
  const contentInputElement = screen.getByRole("contentInput");
  fireEvent.change(contentInputElement, {
    target: { value: "contentInput" },
  });

  const addItemButton_toDoList = screen.getByRole("addItemButton_toDoList");
  // await fireEvent.click(loginButton_login);
  await fireEvent.click(addItemButton_toDoList);

  expect(mockedUsedNavigate).toBeCalledTimes(1);
});
