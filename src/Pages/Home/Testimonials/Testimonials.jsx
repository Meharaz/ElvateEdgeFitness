import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import TestimonialCard from './TestimonialCard';
import useReview from '../../../Hooks/useReview';


const Testimonials = () => {
    
    const [review, loading] = useReview();
    const bestReview = review.filter(item => item.rating > 4.7)
    // useEffect(() => {
    //     fetch('Review.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const bestReview = data.filter(item => item.rating > 4.7)
    //             console.log(bestReview)
    //             setReview(bestReview)
    //         })
    // }, [])

    return (
        <div>
            <SectionTitle subHeading={'testimonials'} heading={'what our clients have to say'} />
            <p className='text-center'>What our visitors say about us</p>
            <div className="divider"></div>
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    bestReview.map(item => <TestimonialCard
                        key={item._id}
                        item={item}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;