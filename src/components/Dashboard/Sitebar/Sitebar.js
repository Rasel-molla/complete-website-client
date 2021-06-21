import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




const Sitebar = () => {
    const [loggedInUser ,setLoggedInUser] = useContext (UserContext);
  const [isDoctor,setIsDoctor] = useState(false);
  
 useEffect (()=> {
fetch('http://localhost:5000/isDoctor',{
    method:'POST',
   headers: { 'content-type' : 'application/json'},
   body:JSON.stringify({email: loggedInUser.email})
})
.then(res => res.json())
.then(data =>setIsDoctor(data) )
 },)

    return (
        <div class="p-3 mb-2 ">
        
               <h3>site bar</h3>
            
          {    <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
         
            background: "#f0f0f0"
          }}
        >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
              <Link to="/#">dashboard</Link>
            </li>
            <li>
              <Link to="/adddoctor">Add Post</Link>
            </li>
            <li>
              <Link to="/RemovePost">Remove Post</Link>
            </li>
          </ul>
           </div>
           </div>}
        </div>
       
    );
};

export default Sitebar;