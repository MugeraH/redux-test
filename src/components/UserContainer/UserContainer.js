import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UserContainer.scss";


import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../actions/usersAction";

import Loader from "../../components/loader/Loader";



function UserContainer() {
      const { users } = useSelector((state) => state.users);
      const dispatch = useDispatch();
      const history = useHistory();

      useEffect(() => {
        dispatch(loadUsers());
      }, [dispatch]);
    return (
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
    );
}

export default UserContainer

