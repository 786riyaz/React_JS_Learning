import { useState } from "react";
function App() {

  const userData = [{Name:"Riyaz", Age:25},
    {Name:"Arbaz", Age:24},{Name:"Femida", Age:25},
    {Name:"Tasin", Age:19},{Name:"ABC", Age:20},
    {Name:"PQR", Age:25},{Name:"XYZ", Age:30},
  ]

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

        {userData.map((user)=>(
          <div style={cardStyle}>
          <img style={{ width: "200px" }} src="public\vite.svg" alt="" />
          <div>
            <h3 style={{ paddingLeft: "60px" }}>{user.Name}---{user.Age}</h3>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
}
export default App;