import React from 'react';

const AppoinmentsByDate = ({appointments}) => {

console.log(appointments);

    return (
        <div>
           
            {
                appointments.map(app => <li key={app._id }>{app.name} </li>)
            }
        </div>
    );
};

export default AppoinmentsByDate;