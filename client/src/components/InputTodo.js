import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const data = { description };
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/todos",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });
      setDescription("");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form
        className="d-flex"
        onSubmit={onSubmitForm}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;

// const response = await fetch("http://localhost:5000/todos", {
//     method: "POST",
//     Headers: {
//       "Content-Type": "application/json",
//     },
//    body: JSON.stringify(data)
//   });
