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

export const filterUsers = (count) => async (dispatch) => {
  let allUsersData = await axios.get(base_url);
  let usersData = allUsersData.slice(0, count);

  dispatch({
    type: "FILTER_USERS",
    payload: {
      users: usersData.data,
    },
  });
};

export const loadUser = (id) => async (dispatch) => {
  const userData = await axios.get(`${base_url}/${id}`);

  dispatch({
    type: "GET_USER",
    payload: {
      user: userData.data,
    },
  });
};

export const updateUser = (user) => async (dispatch) => {
  let userData = [];
  await axios
    .patch(`${base_url}/${user.id}`, user)
    .then((response) => (userData = response));

  // const userData = await axios.get(`${base_url}/${user.id}`);

  dispatch({
    type: "UPDATE_USER",
    payload: {
      user: userData.data,
    },
  });
};
