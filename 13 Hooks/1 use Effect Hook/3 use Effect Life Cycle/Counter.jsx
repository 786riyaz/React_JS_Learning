import { useEffect } from "react";

function Counter({ count, data }) {
  function printEveryTime() {
    console.log("This line prints every time ---- Every Stage");
  }

  function printOnce() {
    console.log("This line only print once ---- Mounting");
  }

  function printOnCounter() {
    console.log("This line prints when counter changes ---- Update");
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

  useEffect(() => {
    return () => {
      console.log("This line prints with component hide ---- Unmounting")
    }
  }, []);

  return (
    <div>
      <h2>Counter Component</h2>
      <h1>
        {count} {data}
      </h1>
    </div>
  );
}

export default Counter;