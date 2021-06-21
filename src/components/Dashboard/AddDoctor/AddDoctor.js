import React from 'react';
import { useState } from 'react';

const AddDoctor = () => {
const [info,setInfo ] = useState ({});
const [file,setFile ] = useState (null);

const handleBlur = e => {
    const newInfo = {...info};
    
    newInfo[e.target.name] = e.target.value;

    setInfo(newInfo);
}
const handleFileChang =(e)=>{
    const newFile = e.target.files[0];
    setFile(newFile);
}
const handleSubmit =() =>{

    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);

    fetch('http://localhost:5000/addDoctor', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    }) 

}


    return (
       <section className="container-fluid row">

<div className="col-md-10 p-4 mr-5 " >
<h5 className= "text-brand">Add A Doctor </h5>



<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleBlur} type="email" class="form-control" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">name</label>
    <input  onBlur={handleBlur}  type="text" class="form-control"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Chose A Picture </label>
    <input onChange={handleFileChang} type="file" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>

       </section>
    );
};

export default AddDoctor;