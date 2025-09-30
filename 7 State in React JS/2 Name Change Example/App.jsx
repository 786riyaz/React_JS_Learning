import { useState } from "react";

function App() {
  const personNameArray = ["RiyazKhan", "Arbaz", "Tasin"];
  const [counter, setCounter] = useState(0);

  const changePerson = () => {
    setCounter((prev) => (prev + 1) % personNameArray.length);
    console.log("Counter ::", counter);
  };

  return (
    <div>
      <h1>Understanding State</h1>
      Name = {personNameArray[counter]}
      <br /> <br />
      <button onClick={changePerson}>Increment Number</button>
    </div>
  );
}

export default App;
