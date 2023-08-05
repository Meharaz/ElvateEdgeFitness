import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('PopularClass.json')
            .then(res => res.json())
            .then(data =>{
                const popularClass = data.filter(item => item.enrolledStudents > 18)
                // console.log(data)
                // console.log(popularClass)
                setClasses(popularClass)
            })
    }, [])


    return (
        <section>
            <SectionTitle subHeading={"join now"} heading={"popular Classes"} />
            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    classes.map(item=> <ClassCard
                    key={item._id}
                    item={item}
                    ></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;