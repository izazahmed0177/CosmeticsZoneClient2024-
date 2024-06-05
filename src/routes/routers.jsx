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
import Profile from "../components/user/Profile";
import ProfileEdit from './../components/user/ProfileEdit';
import AddProduct from "../pages/dashbaord/AddProduct";
import HomeCosmetics from "../pages/otherPage/HomeCosmetics";
import HomeProductDetails from "../components/home/HomeProductDetails";
import DashbaordAllProduct from "../pages/dashbaord/DashbaordAllProduct";
import DashbordProductDetails from "../pages/dashbaord/DashbordProductDetails";
import EditProduct from "../pages/dashbaord/EditProduct";
import Overviewpage from "../pages/dashbaord/Overviewpage";
import ComingSoonPage from "../components/shareItem/ComingSoonPage";
import EmailChak from "../pages/SignInSignUp/EmailChak";
import ForgotPassword from "../pages/SignInSignUp/ForgotPassword";
import CategoriesItem from "../pages/CategoriesItem";
import ResultsPageSearch from "../pages/ResultsPageSearch";

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
                path:"homeCosmetics",
                element:<HomeCosmetics></HomeCosmetics>
            },
            {
                path:"comingSoon",
                element:<ComingSoonPage></ComingSoonPage>
            },
            {
                path:"details/:id",
                element:<HomeProductDetails/>,
                loader:({params})=>fetch(`https://cosmeticszoneserver2024.onrender.com/cosmetics/get/${params.id}`)
            },
            {
                path:"categoryCosmetics/:title",
                element:<CategoriesItem/>,
                loader:({params})=>fetch(`https://cosmeticszoneserver2024.onrender.com/categoryCosmetics/${params.title}`)
            },
            {
                path:"resultsPageSearch",
                element:<ResultsPageSearch/>,
                
            },


            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"emailChak",
                element:<EmailChak></EmailChak>
            },
            {
                path:"forgotPassword",
                element:<ForgotPassword></ForgotPassword>
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
            {
                path:"profile",
                element:<Profile></Profile>
            },
            {
                path:"profileEdit",
                element:<ProfileEdit/>
            },
            {
                path:"addproduct",
                element:<AddProduct/>
            },
            {
                path:"overview",
                element:<Overviewpage/>
            },
            {
                path:"editproduct/:id",
                element:<EditProduct/>
            },
            {
                path:"dashbaordAllProduct",
                element:<DashbaordAllProduct/>
            },
            {
                path:"dashbaordAllProduct/dashbordProductDetails/:id",
                element:<DashbordProductDetails/>,
                loader:({params})=>fetch(`https://cosmeticszoneserver2024.onrender.com/cosmetics/get/${params.id}`)
            },
        ]

    },

])

export default router;