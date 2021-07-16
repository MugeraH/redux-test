import React, { useState, useEffect } from "react";
import "./UpdateUser.scss";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../actions/usersAction";

function UpdateUser() {
  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    occupation: "",
    bio: "",
  });
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    dispatch(loadUser(id));
  }, [dispatch, id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(updatedUser);
    // history.push(`/user/${user.id}`);
  };

  return (
    <div className="container">
      <div className="update-user-container">
        <h2>Update User</h2>

        <div className="form">
          <form onSubmit={handleSubmitForm}>
            <div className="form-control">
              <label>Username</label>
              <input
                defaultValue={user.name}
                id="username"
                name="username"
                onChange={inputHandler}
                type="text"
                required
              />
            </div>
            <div className="form-control">
              <label>Occupation</label>
              <input
                defaultValue={user.occupation}
                id="occupation"
                name="occupation"
                onChange={inputHandler}
                type="text"
                required
              />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                defaultValue={user.email}
                id="email"
                name="email"
                onChange={inputHandler}
                type="email"
                required
              />
            </div>
            <div className="form-control">
              <label>Bio</label>
              <textarea
                defaultValue={user.bio}
                id="Bio"
                name="Bio"
                onChange={inputHandler}
                required
              ></textarea>
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;