import { useRef } from "react";

function App() {
  const userRef = useRef();
  const passwordRef = useRef();

  function handleForm(event) {
    event.preventDefault();
    console.log("Handling form Data");

    const userField = userRef.current.value;
    const passwordField = passwordRef.current.value;
    
    console.log(userField, passwordField);
  }

  return (
    <div>
      <h1>Understanding Uncontrolled Components</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input ref={userRef} type="text" id="user" placeholder="Enter Name" />
        <br />
        <br />
        <input ref={passwordRef} type="password" name="password" id="password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;