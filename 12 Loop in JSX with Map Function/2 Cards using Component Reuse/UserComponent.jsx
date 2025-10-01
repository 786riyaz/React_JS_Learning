function User({ userData }) {
  console.log(userData);
  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "20px",
        margin: "5px",
        padding: "5px",
        width: "400px",
      }}
    >
      <h3>
        Name : <span style={{ color: "green" }}>{userData.name}</span>
      </h3>

      <h3>
        Age : <span style={{ color: "yellow" }}>{userData.age}</span>
      </h3>

      <h3>
        Email : <span style={{ color: "orange" }}>{userData.email}</span>
      </h3>
    </div>
  );
}

export default User;
