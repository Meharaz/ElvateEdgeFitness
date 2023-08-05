import React from 'react';

const InstructorCard = ({ item }) => {
    const { image, name, email, numClasses, classes } = item;
    return (
        <div className="hero min-h-fit  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className='w-28 rounded-full' />
                <div>
                    <h1 className="text-5xl font-bold text-green-400">{name}</h1>
                    <p className="py-6">{classes}</p>
                    <p className='text-orange-400 py-2 uppercase'><span className='text-white '>Email: </span>{email}</p>
                    <p className='text-orange-400 py-2'><span className='text-white uppercase'>courses taken: </span>{numClasses}</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;