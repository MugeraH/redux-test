import axios from "axios";
import { GET_USER, UPDATE_USER } from "./actionType";

let base_url = "https://ti-react-test.herokuapp.com/users";

export const loadUser = (id) => async (dispatch) => {
	const userData = await axios.get(`${base_url}/${id}`);
	dispatch({
		type: GET_USER,
		payload: {
			user: userData.data,
		},
	});
};

export const updateUser = (user) => async (dispatch) => {
	let userData = await axios.patch(`${base_url}/${user.id}`, user);
	dispatch({
		type: UPDATE_USER,
		payload: {
			user: userData.data,
		},
	});
};
