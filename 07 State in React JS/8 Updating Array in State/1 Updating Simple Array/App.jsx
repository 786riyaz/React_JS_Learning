import { useState } from "react";
function App() {
  const [names, setName] = useState([
    "Riyaz",
    "Tasin",
    "Arbaz",
    "Test",
  ]);

  function updateName(newName) {
    console.log("New Name ::", newName);
    names[names.length-1]=newName;

    // Method 1 :: This Method will not work as the refence are not changed for state
    // setName(names);     
    
    // Method 2 :: This method will work because it is creating new array reference with spread operator
    setName([...names]);
  }


  return (
    <div>
      <h1>Understanding Array in State </h1>
      <input type="text" placeholder="Enter Name" onChange={(event)=>updateName(event.target.value)}/>
      {
        names.map((name, index)=>(
          <h4 key={index}>{name}</h4>
        ))
      }

    </div>
  );
}

export default App;