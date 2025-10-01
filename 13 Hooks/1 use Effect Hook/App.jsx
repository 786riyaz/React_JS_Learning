import { useEffect, useState } from "react";
import User from "./UserComponent";

function App() {
const [count, setCounter] = useState(0);
const [data, setData] = useState(0);

useEffect(()=>{
  // callOnce();
  counterConsole();
// },[]);      // here blank array means run only once
},[count]);      // here count means run only when count update

function counterConsole(){
  console.log("counterConsole",count);
}

  function callOnce(){
    console.log("Call Once Function")
  }

  return (
    <div>
      <h1>Understanding Hooks</h1>
      <button onClick={()=> setCounter(count+1)}>Counter {count}</button>
      <button onClick={()=> setData(data+1)}>Data {data}</button>
    </div>
  );
}

export default App;