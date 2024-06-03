// import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/otherPage/Home";
import About from "../pages/otherPage/About";
import Blog from "../pages/otherPage/Blog";
import Article from "../pages/otherPage/Article";
import Contact from "../pages/otherPage/Contact";
import Login from "../pages/SignInSignUp/Login";
import Register from "../pages/SignInSignUp/Register";
import PrivateRouter from "./PrivateRouter";
import DashbaordLayouts from "../layouts/DashbaordLayouts";
import DashbaordHome from "../pages/dashbaord/DashbaordHome";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"blog",
                element:<Blog></Blog>
            },
            {
                path:"article",
                element:<Article></Article>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },


            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
        ]
        
    },


    {
        path:"/dashboard",
        element:(
            <PrivateRouter>
                <DashbaordLayouts></DashbaordLayouts>
            </PrivateRouter>
        ),
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<DashbaordHome></DashbaordHome>
            },
        ]

    },

])

export default router;