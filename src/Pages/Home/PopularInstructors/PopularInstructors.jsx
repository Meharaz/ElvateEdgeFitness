import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';
import useInstructors from '../../../Hooks/useInstructors';

const PopularInstructors = () => {
const [instructor] = useInstructors();
const popularInstructor = instructor.filter(item => item.numClasses > 3)
    return (
        <section>
            <SectionTitle subHeading={'meet our'} heading={'popular instructors'}/>
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    popularInstructor.map(item=> <InstructorCard
                    key={item._id}
                    item={item}
                    ></InstructorCard>)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;