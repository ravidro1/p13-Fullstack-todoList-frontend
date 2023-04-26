import React, { useContext, useEffect } from "react";
import { context } from "../App";
import { Navigate, Outlet } from "react-router-dom";

export default function AutoLoginCheck() {
  const { isAuth, loginAuthCheck } = useContext(context);

  useEffect(() => {
    loginAuthCheck();
  }, []);

  //   if (isAuth == null) return <> loading </>;
  return isAuth ? <Navigate to={"/List/x"} /> : <Outlet />;
}
