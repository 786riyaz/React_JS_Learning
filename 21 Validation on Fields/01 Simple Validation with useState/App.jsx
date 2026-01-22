import { useState } from "react";
import "./css/style.css";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let nameRegex = /^[A-Za-z ]+$/;
  let passwordRegex =
    /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;

  function updateName(value) {
    console.log("Inside Update Name Function ::", value);

    if (value == "") {
      setNameError("Please Enter Value in Name Field");
    } else if (!nameRegex.test(value)) {
      setNameError("Please Enter only Alphabates in Name Field");
    } else if (value.length < 3) {
      setNameError("Please Enter Valid Name in Field");
    } else {
      setNameError("");
      setName(value);
    }
  }

  function updatePassword(value) {
    console.log("Inside Update Password Function ::", value);
    if (value == "") {
      setPasswordError("Please Enter Value in Password Field");
    } else if (value.length < 8) {
      setPasswordError("Password Must Contains alteast 8 characters");
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password Must satisfy this conditions :: at least one uppercase, one lowercase, one digit, and one symbol",
      );
    } else {
      setPasswordError("");
      setPassword(value);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Simple Validation using useState </h1>
      <input
        className={nameError ? "error" : ""}
        type="text"
        placeholder="Enter User Name"
        onChange={(event) => updateName(event.target.value)}
      />
      <br />
      {nameError ? <span>{nameError}</span> : null}
      <br />
      <br />
      <input
        className={passwordError ? "error" : ""}
        type="text"
        placeholder="Enter User Password"
        onChange={(event) => updatePassword(event.target.value)}
      />
      <br />
      {passwordError ? <span>{passwordError}</span> : null}
      <br />
      <br />
      <button disabled={nameError || passwordError}>Submit</button>
    </div>
  );
}
