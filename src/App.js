import React, { createContext, useState } from "react";
import Home from "./components/Home/Home";
import AddAdmin from "./components/AddAdmin/AddAdmin"
import PeopleData from "./components/People/PeopleData";
import Contact from "./components/Contact/Contact"

import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import DashBoard from "./components/DashBoard/DashBoard";
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser,setLoggedInUser] =useState({})
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/peopleData">
            <PeopleData />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
