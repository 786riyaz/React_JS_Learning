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
import UserList from "./UserList";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/list?" element={<UserList />} />
          {/* <Route path="/users/:id" element={<UserDetails/>}/> */}
          <Route path="/users/:id/:name?" element={<UserDetails/>}/>

          <Route path="en/user">
            <Route path="/en/user/about" element={<About />} />
            <Route path="/en/user/login" element={<Login />} />
          </Route>
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
