import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton';

const Appointment = () => {
    return (
        <section className='flex justify-center items-center my-5' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block p-3'>
                <img className='mt-[-100px]' src={doctor} alt=""/>
            </div>
            <div className='flex-1'>
                <h2 className='text-primary text-3xl font-bold py-5'>Appointment</h2>
                <h2 className='text-4xl text-white py-3'>Make an appointment Today</h2>
                <p className='text-white text-xl my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;