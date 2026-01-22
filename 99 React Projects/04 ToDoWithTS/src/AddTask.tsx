import { useState } from "react";
import type { Task } from "./types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function AddTask({ tasks, setTasks }: Props) {
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleAddTask() {
    const trimmedTask = taskInput.trim();

    if (!trimmedTask) {
      alert("Task cannot be empty");
      return;
    }

    if (!dueDate) {
      alert("Please select a due date");
      return;
    }

    const isDuplicate = tasks.some(
      (t) => t.task.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      alert("Task already exists");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      task: trimmedTask,
      dueDate,
    };

    setTasks((prev) => [...prev, newTask]);

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
