import { useState } from "react";

function Counter() {
  const [counter, incrementCounter] = useState(0);

  return (
    <div>
      <h3>Counter :: {counter}</h3>
      <button onClick={() => incrementCounter(counter + 1)}>
        Increment Counter
      </button>
    </div>
  );
}

export default Counter;