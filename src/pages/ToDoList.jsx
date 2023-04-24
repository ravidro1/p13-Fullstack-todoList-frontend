import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";

function ToDoList() {
  const navigate = useNavigate();
  const param = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [allItems, setAllItem] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (!currentUser) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/getUserByUsername`, {
          username: param?.username,
        })
        .then((res) => {
          console.warn(res.data);
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

  const addItem = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/addTask/`, {
        title,
        content,
        creatorRef: currentUser,
      })
      .then((res) => {
        console.log(res.data);
        setAllItem([...allItems, { ...res.data.data, editItem: false }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <button
        className="lg:block hidden p-4 bg-[#222831] self-start mx-10  text-white rounded-xl hover:bg-[#2228317d]"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
      <section className="2xl:w-[40%] lg:w-[50%] lg:h-[90%] w-[100%] h-[100%] bg-[#222831] shadow-2xl shadow-black lg:rounded-xl flex flex-col justify-between items-center">
        <form
          className="w-[90%] h-[15%] flex justify-around items-center border-[#D65A31]"
          onSubmit={(e) => e.preventDefault()}
        >
          <textarea
            role="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent text-white outline-none resize-none border-[#D65A31] border-b w-[25%] h-[50%] px-2 py-1"
            placeholder="title"
          />
          <textarea
            role="contentInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-transparent text-white outline-none resize-none border-[#D65A31] border-b w-[50%] h-[50%] px-2 py-1"
            placeholder="content"
          />
          <button
            role="addItemButton_toDoList"
            onClick={addItem}
            className="w-[15%] h-[50%] rounded-lg bg-[#D65A31] text-white"
          >
            add
          </button>
        </form>

        <div className="w-[80%] lg:h-[80%] h-[70%] overflow-y-auto border-t">
          {allItems?.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                index={index}
                setAllItem={setAllItem}
              />
            );
          })}
        </div>

        <div className="lg:hidden block w-[100%] h-[15%]">
          <button
            className="w-[20%] h-[80%] bg-[#ffffff] self-start text-[#D65A31] rounded-xl"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}

export default ToDoList;
