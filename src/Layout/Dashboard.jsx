import React from 'react';

import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaChalkboardTeacher, FaHome, FaPlusSquare, FaRegCreditCard, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import { RiAdminLine } from "react-icons/ri";
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [cart,] = useCart();
 
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    return (
        <>
            <Helmet>
                <title>ElevateEdge | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open  ">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-success btn-sm shadow-2xl drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/admin'>
                                        <RiAdminLine /> Admin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/myProfile'>
                                        <FaUser /> My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUsers /> All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/classes'>
                                        <FaChalkboardTeacher /> Manage Classes
                                    </NavLink>
                                </li>
                            </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/myProfile'>
                                            <FaUser /> My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myCart'>
                                            <FaShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>
                                            <FaRegCreditCard /> Payment History
                                        </NavLink>
                                    </li>



                                    <li>
                                        <NavLink to='/dashboard/addClass'>
                                            <FaPlusSquare /> Add Class
                                        </NavLink>
                                    </li>

                                </>
                        }










                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/Classes'><FaBook /> Classes</NavLink></li>
                        <li><NavLink to='/Instructors'><FaChalkboardTeacher /> Instructors</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;