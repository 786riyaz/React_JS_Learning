import { Link } from "react-router";

export default function UserList() {
  let userData = [
    { id: 1, name: "RiyazKhan" },
    { id: 2, name: "Arbaz" },
    { id: 3, name: "Tasin" },
    { id: 4, name: "Femida" },
    { id: 5, name: "Test" },
  ];
  return (
    <div style={{ margin: "10px" }}>
      <h1>User Data</h1>
      {userData.map((user) => (
        <h4>
          <Link key={user.id} to={"/users/" + user.id}>{user.name}</Link>
        </h4>
      ))}
       <h1>User Data With Name in URL</h1>
      {userData.map((user) => (
        <h4>
          <Link key={user.id} to={"/users/" + user.id + "/" + user.name}>{user.name}</Link>
        </h4>
      ))}
    </div>
  );
}
