const initialState = {
	user: [],
};

const userDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER":
			return {
				...state,
				user: action.payload.user,
			};
		case "UPDATE_USER":
			return {
				...state,
				user: action.payload.user,
			};
		default:
			return { ...state };
	}
};

export default userDetailReducer;
