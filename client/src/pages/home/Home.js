import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "../../components/header/Header";
import CreateTodo from "../../components/createTodo/CreateTodo";
import TodoItem from "../../components/todoItem/TodoItem";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import Tab from "../../components/tab/Tab";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);
  const getTodos = async (selectedTab) => {
    try {
      const response = await axios.get(`${baseUrl}/todos/${selectedTab}`);
      console.log("Todos:", response.data);
      setTodos(response.data ?? []);
      setLoading(false);
    } catch (error) {
      alert("Error Loading, Please try again");
      console.error(
        "Error getting todos:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const onTabChange = async (selectedTab) => {
    setActiveTab(selectedTab);
    getTodos(selectedTab);
  };

  useEffect(() => {
    getTodos("All");
  }, []);

  return (
    <div className="home_container">
      <Header />
      {loading && <div className="loading_container">Loading...</div>}

      {/* Show list if list loaded */}
      {!loading && (
        <div className="home_sub">
          <CreateTodo onCreate={() => getTodos("All")} />
          <div className="list_sub" >
            <Tab active={activeTab} onChange={onTabChange} />
            <div className="list_wrapper">
              {todos.map((todo) => (
                <TodoItem
                  getTodos={() => getTodos(activeTab)}
                  todo={todo}
                  key={todo._id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
