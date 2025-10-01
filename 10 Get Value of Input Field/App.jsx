import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>Understanding Input Field</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        value={userName}
      />
      <br />
      <button onClick={() => setUserName("")}>Clear</button>
      <h1>{userName}</h1>
    </div>
  );
}

export default App;
