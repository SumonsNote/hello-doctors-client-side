import React from 'react';
import DentalPart from '../DentalPart';
import Services from '../Services';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalPart></DentalPart>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;