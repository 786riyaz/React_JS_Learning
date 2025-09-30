import { useState } from "react";

function App() {
  const personNameArray = ["RiyazKhan", "Arbaz", "Tasin"];
  const [counter, setCounter] = useState(0); // ✅ counter as state
  const [personName, setPersonName] = useState(personNameArray[0]);

  const changePerson = () => {
    console.log("Counter Previous ::", counter);
    const newCounter = (counter + 1) % personNameArray.length;
    console.log("Counter After ::", newCounter);
    console.log("Changing Person Name Number ::", personNameArray[newCounter]);
    setCounter(newCounter); // ✅ update state
    setPersonName(personNameArray[newCounter]);
    console.log("Counter Final ::", newCounter);
  };

  return (
    <div>
      <h1>Understanding State</h1>
      Name = {personName}
      <br /> <br />
      <button onClick={changePerson}>Increment Number</button>
    </div>
  );
}

export default App;
