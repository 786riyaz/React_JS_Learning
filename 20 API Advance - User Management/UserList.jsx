import { useEffect, useState } from "react";
import "./css/style.css";
import { useNavigate } from "react-router";

const apiURL = "http://localhost:3000/users";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    console.log("Inside Get User Data Function");
    let response = await fetch(apiURL);
    response = await response.json();
    console.log(response);
    setUserData(response);
  }

  async function deleteUser(id) {
    console.log("Inside Delete User Function ::", id);
    let response = await fetch(apiURL + "/" + id, { method: "delete" });
    response = await response.json();
    console.log(response);
    if (response.id) {
      alert(`Record with ID ${response.id} is deleted.`);
      getUserData(); // This function will reload the user list data and render on output
    }
  }

  const editUser = (id) => {
    console.log("Inside Edit User Function ::", id);
    navigate("/edit/" + id);
  };

  return (
    <div>
      {
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  {" "}
                  <button onClick={() => deleteUser(item.id)}>
                    Delete
                  </button>{" "}
                </td>
                <td>
                  {" "}
                  <button onClick={() => editUser(item.id)}>Edit</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
