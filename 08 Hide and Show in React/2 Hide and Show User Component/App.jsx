import { useState } from "react";
import User from "./UserComponent";

function App() {
  const userName = "RiyazKhan";
  const [display, toggleDisplay] = useState(true);

  return (
    <div>
      <h1>
        Understanding
        <br />
        Hide and Show
      </h1>
      <button onClick={() => toggleDisplay(!display)}>
        Toggle User Name Display
      </button>
      {display ? <User /> : null}
    </div>
  );
}

export default App;
