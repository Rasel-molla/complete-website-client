
import React from 'react';
import './From.css';

const From = () => {
    return (

       <div className="from-s">
<h5  className="text-info"> Contact</h5>
<h1 className="text-warning">Always connect with us</h1>
<div className="form-controls ">
<form >
  <div class="mb-3 ">
    <br /> {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="add your email"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="name"/>
  </div>
 
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

  <button type="submit" class="btn btn-primary mt-2">Submit</button></form>
<br />
</div>

       </div>
    );
};

export default From;