import React from 'react';
import chirbg from '../../../images/hb.jpg';
import './Headermine.css';
const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center">

<div className="col-md-4 offset-md-1">

<h1 style={{color:'#3a4256'}} id="div1"> HEALTH CARE </h1>
<h1 id="div2">  For Hole Family </h1>
<p className="text-secondary"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptates amet recusandae rerum tenetur ullam.</p>


<button className="btn btn-primary "> Check Our Service</button>

</div>


    
<div className="col-md-6   ">

<img src={chirbg} alt="" className="img-fluid rounded-pill  " />
</div>


       </main>
    );
};

export default HeaderMain;