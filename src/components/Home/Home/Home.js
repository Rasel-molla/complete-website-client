import React from 'react';
import Blog from '../Blog/Blog';
import From from '../From/From';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../../Appointment/Appointment/Appointment';

const Home = () => {
    return (
        <div>
        
      <Header></Header>
      <Services></Services>
  <Appointment></Appointment>
<Testimonials></Testimonials>
<Blog></Blog>
<From></From>
<Footer></Footer>



        </div>
    );
};

export default Home;