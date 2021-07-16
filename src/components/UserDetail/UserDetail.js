import React, { useEffect } from "react";
import Loader from "../loader/Loader";
import { useHistory } from "react-router-dom";
import "./UserDetail.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../actions/usersAction";

function UserDetail() {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    dispatch(loadUser(id));
  }, [dispatch]);
  return (
    <div class="container">
      {user ? (
        <div class="user-detail-container">
          <div class="user-detail-title">
            <h2 class="user-detail-title">User</h2>
            <button onClick={() => {
                 history.push(`updateUser/${user.id}`);
            }}>Update</button>
          </div>
          <h2 class="user-detail-username">{user.name}</h2>

          <span>Bio</span>
          <p class="bio">{user.bio}</p>
          <span>Occupation</span>
          <p class="occupation">{user.occupation}</p>
          <span>Email</span>
          <p class="email">{user.email}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default UserDetail;
