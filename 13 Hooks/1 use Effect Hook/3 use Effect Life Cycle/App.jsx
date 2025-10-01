import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
const [count, setCounter] = useState(0);
const [data, setData] = useState(0);
const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Understanding Props with useEffect</h1>
{
  display ?<Counter count={count} data={data}/> : null
}      
      <button onClick={()=>setCounter(count+1)}>Increase Counter</button>
      <button onClick={()=>setData(data+1)}>Increase Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default App;