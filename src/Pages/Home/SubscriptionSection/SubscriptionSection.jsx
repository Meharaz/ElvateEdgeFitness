import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { Link } from 'react-router-dom';

const SubscriptionSection = () => {
    return (
        <section className='pt-1 text-center'>
            <SectionTitle subHeading={'subscription'} heading={'join the club'} />
            <div className="divider"></div>
            <p className='text-center'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, veniam! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, impedit!</p>
            <div>
                <Link to='/prices' >
                    <button className="btn btn-outline btn-warning my-2 mt-4 uppercase rounded-2xl">Become a member</button>
                </Link>
            </div>
            <div className="divider"></div>


        </section>
    );
};

export default SubscriptionSection;