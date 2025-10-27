import { useState } from "react";

function App() {

  const [gender,setGender] = useState('Male');

  return (
    <div>
      <h1>Understanding Controller Component</h1>
      <h3>Select Gender</h3>
      {/* <input type="radio" name="gender" id="maleRadio" onClick={()=>setGender("Male")}/>  */}
      <input type="radio" name="gender" id="maleRadio" onChange={(event)=>setGender(event.target.value)} value="Male" checked={gender=='Male'}/> 
      <label htmlFor="maleRadio">Male</label>
      <br />
      {/* <input type="radio" name="gender" id="femaleRadio" onClick={()=>setGender("Female")}/>  */}
      <input type="radio" name="gender" id="femaleRadio" onChange={(event)=>setGender(event.target.value)} value="Female" checked={gender=='Female'}/> 
      <label htmlFor="femaleRadio">Female</label>

      <h3>Selected Gender :: {gender}</h3>
    </div>
  );
}

export default App;