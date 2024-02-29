import React, { useState } from "react";
import "./styles.css";
import Button from "../button/Button";
import axios from 'axios';
import { baseUrl } from "../../utils/constants";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const createTodo = async () => {
    try {
      const todoData = {
        title,
      };
      const response = await axios.post(
        `${baseUrl}/todos`,
        todoData
      );
      setTitle('')
      console.log("Todo created:", response.data);
    } catch (error) {
      console.error(
        "Error creating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="create_container">
      <input
        className="title_input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Button title="Add"  onClick={createTodo} />
    </div>
  );
};

export default CreateTodo;
