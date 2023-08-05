import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='text-center flex justify-center gap-4'>
            <button className="btn btn-active btn-success" ><FaGoogle/></button>
            <div className="divider">|</div>
            <button className="btn btn-active btn-success" ><FaGithub className='text-lg'/></button>
        </div>
    );
};

export default SocialLogin;