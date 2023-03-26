import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ToDoList from "./ToDoList";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/List/:username" element={<ToDoList />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
