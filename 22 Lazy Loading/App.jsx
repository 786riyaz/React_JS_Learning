import { lazy, Suspense, useState } from "react";
// import User from "./User";
const User = lazy(()=>import ('./User'));

export default function App() {
  const [load, setLoad] = useState(false);
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding Lazy Loading </h1>
      <button onClick={()=>setLoad(true)}>Load User</button>
      {/* {load?<><User/><User/><User/></>:null} */}
      {
        load?<Suspense fallback={<h3>Loading....</h3>}> <User/><User/><User/> </Suspense> : null
      }
    </div>
  );
}
