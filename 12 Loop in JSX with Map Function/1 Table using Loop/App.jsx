import { useState } from "react";

function App() {
  const studentData = [
    {name: "RiyazKhan", age: 25, email: "moh.riyazpathan@gmail.com", id: 1, },
    {name: "Arbaz", age: 25, email: "arbazshaikh@gmail.com", id: 2, },
    {name: "Femida", age: 25, email: "femidadatre@gmail.com", id: 3, },
  ];

  return (
    <div>
      <h1>Understanding Loop in JSX</h1>

      <h3>Dummy Data</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID 1</td>
            <td>Name 1</td>
            <td>Age 1</td>
            <td>Email 1</td>
          </tr>
          <tr>
            <td>ID 2</td>
            <td>Name 2</td>
            <td>Age 2</td>
            <td>Email 2</td>
          </tr>
          <tr>
            <td>ID 3</td>
            <td>Name 3</td>
            <td>Age 3</td>
            <td>Email 3</td>
          </tr>
        </tbody>
      </table>

      <h3>Actual Data</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
          studentData.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;