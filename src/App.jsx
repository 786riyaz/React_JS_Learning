import { useState, useActionState } from "react";

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[a-z0-9]+@[a-z]+.[a-z]+$/;

export default function App() {
  const [error, setError] = useState(false);

  const validateData = (prevData, formData) => {
    console.log("Name :", formData.get("name"));
    console.log("password :", formData.get("password"));
    console.log("Age :", formData.get("age"));
    console.log("Email :", formData.get("email"));

    const name = formData.get("name");
    const password = formData.get("password");
    const age = formData.get("age");
    const email = formData.get("email");

    if (name && password && age && email) {
      if (!nameRegex.test(name)) {
        console.log("Invalid Name");
        setError("Invalid Name");
        return {name, password, age, email};
      } else if (!emailRegex.test(email)) {
        console.log("Invalid Email");
        setError("Invalid Email");
        return {name, password, age, email};
      } else {
        setError(false);
      }
    } else {
      console.log("Please Enter all the values");
      return {name, password, age, email};
    }
  };

  const [data, action, pending] = useActionState(validateData);
  console.log("Form Data ::::", data);

  return (
    <div className="App">
      <h1>User Form</h1>
      <form action={action}>
        <input type="text" name="name" defaultValue={data?.name} />
        <br />
        <input type="password" name="password" defaultValue={data?.password} />
        <br />
        <input type="number" name="age" defaultValue={data?.age} />
        <br />
        <input type="email" name="email" defaultValue={data?.email} />
        <br />
        <span style={{ color: "red" }}>{error ? error : null}</span>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
