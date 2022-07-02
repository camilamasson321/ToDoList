import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

//include images into your bundle

//create your first component
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  //add todos
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTodo([...todo, addTodo]);
    setInput("");
  };

  // delete todos
  const deleteTodo = (id) => {
    let filteredTodos = [...todo].filter((todo) => todo.id !== id);
    setTodo(filteredTodos);
    console.log("task deleted");
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDos</h1>

        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="No task, add a task"
            onFocus={(e) => (e.target.placeholder = "")}
            type=""
          />
        </form>
        <ul className="todotext">
          {todo.map((task, index) => {
            return (
              <li className="theList" key={index}>
                <p className="taskwords">
                  {task.text} </p>
                  <p className="deletebutton"><AiOutlineClose
                    onClick={() => deleteTodo(task.id)}
                    className="icon"
                  />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
