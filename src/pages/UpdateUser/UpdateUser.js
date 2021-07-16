import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./UpdateUser.scss";

import { useSelector, useDispatch } from "react-redux";
import { loadUser, updateUser } from "../../redux/actions/userDetailAction";

function UpdateUser() {
	const { user } = useSelector((state) => state.user);
	const [updatedUser, setUpdatedUser] = useState();

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
			id: user.id,
			[name]: value,
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		if (updatedUser) {
			dispatch(updateUser(updatedUser));
			history.push(`/user/${user.id}`);
		} else {
			history.push(`/user/${user.id}`);
		}
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
								name="name"
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
								id="bio"
								name="bio"
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
