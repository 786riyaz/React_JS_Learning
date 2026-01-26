import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject() {
    const subject = useContext(SubjectContext);
  return (
    <div style={{background:'blue', padding:'10px'}}>
      <h1 style={{color:'white'}}>Subject :: {subject}</h1>
    </div>
  );
}