import React from "react";
import "./FilterUsers.scss";

import { useSelector, useDispatch } from "react-redux";
import { loadUser, updateUser } from "../../actions/usersAction";

function FilterUsers() {
  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <span>Filter</span>
      <select onChange={handleOnChange}>
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default FilterUsers;
