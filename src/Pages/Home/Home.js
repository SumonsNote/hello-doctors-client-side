import React from 'react';
import DentalPart from '../DentalPart';
import Services from '../Services';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalPart></DentalPart>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;