import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
const [count, setCounter] = useState(0);
const [data, setData] = useState(0);

  return (
    <div>
      <h1>Understanding Props with useEffect</h1>
      <Counter count={count} data={data}/>
      <button onClick={()=>setCounter(count+1)}>Increase Counter</button>
      <button onClick={()=>setData(data+1)}>Increase Data</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;