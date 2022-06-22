import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton';

const ContactUs = () => {
    return (
        <div className='my-10 px-10' style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center py-14'>
                <h2 className='text-primary text-2xl'>Contact Us</h2>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <div className='mb-5'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;