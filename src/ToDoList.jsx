import axios from "axios";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";

function ToDoList() {
  const {register, reset, handleSubmit} = useForm();

  const param = useParams();

  const [allItems, setAllItem] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (!currentUser) {
      axios
        .post("http://localhost:8000/getUserByUsername", {
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
      .post("http://localhost:8000/getAllForUser", {
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
      .post("http://localhost:8000/addTask/", {
        ...data,
        creatorRef: currentUser,
      })
      .then((res) => {
        console.log(res.data);
        setAllItem([...allItems, {...res.data.data, editItem: false}]);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  const deleteItem = (id) => {
    axios.post("http://localhost:8000/deleteTask/", {id: id}).then((res) => {
      console.log(res.data.message);
      setAllItem(allItems.filter((element) => element._id != id));
    });
  };

  const editItem = (id, data, index) => {
    const fieldsAsArray = [];

    Object.keys(data).map((key) => {
      if (data[key] != "") fieldsAsArray.push(key);
      // return key
    });

    const fieldsAsObject = fieldsAsArray.reduce(
      (a, key) => ({...a, [key]: data[key]}),
      {}
    );

    console.log(fieldsAsObject);

    axios
      .post("http://localhost:8000/editTask/", {
        id: id,
        updateFields: fieldsAsObject,
      })
      .then((res) => {
        // console.log(res.data.message);
        console.log(res.data.data);
        setAllItem(
          allItems.map((item, i) => {
            if (index == i) {
              return {...item, ...{...fieldsAsObject, editItem: false}};
            }
            return item;
          })
        );
      });
    reset();
  };

  return (
    <div className="App">
      {console.log(currentUser)}
      {/* {console.log(allItems)} */}
      <form onSubmit={handleSubmit(addItem)}>
        <input placeholder="title" {...register("title")} />
        <input placeholder="content" {...register("content")} />
        <button type="submit"> add </button>
      </form>

      {allItems?.map((item, index) => {
        return (
          <div key={index}>
            <br />
            {item.title} : {item.content}
            {item.editItem && (
              <form
                onSubmit={handleSubmit((data) =>
                  editItem(
                    item._id,
                    {
                      title: data.newTitle,
                      content: data.newContent,
                    },
                    index
                  )
                )}
              >
                <input placeholder="new title" {...register("newTitle")} />
                <input placeholder="new content" {...register("newContent")} />
                <button type="submit"> edit </button>
              </form>
            )}
            {!item.editItem && (
              <button
                onClick={() => {
                  reset();
                  setAllItem(
                    allItems.map((item, i) => {
                      if (index === i) return {...item, editItem: true};
                      else if (index !== i) return {...item, editItem: false};
                    })
                  );
                }}
                type="submit"
              >
                {" "}
                edit{" "}
              </button>
            )}
            <button onClick={() => deleteItem(item._id)}> delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
