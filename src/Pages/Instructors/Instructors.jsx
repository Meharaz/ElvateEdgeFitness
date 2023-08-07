import React  from 'react';
import useInstructors from '../../Hooks/useInstructors';
import InstructorCard from '../Home/PopularInstructors/InstructorCard';

const Instructors = () => {
    const [instructor] = useInstructors();

    return (
        <div className='grid md:grid-cols-3 gap-4 mx-4 pt-20'>
            {
                instructor.map(item => <InstructorCard
                    key={item._id}
                    item={item}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;