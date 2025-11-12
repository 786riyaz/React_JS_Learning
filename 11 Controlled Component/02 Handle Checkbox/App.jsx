import Skills from "./Skills";
import { useState } from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  return (
    <div>
      <h1>Understanding Controller Component</h1>
      <Skills/>
    </div>
  );
}

export default App;