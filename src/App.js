import logo from './logo.svg';
import './App.css';

import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';

export const UserContext= createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
 
    <div className="App">
  
     <Router>
<Switch>
  <Route exact path="/">
<Home></Home>
  </Route>
  <Route  path="/appointment">
<Appointment></Appointment>
  </Route>
  <Route  path="/addDoctor">
<AddDoctor></AddDoctor>
  </Route>
  < Route  path="/dashboard/appointment">
<Dashboard></Dashboard>
  </Route>
  <Route path="/login">
<Login></Login>        
  </Route>
  
</Switch>

</Router>
   



    </div>
    </UserContext.Provider>
  );
}

export default App;
