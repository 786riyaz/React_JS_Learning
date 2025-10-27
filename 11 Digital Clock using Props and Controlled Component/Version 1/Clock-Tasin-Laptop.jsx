import { useState } from "react";

let now = new Date();
function Clock({ fontColor = "red" }) {
//   console.log("Color Received ::", fontColor);

  const [time, setTime] = useState(now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds());

  setInterval(() => {
    const now = new Date();
    setTime(
      now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds()
    );
  }, 1000);

  return (
    <div
      style={{
        border: "5px Solid black",
        borderRadius: "10px",
        width: "170px",
        background: "black",
        padding: "20px",
        fontWeight: "900",
        fontSize: "xx-large",
      }}
    >
      <span style={{ color: fontColor }}>{time}</span>
    </div>
  );
}

export default Clock;
