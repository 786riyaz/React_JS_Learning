import UserProfile from "./UserProfile";

function App() {
  const userData = [
    { Name: "Riyaz", Age: 25 },
    { Name: "Arbaz", Age: 24 },
    { Name: "Femida", Age: 25 },
    { Name: "Tasin", Age: 19 },
    { Name: "ABC", Age: 20 },
    { Name: "PQR", Age: 25 },
    { Name: "XYZ", Age: 30 },
  ];

  return (
    <div>
      <h1 className="heading">Understanding inline CSS</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {userData.map((user) => (
      <UserProfile key={user.Name} user={user}/>
        ))}
      </div>
    </div>
  );
}
export default App;
