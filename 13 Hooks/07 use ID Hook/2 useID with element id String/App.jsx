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
  let userID = useId();

  return(
    <form action="">
    <label htmlFor={userID+"name"}>User Name :: </label>
    <input type="text" id={userID+"name"} placeholder="Name" />
    <br />
    <label htmlFor={userID+"pass"}>Password :: </label>
    <input type="password" id={userID+"pass"} placeholder="Enter Password" />
    <br />
    <label htmlFor={userID+"tnc"}>Terms and Condition</label>
    <input type="checkbox" id={userID+"tnc"} />
    <br />
  </form>
  )
}

export default App;
