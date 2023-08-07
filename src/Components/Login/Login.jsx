import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn, } = useContext(AuthContext);
    const navigate = useNavigate('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .then(err => console.log(err) )
    }


    return (
        <div>
            <Helmet>
                <title>ElevateEdge | Sign In</title>
            </Helmet>
            <form onSubmit={handleLogin}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <p className='text-3xl text-center font-extrabold '>Welcome Back!</p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div>
                                    <p>New to ElevateEdge?
                                        <Link to='/signUp'> <span className='text-lg font-bold text-yellow-400'>Register Here</span> </Link>
                                    </p>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;