import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState('');
  const [users, addUser] = useState([]);

  // These are Derived List Variables
  let totalNames = users.length;
  let lastName = users[users.length-1] || "None";
  let totalUnique = [...new Set(users)].length;

  function addInList() {
    console.log("Inside the Function for add in list");
    console.log("User Name to add ::", user);
    addUser([...users, user]);
    console.log("Updated User List ::", users);
    // The reason your console didn’t show the new list immediately is that React batches and delays state updates. On the next render, the state updates correctly.
  }

    useEffect(() => {
    console.log("Updated User List in useEffect::", users);
  }, [users]);

  return (
    <div>
      <h1>Understanding Derived State</h1>

      <h4>Total Names :: {totalNames}</h4>
      <h4>Last Name :: {lastName}</h4>
      <h4>Total Unique Names :: {totalUnique} </h4>

      <input type="Text" placeholder="Name" 
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={addInList}>Add in List</button>
      
      {users.map((name, index)=>(
        <h4 key={index}>{name}</h4>
      ))}
    </div>
  );
}

export default App;