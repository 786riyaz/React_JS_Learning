import { Routes, Route, Link, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./NewNavbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import Details from "./Details";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      

        <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        </Route>
        
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          {/* index will load the content of this route by default */}
          <Route path="departments" element={<Departments />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
