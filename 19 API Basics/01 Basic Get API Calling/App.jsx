import { useEffect, useState } from "react";
import "./css/style.css"

const apiURL = "https://dummyjson.com/users";

export default function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {getUserData();}, []);

  async function getUserData() {
    console.log("Inside Get User Data Function");
    let response = await fetch(apiURL);
    response = await response.json();
    console.log(response.users);
    setUserData(response.users);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding API </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}