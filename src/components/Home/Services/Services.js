import React from 'react';
import fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Ṭeeth from '../../../images/Ṭeeth.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        name: 'fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling ',
        img: Cavity,
    },
    {
        name: ' Ṭeeth Whitening',
        img: Ṭeeth,
    }
];




const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className=" text-center">
                <h5 style={{ color: ' #1cc7c1' }}>OUR SERVICES </h5>
                <h2>Services We Provider </h2>

            </div>
            <div className="d-flex justify-content-center" >
                <div className="w-75 row mt-5 pr-5">
                    {

                        servicesData.map(services =>  <ServicesDetail services={services}> </ServicesDetail>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Services;