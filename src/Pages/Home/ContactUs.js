import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton';

const ContactUs = () => {
    return (
        <div className='my-10' style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center py-14'>
                <h2 className='text-primary text-2xl'>Contact Us</h2>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center px-96'>
                <input type="text" placeholder="Email" class="input input-bordered w-96" /><br />
                <input type="text" placeholder="Name" class="input input-bordered my-3 w-96" /><br />
                <textarea class="textarea textarea-bordered w-96" placeholder="Message"></textarea>
                <div className='py-5'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;