import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import type { Task } from "./types";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
