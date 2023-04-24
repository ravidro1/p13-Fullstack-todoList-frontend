import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoList from "./pages/ToDoList";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/List/:username" element={<ToDoList />} />
      <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
