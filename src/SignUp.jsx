import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";

function SignUp(props) {
  const {register, reset, handleSubmit} = useForm();
  const navigate = useNavigate();

  const signup = (data) => {
    axios
      .post("http://localhost:8000/addUser", data)
      .then((res) => {
        console.log(res.data);
        alert("user created");
        navigate("/");
      })
      .catch((err) => {
        alert("the username already exist!!!");
        console.log(err);
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
      <div> signup </div>
      <form onSubmit={handleSubmit(signup)}>
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
        <button> signup </button>
      </form>

      <NavLink to={"/"}> login </NavLink>
    </div>
  );
}

export default SignUp;
