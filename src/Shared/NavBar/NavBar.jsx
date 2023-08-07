import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdClass } from "react-icons/md";
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
    // const {logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/instructors">Instructors</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>

        {
            user ?
                <>

                    <li>

                        <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                    </li>
                </>
                :
                <>
                    <li>
                        <NavLink to="/Login">Login</NavLink>
                    </li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar uppercase fixed z-10 bg-opacity-30  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <span className='font-extrabold  animate-text bg-gradient-to-r from-[#538FFB] via-[#DB0B5F]  to-blue-700 bg-clip-text text-transparent'>ElevateEdge <br /> <span>Fitness</span></span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <NavLink to='/dashboard/myProfile'>
                        {
                            user ? <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                                <img src={user.photoURL} alt="" className='w-16 h-16 rounded-full' />
                            </div> : ''
                        }
                    </NavLink>
                    {
                        !isAdmin && user ? <li>
                            <NavLink to='/dashboard/mycart'>
                                <button className="btn">
                                    <MdClass />
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </button>
                            </NavLink>
                        </li> :
                            ''
                    }
                    <a className="btn btn-outline btn-warning">Buy Membership</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;