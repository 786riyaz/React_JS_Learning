import { Link, useParams } from "react-router";

export default function UserDetails() {
    const paramsData = useParams();
    console.log(paramsData);

  return (
    <div style={{margin:'10px'}}>
      <h1>User Details :: {paramsData.id}</h1>
      <h3><Link to="/users">Back</Link></h3>
    </div>
  );
}