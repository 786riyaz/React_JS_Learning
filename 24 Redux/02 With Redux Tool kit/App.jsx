import "./css/style.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, multiply } from "./redux/counter/counterSlice";

export default function App() {
  const count = useSelector( (state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className="container">
      <h3 className="Header">Counter React Redux Application</h3>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(incrementByAmount(3))}> Increment By 3 </button>
      <h1> {count} </h1>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <button onClick={ () => dispatch(multiply())}> Double </button>
      <Navbar></Navbar>
    </div> 
  );
}
