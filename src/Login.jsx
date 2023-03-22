import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";

function Login(props) {
  const {register, reset, handleSubmit} = useForm();
  const navigate = useNavigate();

  const login = (data) => {
    axios
      .post("http://localhost:8000/userExistCheck", data)
      .then((res) => {
        console.log(res.data);
        navigate(`/List/${data.username}`);
      })
      .catch((error) => {
        console.log(error);
        console.log(2);
      });

  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div> login </div>
      <form onSubmit={handleSubmit(login)}>
        <input
          {...register("username", {required: true})}
          type={"text"}
          placeholder="username"
        />
        <input
          {...register("password", {required: true})}
          type={"password"}
          placeholder="password"
        />
        <button> login </button>
      </form>

      <NavLink to={"/SignUp"}> signup </NavLink>
    </div>
  );
}

export default Login;
