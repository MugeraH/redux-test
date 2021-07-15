import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        Users
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
