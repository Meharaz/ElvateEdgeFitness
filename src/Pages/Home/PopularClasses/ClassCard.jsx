import React from 'react';

const ClassCard = ({ item }) => {
    const { category, name, description, enrolledStudents, instructor, duration, fee } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-green-400 shadow-md">
            <div className="card-body">
                <h2 className="card-title text-green-400 text-center">{name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end my-2">
                    <div >
                        <div className="badge badge-outline">{enrolledStudents} Students</div>
                        <div className="badge badge-outline mx-2">Instructor: {instructor}</div>
                        <div className="badge badge-outline "> {duration}</div>
                    </div>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">${fee} </span>
                        <button className="btn btn-sm btn-outline btn-warning">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;