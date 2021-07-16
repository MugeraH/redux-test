import React from "react";
import "./Home.scss";

import FilterUsers from "../../components/FIlterUsers/FIlterUsers";
import UserContainer from "../../components/UserContainer/UserContainer";

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h2>Users</h2>
        <FilterUsers />
      </div>

      <UserContainer  />
    </div>
  );
}

export default Home;
