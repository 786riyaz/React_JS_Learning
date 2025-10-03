import { useId } from "react";

function App() {
  return (
    <div>
      <h1>Understanding useID Hook </h1>
      <UserForm/>
      <hr />
      <UserForm/>
    </div>
  );
}

function UserForm() {
  let nameID = useId();
  let passID = useId();
  let tncID = useId();
  return(
    <form action="">
    <label htmlFor={nameID}>User Name :: </label>
    <input type="text" id={nameID} placeholder="Name" />
    <br />
    <label htmlFor={passID}>Password :: </label>
    <input type="password" id={passID} placeholder="Enter Password" />
    <br />
    <label htmlFor={tncID}>Terms and Condition</label>
    <input type="checkbox" id={tncID} />
    <br />
  </form>
  )
}

export default App;
