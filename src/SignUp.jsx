import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import background_Imgae from "./assets/pexels-roberto-vivancos-2190283.jpg";

function SignUp(props) {
  const { register, reset, handleSubmit } = useForm();
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
      className={`relative w-[100%] h-[100%] flex flex-col justify-center items-center  bg-gradient-to-t from-[#2a2551] to-[#ffffff0e]
      
        bg-no-repeat bg-cover`}
    >
      <img
        className="w-[100%] h-[100%] absolute -z-20 blur-sm"
        src={background_Imgae}
        alt=""
      />

      <h1 className="font-extralight text-9xl text-[#9E4784] "> Register </h1>

      <section className="w-[15%]">
        <form className="flex flex-col py-44" onSubmit={handleSubmit(signup)}>
          <input
            className="px-3 py-3 border-b border-[#9E4784] bg-transparent mb-5 outline-none text-white placeholder:text-[#fff]"
            {...register("username", { required: true })}
            type={"text"}
            placeholder="username"
          />
          <input
            className="px-3 py-3 border-b border-[#9E4784] bg-transparent mb-7 outline-none text-white placeholder:text-[#fff]"
            {...register("password", { required: true })}
            type={"password"}
            placeholder="password"
          />
          <button className="p-3 bg-[#9E4784] outline-none text-white rounded-lg mb-7">
            {" "}
            Register{" "}
          </button>
          <button
            className="text-[#9E4784] text-xl hover:underline"
            onClick={() => navigate("/")}
          >
            To Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
