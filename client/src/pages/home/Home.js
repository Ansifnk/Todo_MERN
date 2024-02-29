import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "../../components/header/Header";
import CreateTodo from "../../components/createTodo/CreateTodo";
import TodoItem from "../../components/todoItem/TodoItem";
import axios from 'axios'
import { baseUrl } from "../../utils/constants";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(`${baseUrl}/todos`);
      console.log('Todos:', response.data);
    } catch (error) {
      console.error('Error getting todos:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="home_container">
      <Header />
      <div className="home_sub">
        <CreateTodo />
        <div>
          {todos.map((todo) => (
            <TodoItem  tod={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
