// import { render, screen, fireEvent } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import TodoItem from "./TodoItem";

// describe("title input", () => {
//   test("title input should render when editItem true", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const titleInputElement = screen.getByRole("titleInput");

//     expect(titleInputElement).toBeInTheDocument();
//   });
//   test("title input should not render when editItem false", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const titleInputElement = screen.queryByRole("titleInput");

//     expect(titleInputElement).not.toBeInTheDocument();
//   });
//   test("title input should change when type", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const titleInputElement = screen.getByRole("titleInput");
//     fireEvent.change(titleInputElement, {
//       target: { value: "titleInput" },
//     });
//     expect(titleInputElement.value).toBe("titleInput");
//   });
// });

// describe("content input", () => {
//   test("content input should render when editItem true", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const contentInputElement = screen.getByRole("contentInput");
//     expect(contentInputElement).toBeInTheDocument();
//   });
//   test("content input should not render when editItem false", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const contentInputElement = screen.queryByRole("contentInput");
//     expect(contentInputElement).not.toBeInTheDocument();
//   });
//   test("content input should change when type", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const contentInputElement = screen.getByRole("contentInput");
//     fireEvent.change(contentInputElement, {
//       target: { value: "contentInput" },
//     });
//     expect(contentInputElement.value).toBe("contentInput");
//   });
// });

// describe("title header", () => {
//   test("title header should render when editItem false", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const titleHeaderElement = screen.getByRole("titleHeader");

//     expect(titleHeaderElement).toBeInTheDocument();
//   });
//   test("title header should not render when editItem true", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const titleHeaderElement = screen.queryByRole("titleHeader");

//     expect(titleHeaderElement).not.toBeInTheDocument();
//   });
// });

// describe("content paragraph", () => {
//   test("content paragraph should render when editItem false", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const contentParagraphElement = screen.getByRole("contentParagraph");
//     expect(contentParagraphElement).toBeInTheDocument();
//   });

//   test("content paragraph should not render when editItem true", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const contentParagraphElement = screen.queryByRole("contentParagraph");
//     expect(contentParagraphElement).not.toBeInTheDocument();
//   });
// });

// describe("editButton", () => {
//   test("editButton should be click", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     // const editButtonElement = screen.queryByRole("editButton");
//     // expect(editButtonElement.textContent).toBe("Edit");
//   });

//   test("text in editButton should be edit when editItem false", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: false, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const editButtonElement = screen.queryByRole("editButton");
//     expect(editButtonElement.textContent).toBe("Edit");
//   });

//   test("text in editButton should be edit when editItem true", () => {
//     render(
//       <BrowserRouter>
//         <TodoItem
//           index={1}
//           item={{ editItem: true, title: "title", content: "content", _id: 1 }}
//           setAllItem={() => {}}
//         />
//       </BrowserRouter>
//     );
//     const editButtonElement = screen.queryByRole("editButton");
//     expect(editButtonElement.textContent).toBe("Confirm Edit");
//   });
// });
