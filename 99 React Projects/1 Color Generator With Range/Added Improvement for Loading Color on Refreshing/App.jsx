import { useState } from "react";
import "./css/style.css";

export default function App() {
  let localData = JSON.parse(localStorage.getItem("color"));
  console.log(localData);

  const [red, setRed] = useState(localData.red || "0");
  const [green, setGreen] = useState(localData.green || "0");
  const [blue, setBlue] = useState(localData.blue || "0");

  const updateRed = (value) => {
    setRed(value);
  };
  const updateGreen = (value) => {
    setGreen(value);
  };
  const updateBlue = (value) => {
    setBlue(value);
  };

  const saveData = () => {
    console.log("Inside Save Data Function");
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
    console.log(localStorage.getItem("color"));
  };

  const laodData = () => {
    console.log("Inside Load Data Function");
    let localData = JSON.parse(localStorage.getItem("color"));
    console.log(localData);

    setRed(localData.red);
    setGreen(localData.green);
    setBlue(localData.blue);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Color Generator Project</h1>

      <div
        className="colorBox"
        style={{
          background: "rgb(" + red + "," + green + "," + blue + ")",
        }}
      ></div>

      <table>
        <tbody>
          <tr>
            <td>Red</td>
            <td>
              <input
                value={red}
                type="range"
                name="red"
                min={0}
                max={255}
                onChange={(event) => updateRed(event.target.value)}
              />
            </td>
            <td>
              <span>{red}</span>
            </td>
          </tr>
          <tr>
            <td>Green</td>
            <td>
              <input
                value={green}
                type="range"
                name="green"
                min={0}
                max={255}
                onChange={(event) => updateGreen(event.target.value)}
              />
            </td>
            <td>
              <span>{green}</span>
            </td>
          </tr>
          <tr>
            <td>Blue</td>
            <td>
              <input
                value={blue}
                type="range"
                name="blue"
                min={0}
                max={255}
                onChange={(event) => updateBlue(event.target.value)}
              />
            </td>
            <td>
              <span>{blue}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={saveData}>Save Data</button>
      <button onClick={laodData}>Load Data</button>
    </div>
  );
}
