import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import ToDoList from "./ToDoList";
import SignUp from "./SignUp";
import Login from "./Login";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/List/:username" element={<ToDoList />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
