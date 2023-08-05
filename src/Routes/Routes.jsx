import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from '../Components/Login/Login';
import SignUp from '../Components/Login/SignUp'



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/> 
        },
        {
          path: 'login',
          element: <Login/>,      
        },
        {
          path: 'signUp',
          element: <SignUp/>
        }
       
      ]
    },
   
  ]);