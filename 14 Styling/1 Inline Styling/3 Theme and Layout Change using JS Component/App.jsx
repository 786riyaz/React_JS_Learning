import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("white");
  const [layout, setLayout] = useState("flex");

  const cardStyle = {
    border: "5px solid green",
    borderRadius: "10px",
    width: "220px",
    padding: "10px",
    margin: "5px",
  };

  return (
    <div style={{ background: theme }}>
      <h1>Understanding inline CSS</h1>
      <button
        style={{ background: theme }}
        onClick={() => {
          if (theme == "gray") {setTheme("white"); } 
          else { setTheme("gray"); }
        }}
      >
        Toggle Theme
      </button>
      <span> </span>
      <button
        style={{ background: theme }}
        onClick={() => {
          if (layout == "flex") {setLayout("block"); } 
          else { setLayout("flex"); }
        }}
      >
        Toggle Layout
      </button>

      <div style={{ display: layout, flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 1</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 2</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 3</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 4</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 5</h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>Vite Logo 6</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
