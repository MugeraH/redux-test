import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UserDetail from "./components/UserDetail/UserDetail";
import UpdateUser from "./components/updateUser/UpdateUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/updateUser/:id">
            <UpdateUser />
          </Route>
          <Route path="/user/:id">
            <UserDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
