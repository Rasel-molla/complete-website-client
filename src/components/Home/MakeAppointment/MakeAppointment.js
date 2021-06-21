import React from 'react';
import doctore from '../../../images/doctore.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5  d-none d-md-block">
                        <img src={doctore} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5  z-index" >
                        <h1 className="text-primary md-6 text-uppercase">
                            Make an Appointment
                       </h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, unde reiciendis? Quaerat non fugit quod asperiores. Vero, quae!</p>
                        <button className="btn btn-primary md-30">Lorem More </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;