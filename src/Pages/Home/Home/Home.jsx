import React from 'react';
import Banner from '../Banner/Banner';
import Hit from '../PopularClasses/Hit';
import { Helmet } from 'react-helmet-async';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import SubscriptionSection from '../SubscriptionSection/SubscriptionSection';
import Testimonials from '../Testimonials/Testimonials';
// import Instagram from '../Instagram/Instagram';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ElevateEdge | Home</title>
            </Helmet>
            <Banner />
            <Hit />
            <PopularClasses />
            <PopularInstructors />
            <SubscriptionSection />
            <Testimonials/>
            {/* <Instagram/> */}
        </div>
    );
};

export default Home;