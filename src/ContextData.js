import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContextData() {
  const [isAuth, setIsAuth] = useState(null);
  const [resetListener, setResetListener] = useState(0);
  const navigate = useNavigate();

  async function checkUserData() {
    if (resetListener > 0) await loginAuthCheck();
  }

  useEffect(() => {
    setInterval(checkUserData, 1000 * 60 * 1);
    window.addEventListener("storage", checkUserData);
    return () => window.removeEventListener("storage", checkUserData);
  }, [resetListener]);

  const loginAuthCheck = async () => {
    setResetListener(resetListener + 1);

    const token = localStorage.getItem("token");

    if (!token) {
      logout();
    }

    let parseToken = null;
    try {
      parseToken = JSON.parse(token);
    } catch {
      parseToken = token;
    }

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/isTokenValid`, {
        headers: {
          "x-access-token": parseToken,
        },
      })
      .then((res) => {
        setIsAuth(true);
      })
      .catch((error) => {
        logout();
      });
  };

  const logout = () => {
    setResetListener(0);
    localStorage.removeItem("token");
    setIsAuth(null);
    navigate("/");
  };

  return { isAuth, loginAuthCheck, logout };
}
