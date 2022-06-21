import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card lg-max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl w-20" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                </div>
            </div>
        </div>
    );
};

export default Service;