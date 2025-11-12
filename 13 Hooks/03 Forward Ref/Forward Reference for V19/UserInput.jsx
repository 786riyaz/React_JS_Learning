const UserInput = (props) => {
  return (
    <div>
      <input ref={props.ref} type="text" placeholder="Enter Your User Name" />
      <br />
    </div>
  );
};

export default UserInput;