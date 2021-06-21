import React, { useState } from 'react';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
import Sitebar from '../Sitebar/Sitebar';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const containerStyle ={
    backgroundColor:"#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [selectedDate,setSelectedDate ] = useState (new Date());
   const [appointments,setAppointments] = useState([]);

   
    const handleDateChange = date => {
        setSelectedDate(date);

    }
useEffect (() =>{

    fetch('http://localhost:5000/addAppointmentsByDate',{
        method:'POST',
        headers:{ 'content-type' : 'application/json'},
        body: JSON.stringify(  {date: selectedDate ,email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
    
    

},[selectedDate])



    return (
        <section>
            <div style={containerStyle} className="container-fluid row ">

                <div className="col-md-2">
                    <Sitebar></Sitebar>
                </div>
                <div className="col-md-3">
        
                </div>
                <div className="col-md-5">
                    <AppoinmentsByDate appointments={appointments}></AppoinmentsByDate>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;