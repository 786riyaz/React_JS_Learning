// src/ShowTask.jsx
import { useState } from "react";

function ShowTask({ tasks, setTasks }) {
  const [editId, setEditId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDate, setEditedDate] = useState("");

  function startEdit(task) {
    setEditId(task.id);
    setEditedTask(task.task);
    setEditedDate(task.dueDate);
  }

  function cancelEdit() {
    setEditId(null);
    setEditedTask("");
    setEditedDate("");
  }

  function saveEdit(id) {
    if (!editedTask.trim()) {
      alert("Task cannot be empty");
      return;
    }

    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, task: editedTask.trim(), dueDate: editedDate }
        : item,
    );

    setTasks(updatedTasks);
    cancelEdit();
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div>
      {tasks.length > 0 ? (
        <table border="1" style={{ borderCollapse: "collapse" }}>
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
                    <div>
                      <button
                        className="save-btn"
                        onClick={() => saveEdit(item.id)}
                      >
                        Save
                      </button>
                      <button className="cancel-btn" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>
                  )}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default ShowTask;
