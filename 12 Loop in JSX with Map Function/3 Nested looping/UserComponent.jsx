function User({ data }) {
  if (data) {
    console.log("Data Received :: ", data);
    console.log("Received Name :: ", data.Name);
    console.log("Received Age :: ", data.Age);
    console.log("Received Email :: ", data.Email);
    console.log("Received Technology :: ", data.Technology);

    return (
      <div>
        <h3>
          {data.Name} --- {data.Age} --- {data.Email}
        </h3>
        <h3>
          {/* <Technology data={data.Technology} /> */}
          <ul>
            {data.Technology.map((name) => (
              <li>{name} </li>
            ))}
          </ul>
        </h3>
      </div>
    );
  }
}

export default User;
