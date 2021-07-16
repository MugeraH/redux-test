import axios from "axios";
import { GET_USERS, FILTER_USERS } from "./actionType";

let base_url = "https://ti-react-test.herokuapp.com/users";

export const loadUsers = () => async (dispatch) => {
	const usersData = await axios.get(base_url);
	dispatch({
		type: GET_USERS,
		payload: {
			users: usersData.data,
		},
	});
};

export const filterUsers = (count) => async (dispatch) => {
	let usersData = await axios.get(base_url);
	dispatch({
		type: FILTER_USERS,
		payload: {
			users: usersData.data.slice(0, count),
		},
	});
};
