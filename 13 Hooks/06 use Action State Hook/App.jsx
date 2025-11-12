import { useActionState } from "react";

function App() {
  const handleSubmit = async (prevData, formData) => {
    console.log("Inside Handle Submit Function --- Submitting Data");
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    console.log(name, password);

    if(name && password){
      return {message:"Data Submitted", name, password}
    } else {
      return {error:"Fail to Submit. Missing Details", name, password}
    }
  };
  
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>Understanding useActionState Hook </h1>

      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" defaultValue={data?.name}/>
        <br />
        <br />
        <input type="password" placeholder="Enter Password" name="password" defaultValue={data?.password}/>
        <br />
        <br />
        <button disabled={pending}>Submit Data</button> 
      </form>
        { data?.error && <span style={{color:'red'}}>{data?.error}</span> }
        { data?.message && <span style={{color:'green'}}>{data?.message}</span> }
        <br />
        <h3> Name : {data?.name}</h3>
        <h3> Password : {data?.password}</h3>
    </div>
  );
}

export default App;