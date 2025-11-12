import Technology from "./Technology";

function User({data}) {
  if(data){

    console.log("Data Received :: ", data);
    console.log("Received Name :: ", data.Name);
    console.log("Received Age :: ", data.Age);
    console.log("Received Email :: ", data.Email);
    console.log("Received Technology :: ", data.Technology);
    
    return (
      <div>
      <hr />
      <h3>{data.Name} --- {data.Age} --- {data.Email}</h3>
      <h3><Technology data={data.Technology}/></h3>
      <button>Delete Record</button>
    </div>
  );
}
}
export default User;