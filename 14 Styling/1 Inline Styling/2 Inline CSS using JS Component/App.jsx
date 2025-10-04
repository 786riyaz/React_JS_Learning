function App() {
  const titleStyle = {
    color: "red",
    background: "white",
  };
  const cardStyle = {
    border: "5px solid green",
    borderRadius: "10px",
    width: "220px",
    padding: "10px",
    margin: "5px",
  };

  return (
    <div>
      <h1 style={titleStyle}>Understanding Props with useEffect</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      </div>
    </div>
  );
}
export default App;