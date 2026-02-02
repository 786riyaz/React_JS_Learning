import { useReducer } from "react";

const emptyData = {
  userName: "",
  age: "",
  email: "",
  city: "",
  pincode: "",
};

const reducer = (data, action) => {
  console.log("Inside Reducer Function");
  return {...data, [action.type]:action.val};
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  // console.log(state);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding useReducer Hook </h1>

      <input type="text" placeholder="Enter Name" name="userName" onChange={(event)=>dispatch({val:event.target.value, type:'userName'})}/>
      <br />
      <input type="text" placeholder="Enter Age" name="age" onChange={(event)=>dispatch({val:event.target.value, type:'age'})}/>
      <br />
      <input type="text" placeholder="Enter Email" name="email" onChange={(event)=>dispatch({val:event.target.value, type:'email'})}/>
      <br />
      <input type="text" placeholder="Enter City" name="city" onChange={(event)=>dispatch({val:event.target.value, type:'city'})}/>
      <br />
      <input type="text" placeholder="Enter Pincode" name="pincode" onChange={(event)=>dispatch({val:event.target.value, type:'pincode'})}/>
      <br />

      {state.userName ? <h4>User Name :: {state.userName}</h4> : null }
      {state.age ? <h4>Age :: {state.age}</h4> : null }
      {state.email ? <h4>Email :: {state.email}</h4> : null }
      {state.city ? <h4>City :: {state.city}</h4> : null }
      {state.pincode ? <h4>Pincode :: {state.pincode}</h4> : null }
    </div>
  );
}
