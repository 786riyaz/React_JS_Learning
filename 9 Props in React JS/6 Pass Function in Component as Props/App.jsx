import { AlertHeading } from 'react-bootstrap';
import User from './User';
function App() {

  const displayName = (name) =>{
    console.log("Display Name Function ---", name);
  }

  const alertFunction = () =>{
    alert("This is a Simple Alert.");
  }

  return (
    <div>
      <h1>Understanding Uncontrolled Components</h1>
      <User displayName={displayName} alertFunction={alertFunction} name="Riyaz"/>
      <User displayName={displayName} alertFunction={alertFunction} name="Tasin"/>
      <User displayName={displayName} alertFunction={alertFunction} name="Arbaz"/>
    </div>
  );
}

export default App;