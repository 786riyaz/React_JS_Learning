import { useState } from "react";

function App() {

  const userName = "RiyazKhan";
  const [display, toggleDisplay] = useState(true);

  return (
    <div>
      <h1>Understanding Hide and Show</h1>
      <button onClick={()=>toggleDisplay(!display)}>Toggle User Name Display</button>
      {display ? <h3>{userName}</h3> : null}
    </div>
  );
}

export default App;