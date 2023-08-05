import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const bestReview = data.filter(item => item.rating > 4.7)
                console.log(bestReview)
                setReview(bestReview)
            })
    }, [])

    return (
        <div>
            <SectionTitle subHeading={'testimonials'} heading={'what our clients have to say'} />
            <p className='text-center'>What our visitors say about us</p>
            <div className="divider"></div>
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    review.map(item => <TestimonialCard
                        key={item._id}
                        item={item}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;