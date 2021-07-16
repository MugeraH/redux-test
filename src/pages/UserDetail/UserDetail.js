import React, { useEffect } from "react";
import Loader from "../../components/loader/Loader";
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
  }, [dispatch, id]);
  return (
    <div className="container">
      {user.name ? (
        <div className="user-detail-container">
          <div className="user-detail-title">
            <h2 className="user-detail-title">User</h2>
            <button
              onClick={() => {
                history.push(`/updateUser/${user.id}`);
              }}
            >
              Update
            </button>
          </div>
          <h2 className="user-detail-username">{user.name}</h2>

          <span>Bio</span>
          <p className="bio">{user.bio}</p>
          <span>Occupation</span>
          <p className="occupation">{user.occupation}</p>
          <span>Email</span>
          <p className="email">{user.email}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default UserDetail;
