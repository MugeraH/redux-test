import React, { useEffect } from "react";
import "./Home.scss";

import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../actions/usersAction";

function Home() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    console.log(users.length);
  }, [dispatch]);
  return <div className="container"></div>;
}

export default Home;
