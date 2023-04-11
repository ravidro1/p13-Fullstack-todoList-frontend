import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TodoItem from "./components/TodoItem";

function ToDoList() {
  const { register, reset, handleSubmit } = useForm();

  const param = useParams();

  const [allItems, setAllItem] = useState([{ title: "1", content: "1" }]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (!currentUser) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/getUserByUsername`, {
          username: param?.username,
        })
        .then((res) => {
          console.log(res.data);
          setCurrentUser(res.data.data);
          getUserTaskList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [param]);

  const getUserTaskList = (user) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/getAllForUser`, {
        creatorRef: user._id,
      })
      .then((res) => {
        console.log(res.data.data);
        setAllItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addItem = (data) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/addTask/`, {
        ...data,
        creatorRef: currentUser,
      })
      .then((res) => {
        console.log(res.data);
        setAllItem([...allItems, { ...res.data.data, editItem: false }]);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <section className="2xl:w-[40%] lg:w-[50%] lg:h-[90%] h-[100%] bg-[#222831] shadow-2xl shadow-black lg:rounded-xl flex flex-col justify-between items-center">
        <form
          className="w-[90%] h-[15%] flex justify-around items-center border-[#D65A31]"
          onSubmit={handleSubmit(addItem)}
        >
          <textarea
            className="bg-transparent text-white outline-none resize-none border-[#D65A31] border-b w-[25%] h-[50%] px-2 py-1"
            placeholder="title"
            {...register("title")}
          />
          <textarea
            className="bg-transparent text-white outline-none resize-none border-[#D65A31] border-b w-[50%] h-[50%] px-2 py-1"
            placeholder="content"
            {...register("content")}
          />
          <button
            className="w-[15%] h-[50%] rounded-lg bg-[#D65A31] text-white"
            type="submit"
          >
            {" "}
            add{" "}
          </button>
        </form>

        <div className="w-[80%] h-[80%] overflow-y-auto border-t">
          {allItems?.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                allItems={allItems}
                index={index}
                setAllItem={setAllItem}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ToDoList;
