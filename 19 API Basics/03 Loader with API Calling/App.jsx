import { useEffect, useState } from "react";
import "./css/style.css";

// const apiURL = "https://dummyjson.com/users";
const apiURL = "http://localhost:3000/users";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  async function getUserData() {
    console.log("Inside Get User Data Function");
    let response = await fetch(apiURL);
    response = await response.json();
    // console.log(response.users);
    // setUserData(response.users);
    console.log(response);
    setUserData(response);
    setLoading(false);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding API </h1>
      {
        !loading ? (
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
        ) : (
          <h1>Data is Loading....</h1>
        )
      }
      
    </div>
  );
}
