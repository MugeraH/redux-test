import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.scss";

import Loader from "../loader/Loader";
import FilterUsers from "../FIlterUsers/FIlterUsers";

import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../actions/usersAction";

function Home() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="title">
        <h2>Users</h2>
        <FilterUsers />
      </div>
      <div className="user-container">
        {users.length ? (
          users.map((user, index) => {
            return (
              <div
                onClick={() => {
                  history.push(`user/${user.id}`);
                }}
                className="user-wrapper"
                key={index}
              >
                <div>
                  <h4>{user.name}</h4>
                  <h5 className="role">{user.occupation}</h5>
                  <p>{user.bio}</p>
                  <h5>{user.email}</h5>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Home;
