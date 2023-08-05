import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('Instructor.json')
            .then(res => res.json())
            .then(data =>{
                const popularInstructor = data.filter(item => item.numClasses > 3)
                // console.log(data)
                // console.log(popularInstructor)
                setInstructor(popularInstructor)
            })
    }, [])
    return (
        <section>
            <SectionTitle subHeading={'meet our'} heading={'popular instructors'}/>
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    instructor.map(item=> <InstructorCard
                    key={item._id}
                    item={item}
                    ></InstructorCard>)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;