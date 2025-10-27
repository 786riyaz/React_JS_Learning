import { useState } from "react";

function App() {
  const [city, setCity] = useState("Ahmedabad");

  return (
    <div>
      <h1>Understanding Controller Component</h1>
      <h3>Select City</h3>
      <select name="city" id="cityDD" defaultValue={"Ahmedabad"} onChange={() => setCity(event.target.value)}>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Gandhi Nagar">Gandhi Nagar</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Surat">Surat</option>
      </select>

      <h3>Selected City :: {city}</h3>
    </div>
  );
}

export default App;
