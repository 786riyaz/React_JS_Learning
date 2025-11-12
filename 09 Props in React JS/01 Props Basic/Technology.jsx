function Technology({data}) {
  console.log(data[5])
  return (
    <div>
      <span>{data[0]}</span>{data[1]!=undefined?", ":null} 
      <span>{data[1]}</span>{data[2]!=undefined?", ":null} 
      <span>{data[2]}</span>{data[3]?", ":null} 
      <span>{data[3]}</span>{data[4]?", ":null} 
      <span>{data[4]}</span>{data[5]?", ":null} 
      <span>{data[5]}</span>

      {/* <h3>{data.join(",")}</h3> */}
    </div>
  );
}

export default Technology;