import { useEffect, useState, useRef } from "react";
import "./css/style.css";
import Navbar from "./Navbar";

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h3 className="Header">Counter React Redux Application</h3>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <h1> {count} </h1>
      <button onClick={() => setCount(count - 1)}> Decrement </button>
      <Navbar count = {count}></Navbar>
    </div>
  );
}
