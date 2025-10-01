import { useState } from "react";
import User from "./UserComponent"

function App() {
  const studentData = [
    {name: "RiyazKhan", age: 25, email: "moh.riyazpathan@gmail.com", id: 1, },
    {name: "Arbaz", age: 25, email: "arbazshaikh@gmail.com", id: 2, },
    {name: "Femida", age: 25, email: "femidadatre@gmail.com", id: 3, },
  ];

  return (
    <div>
      <h1>Understanding JSX Loop</h1>
      {studentData.map((data)=>(
        <div key={data.id}>

          <User userData={data}/>
        </div>
        
      ))}
    </div>
  );
}

export default App;