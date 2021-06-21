import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData =[
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
    {
        _id: '',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 9:00AM',
        totalSpace: 10
    },
]




const BookAppointment = ({date}) => {
    return (
      
      <section>
          
          <h2 className="text-center mb-5  text-brand">Available Appointments on! {date.toDateString() } </h2>
          <hr width="600px" /> 

          <div className="row">
{
    bookingData.map(booking => <BookingCard booking={booking} date={date} ></BookingCard>)
}
{/* key={booking.id} */}
          </div>
    </section>
    );
};

export default BookAppointment;