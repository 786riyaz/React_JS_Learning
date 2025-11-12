import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event)=>{
    // console.log(event)
    console.log(event.target.value, event.target.checked);
    if (event.target.checked){
        console.log("Adding skill ::", event.target.value)
        let newSkills = [...skills, event.target.value]
        console.log(newSkills)
        setSkills(newSkills);
    } else {
        console.log("Removing skill ::", event.target.value);
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <div>
      <h1>Select Your Skills</h1>

      <input type="checkbox" name="" id="html" value="HTML" onChange={handleSkills}/>
      <label htmlFor="html"> HTML</label>
      <br />

      <input type="checkbox" name="" id="css" value="CSS" onChange={handleSkills}/>
      <label htmlFor="css"> CSS</label>
      <br />

      <input type="checkbox" name="" id="js" value="JS" onChange={handleSkills}/>
      <label htmlFor="js"> JS</label>
      <br />

      <input type="checkbox" name="" id="php" value="PHP" onChange={handleSkills}/>
      <label htmlFor="php"> PHP</label>
      <br />

      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default Skills;
