import React from 'react';
// import useUsers from '../../../Hooks/useUsers';
import { Helmet } from 'react-helmet-async';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Users = () => {
    // const [users, loading] = useUsers();
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`https://elevate-edge-fitness-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    Swal.fire({

                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`https://elevate-edge-fitness-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='text-white font-bold w-full px-5'>
            <Helmet>
                <title>ElevateEdge | All users</title>
            </Helmet>
            <SectionTitle subHeading={'Manage users'} heading={'All users'} />
            <h3 className="text-3xl font-semibold my-4">
                Total Users: {users.length}
            </h3>
            <div className="overflow-x-auto">
                <table className="table w-full bg-slate-700">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user, index) => (
                                <tr key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? (
                                            'admin'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-ghost bg-orange-600 text-white"
                                            >
                                                <FaUserShield />
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'instructor' ? (
                                                'instructor'
                                            ) : (
                                                <button
                                                    onClick={() => handleMakeInstructor(user)}
                                                    className="btn btn-ghost bg-red-600 text-white"
                                                >
                                                    <FaChalkboardTeacher />
                                                </button>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
