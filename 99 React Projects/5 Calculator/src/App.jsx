// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const updateValue = (e) => {
    const value = e.target.innerText;

    if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("Error");
      }
      return;
    }

    if (value === "CE") {
      setDisplay("");
      return;
    }

    if (value === "←") {
      setDisplay(display.slice(0, -1));
      return;
    }

    if (value === ".") {
      const last = display.split(/[+\-*/]/).pop();
      if (last.includes(".")) return;
    }

    setDisplay(display + value);
  };

  return (
    <div className="app-wrapper">
      <h1 className="title">My Calculator</h1>

      <div className="main-box">
        <div className="display-row">
          <input className="display" value={display} readOnly />
          <button className="danger ce-btn" onClick={updateValue}>
            CE
          </button>
        </div>

        <div className="calculator">
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            ".", "0", "←", "+"
          ].map((item) => (
            <button
              key={item}
              onClick={updateValue}
              className={item === "←" ? "error" : ""}
            >
              {item}
            </button>
          ))}

          <button className="success equal" onClick={updateValue}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
