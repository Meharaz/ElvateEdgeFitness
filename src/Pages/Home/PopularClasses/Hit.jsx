import React from 'react';

import { FaArrowRight } from "react-icons/fa";

const Hit = () => {
    return (
        <div className='my-8'>

            <div className='flex justify-center gap-4'>
                <div className="card w-96 bg-base-100  text-center shadow-sky-400 shadow-sm">
                    <div className="card-body items-center">
                        <h2 className="card-title text-3xl font-extrabold text-red-400">HIIT Blast</h2>
                        <h2 className="card-title text-orange-400"> High-Intensity Interval Training </h2>
                        <p> Get ready to torch calories with our intense and effective HIIT workouts. Join now and experience the ultimate fat-burning challenge!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-2">Learn More <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  text-center shadow-sky-400 shadow-sm">
                    <div className="card-body items-center">
                        <h2 className="card-title text-3xl font-extrabold text-red-400">Yoga Zen</h2>
                        <h2 className="card-title text-orange-400"> Find Inner Peace </h2>
                        <p> Rejuvenate your mind and body with our Yoga Zen classes. Improve flexibility, reduce stress, and discover tranquility. Enroll today!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-2">Learn More <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  text-center shadow-sky-400 shadow-sm">
                    <div className="card-body items-center">
                        <h2 className="card-title text-3xl font-extrabold text-red-400">Strength & Sculpt</h2>
                        <h2 className="card-title text-orange-400">  Tone Your Muscles </h2>
                        <p> Build strength and sculpt your body with our Strength & Sculpt classes. Our trainers will guide you to achieve your fitness goals.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-2">Learn More <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hit;