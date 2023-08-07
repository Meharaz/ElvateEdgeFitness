import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate('');


    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };




    return (
        <div className='py-16'>
            <Helmet>
                <title>ElevateEdge | Sign Up</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} className="hero pt-10 min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <p className='text-3xl text-center font-extrabold '>Sign Up for Free!</p>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" {...register("email", { required: "Email Address is required" })}
                                    aria-invalid={errors.email ? "true" : "false"} name='email' className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email is required</span>}
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" {...register("photo", { required: true })} name='photo' className="input input-bordered" />
                                {errors.photo && <span className='text-red-400'>Photo is required</span>}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                    minLength: 6,
                                    maxLength: 20
                                })} name='password' className="input input-bordered" />
                                {
                                    errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>
                                }
                                {
                                    errors.password?.type === 'pattern' && <p className='text-red-400'>Password must have One Capital letter and one special character </p>
                                }
                                {
                                    errors.password?.type === 'minLength' && <p className='text-red-400'>Password must be 6 characters</p>
                                }
                                {
                                    errors.password?.type === 'maxLength' && <p className='text-red-400'>Password should not be exceed 20 characters</p>
                                }

                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" name='confirm' className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p>Already Have an Account?
                                    <Link to='/login'> <span className='text-lg font-bold text-yellow-400'>Sign in Here</span> </Link>
                                </p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default SignUp;