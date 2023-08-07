import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from '../Components/Login/Login';
import SignUp from '../Components/Login/SignUp'
import Blog from '../Pages/Blog/Blog';
import PrivateRoutes from './PrivateRoutes';
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';

import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import PaymentHistory from '../Pages/Dashboard/Payment/PaymentHistory';
import MyProfile from '../Pages/Dashboard/MyProfile/MyProfile';
import Users from '../Pages/Dashboard/Users/Users';
import ManageClasses from '../Pages/Dashboard/ManageClasses/ManageClasses';
import AddClass from '../Pages/Dashboard/AddClass/AddClass';
import Admin from '../Pages/Dashboard/Admin/Admin';
import Error from '../Components/Error.jsx/Error';
import AdminRoute from './AdminRoutes';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'blog',
        element: <PrivateRoutes><Blog /></PrivateRoutes>
      },
      {
        path: 'classes',
        element: <Classes />
      },
      {
        path: 'instructors',
        element: <Instructors />
      },
      // {
      //   path: '/instructors/:id',
      //   element: (
      //     <PrivateRoutes>
      //       <InstructorInfo/>
      //     </PrivateRoutes>
      //   ),
      //   loader: ({params}) => fetch(`https://elevate-edge-fitness-server.vercel.app/instructors/${params.id}`)
      // }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    errorElement: <Error />,
    children: [
      {
        path: 'myCart',
        element: <MyCart />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: 'myProfile',
        element: <MyProfile />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'classes',
        element: <ManageClasses />
      },
      {
        path: 'addClass',
        element: <AdminRoute><AddClass /></AdminRoute>
      },
      {
        path: 'admin',
        element: <Admin />
      }
    ]
  }

]);