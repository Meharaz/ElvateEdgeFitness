import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';
import useClasses from '../../../Hooks/useClasses';

const PopularClasses = () => {
    const [classes, refetch] = useClasses();
    const popular = classes && classes.filter(item => item.enrolledStudents >= 18)


    return (
        <section>
            <SectionTitle subHeading={"join now"} heading={"popular Classes"} />
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {popular &&
                    popular.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;