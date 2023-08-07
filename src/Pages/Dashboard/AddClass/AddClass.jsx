import React from 'react';

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const AddClass = () => {

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const instructor = form.instructor.value;
        const category = form.category.value;
        const duration = form.duration.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const fee = form.fee.value;
        const vacancy = form.vacancy.value;
        const description = form.description.value;

        const newClass = { name, instructor, category, duration, photo, email, fee, vacancy, description}
        console.log(newClass)
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'You have added a new Class!',
                    'success'
                )
            }
        })

    }

    return (
        <div className='w-full h-full px-4'>
            <SectionTitle subHeading={'your classes'} heading={'add classes'}/>
            <form onSubmit={handleAddClass}>
                <div className='grid grid-flow-col sm:grid-cols-2 gap-4'>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Class Name</span>
                                <input type="text" placeholder="Strength & Sculpt - Tone Your Muscles" required name='name' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Instructor</span>
                                <input type="text" placeholder="Mike Johnson" name='instructor' required className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Category</span>
                                <input type="text" placeholder="Summer Fitness" required name='category' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Duration</span>
                                <input type="text" placeholder="1 hour" name='duration' required className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Photo URL</span>
                                <input type="text" placeholder="https://i.ibb.co/xYpJdWw/download.jpg" required name='photo' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Email</span>
                                <input type="text" placeholder="nike@football.com" required name='email' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Course Fee</span>
                                <input type="text" placeholder="50$" name='fee' required className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical mb-5  ">
                                <span>Vacancy</span>
                                <input type="text" placeholder="5" name='vacancy' required className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-control  ">
                    <label className="input-group input-group-vertical mb-5  ">
                        <span>Description</span>
                        <input type="text" placeholder="HIIT Blast is an exhilarating and challenging workout that combines bursts of intense exercises with short periods of rest. This high-energy class is designed to burn maximum calories, improve cardiovascular fitness, and boost metabolism. Our expert trainers will lead you through a variety of bodyweight exercises, plyometrics, and strength training drills, ensuring a full-body workout that pushes you to your limits. Get ready to sweat, burn fat, and experience the benefits of HIIT training in a fun and supportive group setting." name='description' required className="input input-bordered" />
                    </label>
                </div>
                <input className='btn btn-outline btn-success w-full sm:btn-sm md:btn-md lg:btn-lg' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;