import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
const AppointmentFrom = ({modalIsOpen ,date,closeModal ,appointmentOn}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
   
   
    const onSubmit = data =>{
data.service= appointmentOn;
data.date = date ;
data.created = new Date();

fetch('http://localhost:5000/addAppointment', {

method:'POST',
headers: { 'content-type' : 'application/json'},
body: JSON.stringify(data)



})
.then(res => res.json())
.then(success => {
  if(success){
    closeModal();
    alert('Appointment SuccessFully.');

  }
})

    } 
    // let subtitle;
   
    return (
        <div className="row">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center">{appointmentOn}</h2>
       
     <p className="text-secondary text-center">On {date.toDateString()}</p>


        <form className="p-5  " onSubmit={handleSubmit(onSubmit)}>
            <div className="from-group m-2 row"><br />
            <input placeholder="Your name " {...register("exampleRequired",  { required: true })} />
            {errors.exampleRequired && <span className="text-danger">This field </span>}
        
            </div>
            <div className="from-group  m-2 row">
            <input placeholder="Your Email" {...register("exampleRequired",  { required: true })} />
            {errors.exampleRequired && <span className="text-danger">This field </span>}

            </div>
            <div className="from-group  m-2 row">
            <input placeholder="Phone Number" {...register("exampleRequired",  { required: true })} />
            {errors.exampleRequired && <span className="text-danger">This field </span>}
            </div>
    <div className="from-group m-2 d-flex ">
            <input defaultValue="test" {...register("example")} />
      <input placeholder="Your Age"  {...register("exampleRequired", { required: true })} />
      <input  placeholder="Weight"  {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span className="text-danger">This field </span>}


            </div>
    
    
      <input className="btn btn-primary " type="submit" />
    </form>
      </Modal>
        </div>
    );
};

export default AppointmentFrom;