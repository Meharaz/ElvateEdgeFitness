import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    }



    return (
        <div className='py-16'>

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
                                <input type="email" placeholder="Email" {...register("email",  { required: true })} name='email' className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email is required</span>}
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" {...register("photo",  { required: true })} name='photo' className="input input-bordered" />
                                {errors.photo && <span className='text-red-400'>Photo is required</span>}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password",  { required: true })} name='password' className="input input-bordered" />
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