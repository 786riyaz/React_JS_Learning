import { Suspense, use } from "react";

const fetchData = () => fetch('https://dummyjson.com/users').then((response)=>response.json());

const userResource = fetchData();

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understanding use API </h1>
      <Suspense fallback={"Loading...."}>
        <Users userResource={userResource}/>
      </Suspense>
    </div>
  );
}

const Users = ({userResource}) => {
  const userData = use( userResource);
  console.log(userData.users)
  return (
    <>
      <h1>User List</h1>
      {
        userData.users.map((user, index)=>(
          <h3 key={index}>{user.firstName}</h3>
        ))
      }
    </>
  );
};