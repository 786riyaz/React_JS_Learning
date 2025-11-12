import { useRef } from "react";
import UserInput from "./UserInput";

function App() {

  const inputRef = useRef();

  function handleReference () {
    console.log("Inside Handle Reference Function");
    inputRef.current.value = "Test";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Understanding Forward Ref</h1>
      <br />

      <UserInput ref={inputRef}/>
      <button onClick={handleReference}>Click</button>
    </div>
  );
}

export default App;