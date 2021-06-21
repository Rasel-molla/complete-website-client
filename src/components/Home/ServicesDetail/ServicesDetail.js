import React from 'react';

const ServicesDetail = ({services} ,{doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={services.img} alt="" />
            {/* <img style={{height:'50px'}} src={`http://localhost:5000/${doctor.img}`} alt="" /> */}
            {/* <h5 className="mt-3 md-3">{doctor.name}</h5> */}

         <h5 className="mt-3 md-3">{services.name}</h5>
         <p className="tex-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellendus.</p>
        </div>
    );
};

export default ServicesDetail;