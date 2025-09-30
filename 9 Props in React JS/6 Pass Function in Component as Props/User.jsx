function User({ displayName, alertFunction, name }) {
  return (
    <div>
      <button onClick={() => displayName(name)}>Console</button>
      <button onClick={alertFunction}>Alert</button>
    </div>
  );
}

export default User;
