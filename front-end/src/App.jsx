import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <span>
        <Link to="/">Home</Link>
      </span>{" "}
      <span>
        <Link to="/user">User</Link>
      </span>
      <Outlet></Outlet>
    </>
  );
}

export default App;
