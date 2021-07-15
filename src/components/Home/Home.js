import React, { useEffect } from "react";
import "./Home.scss";

import Loader from "../loader/Loader";

import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../actions/usersAction";

function Home() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    console.log(users.length);
  }, [dispatch]);
  return (
    <div className="container">
      <div className="title">
        <h2>Users</h2>
      </div>

      {users ? (
        users.map((user, index) => {
          return (
            <div key={index}>
              <div className="user-container">{user.name}</div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
