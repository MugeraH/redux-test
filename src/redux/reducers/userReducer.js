const initialState = {
	users: [],
	user: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERS":
			return {
				...state,
				users: action.payload.users,
			};
		case "FILTER_USERS":
			return {
				...state,
				users: action.payload.users,
			};

		default:
			return { ...state };
	}
};

export default userReducer;
