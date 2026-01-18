// src/AddTask.jsx
import { useState } from "react";

function AddTask({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleAddTask() {
    if (!taskInput.trim()) {
      alert("Task cannot be empty");
      return;
    }

    if (!dueDate) {
      alert("Please select a due date");
      return;
    }

    const isDuplicate = tasks.some(
      (item) => item.task.toLowerCase() === taskInput.toLowerCase(),
    );

    if (isDuplicate) {
      alert("Task already exists");
      return;
    }

    const newTask = {
      id: Date.now(), // stable unique id
      task: taskInput.trim(),
      dueDate,
    };

    setTasks([...tasks, newTask]);

    setTaskInput("");
    setDueDate("");
  }

  return (
    <div className="form-row">
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="primary-btn" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
