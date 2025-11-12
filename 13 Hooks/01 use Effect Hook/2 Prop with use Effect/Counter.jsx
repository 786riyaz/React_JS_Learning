import { useEffect } from "react";

function Counter({ count,data }) {
  function printEveryTime() {
    console.log("This line prints every time");
  }

  function printOnce() {
    console.log("This line only print once");
  }

  function printOnCounter() {
    console.log("This line prints when counter changes");
  }

  useEffect(() => {
    printEveryTime();
  });

  useEffect(() => {
    printOnce();
  }, []);

    useEffect(() => {
    printOnCounter();
  }, [count]);

  return (
    <div>
      <h2>Counter Component</h2>
      <h1>{count} {data}</h1>
    </div>
  );
}

export default Counter;
