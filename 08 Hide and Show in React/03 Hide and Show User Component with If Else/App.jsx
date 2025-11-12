import { useState } from "react";
import User from "./UserComponent";

function App() {
  const [display, toggleDisplay] = useState(true);

  let content; // variable to store what should be displayed
  if (display) {
    content = <User />;
  } else {
    content = null; // or <p>No User to show</p>
  }

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
      {content}
    </div>
  );
}

export default App;
