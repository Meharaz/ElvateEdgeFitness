import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes] = useClasses();
    console.log(classes)

    const handleApprove = item => {
        fetch(`http://localhost:5000/classes/approved/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} is an Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = item => {
        fetch(`http://localhost:5000/classes/${item._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} is an removed!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='w-full px-1'>
            <Helmet>
                <title>ElevateEdge | All Classes</title>
            </Helmet>
            <SectionTitle subHeading={'all classes'} heading={'manage classes'} />
            <table className="table w-full bg-slate-700">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {classes &&
                        classes.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <th>{item.instructor}</th>
                                <th>{item.category}</th>
                                <th>
                                    {
                                        item.status === 'approved' ? (
                                            'Approved'
                                        ) : (
                                            <>
                                            <button className='btn' 
                                            onClick={() => handleApprove(item)}
                                            >
                                                approve
                                            </button>
                                            <button className="btn btn-sm btn-circle ms-2 me-0"
                                            onClick={()=> handleDelete(item)}
                                            >
                                                x
                                            </button>
                                        </>
                                        )
                                    }
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;