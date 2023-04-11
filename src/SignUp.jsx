import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLottie } from "lottie-react";
import listGif from "./assets/56438-man-with-task-list.json";

function SignUp() {
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

  const options = {
    animationData: listGif,
    loop: true,
  };

  const { View } = useLottie(options);

  // bg-[#222831]

  return (
    <div
      className={`w-[100%] h-[100%] flex flex-col justify-center items-center bg-[#eeeeee]`}
    >
      <div className="2xl:w-[70%] 2xl:h-[70%] lg:w-[80%] lg:h-[85%] w-[100%] h-[100%] flex lg:rounded-3xl overflow-hidden shadow-2xl shadow-black">
        <section className="lg:w-[50%] w-[100%] h-[100%] bg-[#222831] flex flex-col justify-center items-center">
          <h1 className="w-[100%] h-[35%] font-extralight 2xl:text-9xl lg:text-8xl text-7xl text-[#D65A31] flex justify-center items-center">
            {" "}
            Register{" "}
          </h1>

          <div className="w-[100%] h-[65%] flex justify-center items-center">
            <form
              className="flex flex-col lg:w-[50%] w-[65%] h-[65%]"
              onSubmit={handleSubmit(signup)}
            >
              <input
                className="px-3 py-3 border-b border-[#D65A31] bg-transparent mb-5 outline-none text-white placeholder:text-[rgba(255,255,255,0.7)] lg:placeholder:text-lg lg:text-lg placeholder:text-xl text-xl"
                {...register("username", { required: true })}
                type={"text"}
                placeholder="username"
              />
              <input
                className="px-3 py-3 border-b border-[#D65A31] bg-transparent mb-7 outline-none text-white placeholder:text-[rgba(255,255,255,0.7)] lg:placeholder:text-lg lg:text-lg placeholder:text-xl text-xl"
                {...register("password", { required: true })}
                type={"password"}
                placeholder="password"
              />
              <button className="p-3 bg-[#D65A31] outline-none lg:text-xl text-2xl text-white rounded-lg mb-7">
                {" "}
                Register{" "}
              </button>
              <button
                className="text-[#D65A31] text-xl hover:underline"
                onClick={() => navigate("/")}
              >
                To Login
              </button>
            </form>
          </div>
        </section>

        <section className="lg:flex hidden w-[50%] h-[100%] bg-[#ffffff] flex-col justify-center items-center]">
          {" "}
          <div className="w-[80%] h-[80%] "> {View} </div>
        </section>
      </div>
    </div>
    // <div
    //   className={`w-[100%] h-[100%] flex flex-col justify-center items-center bg-[#eeeeee]`}
    // >
    //   <div className="w-[70%] h-[70%] flex rounded-3xl overflow-hidden shadow-2xl shadow-black">
    //     <section className="w-[50%] h-[100%] bg-[#222831] flex flex-col justify-center items-center">
    //       <h1 className="w-[100%] h-[35%] font-extralight text-9xl text-[#D65A31] flex justify-center items-center">
    //         {" "}
    //         Register{" "}
    //       </h1>

    //       <div className="w-[100%] h-[65%] flex justify-center items-center">
    //         <form
    //           className="flex flex-col w-[50%] h-[65%]"
    //           onSubmit={handleSubmit(signup)}
    //         >
    //           <input
    //             className="px-3 py-3 border-b border-[#D65A31] bg-transparent mb-5 outline-none text-white placeholder:text-[rgba(255,255,255,0.7)]"
    //             {...register("username", { required: true })}
    //             type={"text"}
    //             placeholder="username"
    //           />
    //           <input
    //             className="px-3 py-3 border-b border-[#D65A31] bg-transparent mb-7 outline-none text-white placeholder:text-[rgba(255,255,255,0.7)]"
    //             {...register("password", { required: true })}
    //             type={"password"}
    //             placeholder="password"
    //           />
    //           <button className="p-3 bg-[#D65A31] outline-none text-white rounded-lg mb-7">
    //             {" "}
    //             Register{" "}
    //           </button>
    //           <button
    //             className="text-[#D65A31] text-xl hover:underline"
    //             onClick={() => navigate("/")}
    //           >
    //             To Login
    //           </button>
    //         </form>
    //       </div>
    //     </section>

    //     <section className="w-[50%] h-[100%] bg-[#ffffff] flex flex-col justify-center items-center">
    //       {" "}
    //       <div className="w-[80%] h-[80%] "> {View} </div>
    //     </section>
    //   </div>
    // </div>
  );
}

export default SignUp;
