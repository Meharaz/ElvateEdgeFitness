import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://elevate-edge-fitness-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        {
                            navigate(from, { replace: true })
                        }
                    })


                // updateUserProfile(user.email, photo.photoURL)
            })
    }



    return (
        <div className='text-center flex justify-center gap-4'>
            <button className="btn btn-active btn-success" onClick={handleGoogleSignIn} ><FaGoogle /></button>
            <div className="divider divider-horizontal"></div>
            <button className="btn btn-active btn-success" ><FaGithub className='text-lg' /></button>
        </div>
    );
};

export default SocialLogin;