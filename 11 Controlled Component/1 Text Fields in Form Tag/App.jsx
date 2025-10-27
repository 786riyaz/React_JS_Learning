import { useState } from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  return (
    <div>
      <h1>Understanding Controller Component</h1>

      <form action="" method="get">
      <input type="text" placeholder="Enter Your Name" onChange={(event)=>{setUserName(event.target.value)}} value={userName}/>
      <br />
      <input type="text" placeholder="Enter Your Email" onChange={(event)=>{setEmail(event.target.value)}} value={userEmail}/>
      <br />
      <input type="password" placeholder="Enter Your Password" onChange={(event)=>{setUserPassword(event.target.value)}} value={userPassword}/>
      <br />
      <button>Submit</button>
      <button onClick={()=>{setUserName(""); setEmail(""); setUserPassword("");}}>Clear</button>
      </form>

      <h2>{userName}</h2>
      <h2>{userEmail}</h2>
      <h2>{userPassword}</h2>
    </div>
  );
}

export default App;