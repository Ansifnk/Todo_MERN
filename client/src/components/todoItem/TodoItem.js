import React, { useState } from "react";
import "./todoItem.css";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import Button from "../button/Button";
const TodoItem = ({ todo,getTodos }) => {
  const { _id: id, title, done,description } = todo;
  const [checked, setChecked] = useState(done);

  const updateDone = async (event) => {
    try {
      const response = await axios.patch(`${baseUrl}/todos/${id}`, {
        done: event.target.checked,
      });
      setChecked(event.target.checked);
      getTodos()
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const removeTask = async () => {
    const confirm = window.confirm("Are you sure want to delete?");
    if (!confirm) return;
    try {
      const response = await axios.delete(`${baseUrl}/todos/${id}`);
      getTodos()
    } catch (error) {
      console.error(
        "Error Deleting todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="item_container" title={description} >
      <p style={{textDecoration:checked&&'line-through'}} >{title}</p>
      <div style={{ flex: 1 }} />
      <input
        title="Mark as done"
        className="checkbox"
        type="checkbox"
        value={checked}
        defaultChecked={checked}
        onChange={updateDone}
      />
      <p onClick={removeTask} className="cross" title="Remove">
        x
      </p>
    </div>
  );
};

export default TodoItem;
