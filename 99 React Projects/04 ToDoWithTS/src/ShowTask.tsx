import { useState } from "react";
import type { Task } from "./types";


interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function ShowTask({ tasks, setTasks }: Props) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDate, setEditedDate] = useState("");

  function startEdit(task: Task) {
    setEditId(task.id);
    setEditedTask(task.task);
    setEditedDate(task.dueDate);
  }

  function cancelEdit() {
    setEditId(null);
    setEditedTask("");
    setEditedDate("");
  }

  function saveEdit(id: number) {
    const trimmedTask = editedTask.trim();

    if (!trimmedTask) {
      alert("Task cannot be empty");
      return;
    }

    setTasks((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, task: trimmedTask, dueDate: editedDate }
          : item
      )
    );

    cancelEdit();
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <table border={1} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Task</th>
          <th>Due Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((item) => (
          <tr key={item.id}>
            <td>
              {editId === item.id ? (
                <input
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              ) : (
                item.task
              )}
            </td>

            <td>
              {editId === item.id ? (
                <input
                  type="date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                />
              ) : (
                item.dueDate
              )}
            </td>

            <td>
              {editId === item.id ? (
                <>
                  <button className="save-btn" onClick={() => saveEdit(item.id)}>Save</button>
                  <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <button className="edit-btn" onClick={() => startEdit(item)}>Edit</button>
              )}
            </td>

            <td>
              <button className="delete-btn" onClick={() => deleteTask(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShowTask;
