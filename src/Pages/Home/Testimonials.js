import React from 'react';
import quote from '../../assets/icons/quote.svg'
import winson0 from '../../assets/images/people1.png'
import winson1 from '../../assets/images/people2.png'
import winson2 from '../../assets/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: winson0
        },
        {
            _id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: winson1
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: winson2
        }
    ]
    return (
        <section className='px-12  my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl text-primary'>Testimonials</h2>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
                {
                    reviews.map(review =>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <p>{review.review}</p>
                                <div className='flex items-center my-2'>
                                    <div>
                                        <img className='mr-2' src={review.img} alt="" />
                                    </div>
                                    <div>
                                        <h2 class="card-title">{review.name}</h2>
                                        <h2>{review.location}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonials;