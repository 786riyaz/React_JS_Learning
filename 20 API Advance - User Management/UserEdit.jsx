import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const apiURL = "http://localhost:3000/users";

export default function UserEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => { getUserData(); }, []);
  
  async function getUserData() {
    let response = await fetch(apiURL + "/" + id);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  }

  async function editUser() {
    let response = await fetch(apiURL + "/" + id, { method: "Put", body: JSON.stringify({ name, age, email }), });
    response = await response.json();
    console.log(response);
    if (response.id) {
      alert("Details updated for ID ::" + response.id);
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Edit User Page</h1>
      <input type="text" placeholder="Enter User Name" value={name} onChange={(event) => setName(event.target.value)} />
      <br /> <br />
      <input type="number" placeholder="Enter User Age" value={age} onChange={(event) => setAge(event.target.value)} />
      <br /> <br />
      <input type="email" placeholder="Enter User Email ID" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br /> <br />
      <button onClick={editUser}>Update User Data</button>
    </div>
  );
}
