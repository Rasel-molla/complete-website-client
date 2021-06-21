import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestData from '../TestData/TestData';



const TestimonialData =[
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque modi adipisicing elit. Earum doloremque modi dolorem deserunt dolorem deserunt.',
        name: 'Wilson',
        from:'Califonia',
        img: wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque modi adipisicing elit. Earum doloremque modi dolorem deserunt dolorem deserunt.',
        name: 'Wilson',
        from:'Califonia',
        img: ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque modi dolorem deserunt.adipisicing elit. Earum doloremque modi dolorem deserunt',
        name: 'Wilson',
        from:'Califonia',
        img: aliza
    },
]


const Testimonials = () => {
    return (
     <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-start ">
         
                  
                    <h5 className="text-primary"> TESTIMONIAL</h5>
                       </div>

     <h1 className="d-flex justify-content-start">What Our Patients </h1>
            
            <div className="card-deck mt-5">
 
            </div>
            </div>

            <div className="d-flex justify-content-evenly ">
            {

TestimonialData.map(testData => <TestData testData={testData}></TestData>)
} 
            </div>
     </section>
    );
};



export default Testimonials;