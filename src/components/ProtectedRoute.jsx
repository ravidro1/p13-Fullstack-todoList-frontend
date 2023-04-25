import React, { useState, useEffect, useContext } from "react";
import { Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { context } from "../App";
import axios from "axios";

const ProtectedRoute = () => {
  const { isAuth, loginAuthCheck } = useContext(context);

  useEffect(() => {
    loginAuthCheck();
  }, []);
  
  if (isAuth == null) return <> loading </>;
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;

// function ProtectedRoute() {
//   const [component, setComponent] = React.useState(null);

//   const key = localStorage.getItem("token");

//   async function getData() {
//     try {
//       await axios.get(`${process.env.REACT_APP_BACKEND_URL}/isTokenValid`, {
//         headers: {
//           "x-access-token": JSON.parse(key),
//         },
//       });
//       setComponent(<Outlet />);
//     } catch {
//       setComponent(<Navigate to={"/"} />);
//     }
//   }

//   React.useEffect(() => {
//     getData();
//   }, []);

//   return component;
// }

// export default ProtectedRoute;
