import { useRef } from "react";

function App() {
  const userNameRef = useRef(null);
  const h1Ref = useRef(null);

  const userNameDisplayHandle = () =>{
    console.log("Toggling Display of Input Field");
    if(userNameRef.current.style.display == "none"){
      userNameRef.current.style.display = "inline"
    } else {
      userNameRef.current.style.display = "none"
    }

  }
  const userNameHandle = () =>{
    console.log("Inside Handler function");
    console.log(userNameRef);
    userNameRef.current.focus();
    userNameRef.current.style.color = "red";
    userNameRef.current.placeholder = "Enter Your Name";
  };

  const hideH1 = () =>{
    console.log("Hidding H1");
    h1Ref.current.style.display = "none"
  }
   
  return (
    <div>
      <h1>Understanding useRef Hook</h1>
      <input ref={userNameRef} type="text" placeholder="Enter Name" />
      <br />
      <button onClick={userNameDisplayHandle}>Toggle Display</button>
      <button onClick={userNameHandle}>Submit</button>
<br />
<br />
<h1 ref={h1Ref}>H1 with Ref</h1>
<button onClick={hideH1}>Hide H1</button>
    </div>
  );
}

export default App;