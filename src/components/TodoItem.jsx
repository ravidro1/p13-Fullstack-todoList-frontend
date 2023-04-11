import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function TodoItem({ item, index, allItems, setAllItem }) {
  const [tempNewTitle, setTempNewTitle] = useState("");
  const [tempNewContent, setTempNewContent] = useState("");

  const deleteItem = (id) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/deleteTask/`, { id })
      .then((res) => {
        console.log(res.data.message);
        setAllItem(allItems.filter((element) => element._id != id));
      });
  };

  //   const editItem = (id, data, index) => {
  //     const fieldsAsArray = [];

  //     Object.keys(data).map((key) => {
  //       if (data[key] != "") fieldsAsArray.push(key);
  //       // return key
  //     });

  //     const fieldsAsObject = fieldsAsArray.reduce(
  //       (a, key) => ({ ...a, [key]: data[key] }),
  //       {}
  //     );

  //     console.log(fieldsAsObject);

  //     axios
  //       .post(`${process.env.REACT_APP_BACKEND_URL}/editTask/`, {
  //         id: id,
  //         updateFields: fieldsAsObject,
  //       })
  //       .then((res) => {
  //         // console.log(res.data.message);
  //         console.log(res.data.data);
  //         setAllItem(
  //           allItems.map((item, i) => {
  //             if (index == i) {
  //               return { ...item, ...{ ...fieldsAsObject, editItem: false } };
  //             }
  //             return item;
  //           })
  //         );
  //       });
  //     reset();
  //   };

  const editItem = () => {
    if (!item.editItem) {
      setAllItem(
        allItems.map((item, i) => {
          if (index === i) return { ...item, editItem: true };
          else if (index !== i) return { ...item, editItem: false };
        })
      );

      setTempNewTitle(item.title);
      setTempNewContent(item.content);
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/editTask/`, {
          id: item._id,
          updateFields: { title: tempNewTitle, content: tempNewContent },
        })
        .then((res) => {
          // console.log(res.data.message);
          console.log(res.data.data);
          setAllItem(
            allItems.map((item, i) => {
              if (index == i) {
                return {
                  ...item,
                  ...{
                    ...item,
                    title: tempNewTitle,
                    content: tempNewContent,
                    editItem: false,
                  },
                };
              }
              return item;
            })
          );
        });
    }
  };

  return (
    <div className="w-[100%] h-[20%] text-white border-b flex ">
      <section className="w-[60%] h-[100%] flex flex-col">
        {!item.editItem ? (
          <>
            <h1 className="min-h-[45px] text-2xl mx-2 pt-1 pb-2 border-b border-[#D65A31]">
              {" "}
              {item.title}{" "}
            </h1>
            <p className="min-h-[65%] text-lg px-2 py-1 overflow-y-auto break-all">
              {" "}
              {item.content}
            </p>
          </>
        ) : (
          <>
            <input
              value={tempNewTitle}
              onChange={(e) => setTempNewTitle(e.target.value)}
              className="min-h-[45px] text-2xl mx-2 pt-1 pb-2 border-b border-[#D65A31] bg-transparent outline-none text-green-400"
              placeholder="new title"
            />
            <textarea
              value={tempNewContent}
              onChange={(e) => setTempNewContent(e.target.value)}
              className="min-h-[65%] text-lg px-2 py-1 overflow-y-auto break-all bg-transparent outline-none resize-none text-green-400"
              placeholder="new content"
            />
          </>
        )}
      </section>

      <section className="w-[40%] h-[100%] flex justify-around items-center">
        <button
          className=" w-[40%] h-[45%] bg-[#D65A31] rounded-xl"
          onClick={editItem}
          type="submit"
        >
          {" "}
          {item.editItem ? "Confirm Edit" : "Edit"}{" "}
        </button>

        <button
          className=" w-[40%] h-[45%] bg-red-600 rounded-xl"
          onClick={() => deleteItem(item._id)}
        >
          {" "}
          delete{" "}
        </button>
      </section>
    </div>
  );
}
