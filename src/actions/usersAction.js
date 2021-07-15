import axios from "axios";

let base_url = "https://ti-react-test.herokuapp.com/users";

export const loadUsers = () => async (dispatch) => {
  const usersData = await axios.get(base_url);

  dispatch({
    type: "GET_USERS",
    payload: {
      users: usersData.data,
    },
  });
};
