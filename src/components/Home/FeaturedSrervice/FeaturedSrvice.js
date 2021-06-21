import React from 'react';
import featured from '../../../images/featuredd.png'
const FeaturedSrvice = () => {
    return (
     <section className="features-service pb-0 pb-md-5 my-5">
<div className="container mb-5">
    <div className="row mb-5">
        <div className="col-md-5 md-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
    </div>
<div className="col-md-7 align-self-center">
    <h1> Exceptional Dental Cere </h1>
<p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati optio ea animi quia non laborum delectus? Ullam, beatae ab. Placeat officia temporibus a?</p>
<button className="btn btn-primary">Learn More</button>
</div>

    </div>

</div>
     </section>
    );
};

export default FeaturedSrvice;