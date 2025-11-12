import { useActionState, useState } from "react";
import "./css/style.css";

const nameRegex = /^[A-Za-z ]+$/;
const passwordRegex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;

export default function App() {
  const submitData = (prevData, FormData) => {
    console.log("Inside Submit Data Function");
    let userName = FormData.get("userName");
    let password = FormData.get("password");
    // console.log(userName, "---", password);

    if (!userName) {
      console.log("Please enter a valid String as User Name");
      return {error : "Please enter a valid String as User Name", userName, password}
    } else if (userName.length < 3) {
      console.log("Please enter a valid User Name with more than 2 letters");
      return {error : "Please enter a valid User Name with more than 2 letters", userName, password}
    } else if (!nameRegex.test(userName)) {
      console.log("Kindly Enter only Alphabets in the User Name Field");
      return {error : "Kindly Enter only Alphabets in the User Name Field", userName, password}
    } else if (!password) {
      console.log("Please enter a valid String as Password");
      return {error : "Please enter a valid String as Password", userName, password}
    } else if (password.length < 8) {
      console.log("Password must have atleast 8 characters");
      return {error : "Password must have atleast 8 characters", userName, password}
    } else if (!passwordRegex.test(password)) {
      console.log("Password must Contains alteast a upper case letter, a lower case letter, a symbol and a digit");
      return {error : "Password must Contains alteast a upper case letter, a lower case letter, a symbol and a digit", userName, password}
    } else {
      console.log("Data Submitted");
      return {message:"Data Submitted"}
    }
  };
  const [data, action, pending] = useActionState(submitData);
  console.log(data);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding Validation with useActionState </h1>
      <form action={action}>
        <input type="text" placeholder="Enter Name" name="userName"  defaultValue={data?.userName}/>
        <br />
        <input type="text" placeholder="Enter Password" name="password"  defaultValue={data?.password}/>
        <br />
        {data?.error ? <span>{data?.error}</span> : ""}
        {data?.message ? <span style={{color:'green'}}>{data?.message}</span> : "" }
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}