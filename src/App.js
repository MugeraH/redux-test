import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserDetail from "./pages/UserDetail/UserDetail";
import UpdateUser from "./pages/updateUser/UpdateUser";

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
