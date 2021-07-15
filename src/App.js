import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="user/:id">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
