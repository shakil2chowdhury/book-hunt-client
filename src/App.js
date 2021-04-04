import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ManageBooks from './components/ManageBooks/ManageBooks';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/manageBooks">
            <ManageBooks />
          </PrivateRoute>
          <PrivateRoute path="/addBooks">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:bookId">
              <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
