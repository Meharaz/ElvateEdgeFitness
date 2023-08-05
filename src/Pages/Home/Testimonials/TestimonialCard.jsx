import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const TestimonialCard = ({ item }) => {
    const { studentImage, studentName, review, rating, reviewDate } = item;
    return (
        <div >
            <div className='flex mb-2'>
                <img src={studentImage} className='w-24 rounded-full' />
                <div>
                    <p className='text-xl text-green-400 font-bold'>{studentName}</p>
                    <p>{reviewDate}</p>
                </div>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col text-center lg:flex-row">
                    <div>
                        <Rating
                            fullSymbol={<FaStar className='text-green-400' />}
                            emptySymbol={<FaStar />}
                            initialRating={rating}
                        />
                        <p className="py-6">{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;