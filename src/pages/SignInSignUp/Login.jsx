// import React from 'react'

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/Auth/GoogleLogin";
// import Swal from "sweetalert2";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {

  const userInfo = useAuthState(auth);
  
  const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";
  
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);


      







  
    const handleSignIn = (e) => {
      const token=localStorage.getItem('token')
      e.preventDefault();
  
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      signInWithEmailAndPassword(email, password).then(result=>{
        const user=result.user;
        const curentUser={
          email:user.email
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      axios.post("https://cosmetics-zone-server2024.vercel.app/user",curentUser,{
          headers:headers
      }).then((data)=>{
          localStorage.setItem('token',data?.data?.token)
      
    })

      })



    };


  
    useEffect(() => {
      if (userInfo[0]) {
        navigate(from);
        toast.success("Login Successfully")
      }
    }, [from, navigate, userInfo]);
  
    console.log(user, loading, error);
    if (error) {
      toast.error("user Email & password do not match")
    }
    // console.log(userInfo);
    // console.log(userInfo[0]);




  return (
    <>

<div className="py-16">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover"
         style={{backgroundImage:`url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`}}>



        </div>
            {/* style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"> */}
        {/* </div> */}
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div className="text-center">

            <GoogleLogin></GoogleLogin>
            </div>



            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>




         <form  onSubmit={handleSignIn}>  
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none 
                focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full
                 appearance-none" type="email" name="email"/>
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input className="bg-gray-200 text-gray-700
                 focus:outline-none focus:shadow-outline border border-gray-300
                  rounded py-2 px-4 block w-full appearance-none" type="password" name="password" />
                    <a href="/emailChak" className="text-1xl text-gray-500 hover:text-blue-600 ">Forget Password?</a>
            </div>
            
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>

            </form>



            
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <NavLink to={"/register"} className="text-xs text-gray-500 uppercase hover:text-primary">or sign up</NavLink>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
       
    </>
  
  )
}
