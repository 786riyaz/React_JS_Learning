import { useState } from "react";
import Clock from "./Clock";

function App() {
  
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>Props With Controlled Component</h1>

      <select name="" id="" onChange={(event)=>setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <Clock fontColor={color} />
    </div>
  );
}

export default App;
