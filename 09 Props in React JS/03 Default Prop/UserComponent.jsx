function User({name = "New User", age="NA"}) {
  console.log(name)
  return (
    <div>
      <hr />
      <h3>
        {name} --- {age}
      </h3>
     
    </div>
  );
}

export default User;