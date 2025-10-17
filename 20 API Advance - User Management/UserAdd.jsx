import { useState } from "react";
import { useNavigate } from "react-router";

const apiURL = "http://localhost:3000/users";

export default function UserAdd() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    async function submitData () {
        console.log("Inside Submit Data Function");
        console.log(name, age, email);
        let response = await fetch(apiURL, {method:"Post", body:JSON.stringify({name,age,email})});
        response = await response.json();
        console.log("Response ::", response);
        console.log("Response ::", response.id);
        if(response.id){
            alert("New User Added with ID : " + response.id);
            navigate("/");
        }
    }

  return (
    <div>
      <h1>Add New User Page</h1>
      <input type="text" placeholder="Enter User Name" onChange={(event)=>setName(event.target.value)}/>
      <br /> <br />
      <input type="number" placeholder="Enter User Age" onChange={(event)=>setAge(event.target.value)}/>
      <br /> <br />
      <input type="email" placeholder="Enter User Email ID" onChange={(event)=>setEmail(event.target.value)}/>
      <br /> <br />
      <button onClick={submitData}>Add User</button>
    </div>
  );
}