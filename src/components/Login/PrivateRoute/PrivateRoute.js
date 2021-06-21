  
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import jwt_decode from "jwt-decode";
const PrivateRoute = ({ children,...rest}) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
  

    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/addDoctor",
                state: { from: location }
              }}
            />
          )
        }
      />
   
    );
};

export default PrivateRoute;