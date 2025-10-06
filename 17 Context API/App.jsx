import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function App() {
  const [subject, setSubject] = useState("Maths");

  return (
    <div style={{ background: "red", padding: "10px" }}>
      <SubjectContext.Provider value={subject}>
        {/* <select name="" id="" onChange={(event) => setSubject(event.target.value)} > */}
        <select name="" id="" onChange={() => setSubject(event.target.value)} >
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Science">Science</option>
        </select>
        <h1>App Component</h1>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}
