import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar">
      <Link class="logo" to="/">
        Users
      </Link>
      <div class="nav-links">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
