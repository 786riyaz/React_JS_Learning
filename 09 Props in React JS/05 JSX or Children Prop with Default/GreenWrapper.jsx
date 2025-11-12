function GreenWrapper({ children, color="green" }) {
  // This Must be "children"
  console.log(children);
  return (
    <div style={{ color: color, border: "3px solid red", margin: "5px" }}>
      <b>{children}</b>
    </div>
  );
}

export default GreenWrapper;
 