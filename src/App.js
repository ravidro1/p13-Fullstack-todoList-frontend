import React, { createContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ToDoList from "./pages/ToDoList";
import ContextData from "./ContextData";
import AutoLoginCheck from "./components/AutoLoginCheck";

export const context = createContext();

function App() {
  const value = ContextData();

  return (
    <context.Provider value={value}>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <Routes>
          <Route element={<AutoLoginCheck />}>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/List/:username" element={<ToDoList />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
