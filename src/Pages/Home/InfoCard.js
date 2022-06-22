import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className='my-10 px-12'>
            <div class={`card lg:card-side shadow-xl ${bgClass}`}>
                <figure>
                    <img className='w-10 mx-8 pt-5' src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-white">{cardTitle}</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;