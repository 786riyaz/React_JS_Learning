import { useState, useEffect } from "react";

function Clock({ fontColor = "red" }) {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return (
      String(now.getHours()).padStart(2, "0") +
      " : " +
      String(now.getMinutes()).padStart(2, "0") +
      " : " +
      String(now.getSeconds()).padStart(2, "0")
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        String(now.getHours()).padStart(2, "0") +
          " : " +
          String(now.getMinutes()).padStart(2, "0") +
          " : " +
          String(now.getSeconds()).padStart(2, "0")
      );
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      style={{
        border: "5px solid black",
        borderRadius: "10px",
        width: "250px",
        background: "black",
        padding: "20px",
        fontWeight: "900",
        fontSize: "xx-large",
        textAlign: "center",
      }}
    >
      <span style={{ color: fontColor }}>{time}</span>
    </div>
  );
}

export default Clock;