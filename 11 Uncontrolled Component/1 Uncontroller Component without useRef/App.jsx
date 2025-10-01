import { useRef } from "react";

function App() {

  function handleForm(event) {
    event.preventDefault();
    console.log("Handling form Data");

    const userField = document.querySelector("#user").value;
    const passwordField = document.querySelector("#password").value;
    
    console.log(userField, passwordField);
  }

  return (
    <div>
      <h1>Understanding Uncontrolled Components</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;