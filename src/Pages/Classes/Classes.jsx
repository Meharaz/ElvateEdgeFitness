import React from 'react';

import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import ClassCard from '../Home/PopularClasses/ClassCard';
import useApprovedClasses from '../../Hooks/useApprovedClasses';

const Classes = () => {
   const [approvedClasses] = useApprovedClasses();
    return (
        <div className='pt-20'>
            <Helmet>
                <title>ElevateEdge | Sign In</title>
            </Helmet>
            <SectionTitle heading={'All Classes'} subHeading={"summer special"} />

            <div className='grid md:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    approvedClasses.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};


export default Classes;