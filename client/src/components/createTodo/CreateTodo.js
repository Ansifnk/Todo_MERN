import React, { useState } from "react";
import "./styles.css";
import Button from "../button/Button";
import axios from "axios";
import { baseUrl } from "../../utils/constants";

const CreateTodo = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createTodo = async () => {
    if(!description||!title) return alert('Please fill all inputs to continue')
    try {

      
      const todoData = {
        title,
        description
      };
      const response = await axios.post(`${baseUrl}/todos`, todoData);
      setTitle("");
      setDescription("")
      onCreate();
      console.log("Todo created:", response.data);
    } catch (error) {
      alert("Error Creating task, Please try again");
      console.error(
        "Error creating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="create_container">
      <div className='input_wrapper' >
        <p>Title</p>
        <input
          className="title_input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className='input_wrapper'>
        <p>Description</p>
        <textarea
          className="title_input"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <Button title="Add" className='create_button' onClick={createTodo} />
    </div>
  );
};

export default CreateTodo;
