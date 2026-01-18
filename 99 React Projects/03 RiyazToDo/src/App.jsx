// src/App.jsx
import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("task")) || [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <div className="card">
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="card">
        <ShowTask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
