// import React from 'react'

import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function DashbaordLayouts() {

  const [user] = useAuthState(auth);

  const [signOut] = useSignOut(auth);
  const [userInfo,setUserInfo]=useState({});

  useEffect(()=>{
      fetch(`https://cosmeticszoneserver2024.onrender.com/user/${user?.email}`)
      .then((res)=>res.json())
      .then((data)=>setUserInfo(data))
      
    },[user])
    console.log(userInfo);


    const handleSignout = async()=>{


      const success=await signOut()
      if (success) {
        // alert("You are sign out!!")
        localStorage.clear();
  
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are sign out!!",
          showConfirmButton: false,
          timer: 1500
        });
  
  
  
        toast.success("You Are Log Out")
        
      }
  }



  return (
    <div className="bg-orange-100 min-h-screen">

    <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
        <div className="flex items-center justify-between py-2 text-5x1">
          <div className="font-bold text-blue-900 text-xl">Admin Panel <span className="text-orange-600"> Cosmetics Zone</span></div>
          <div className="flex items-center text-gray-500">
            <span className="material-icons-outlined p-2 font-text-3xl" >search</span>
            <span className="material-icons-outlined p-2" >notifications</span>

            {
              userInfo?.image  ? 
              <>
              <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" style={{backgroundImage:`url(${userInfo?.image})`}}></div>


              </>
              :
              <>
              <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" style={{backgroundImage:`url('https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg')`}}></div>


              </>

            }

          </div>
      </div>
    </div>

    
    <div className="flex flex-row pt-24 px-10 pb-4">
      <div className="w-2/12 mr-6">
        <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">


          <a href="/dashboard" className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">dashboard</span>
            Dashboard Home
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </a>


          <NavLink to={`/dashboard/addproduct`}  className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">tune</span>
            Add Cosmetics
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </NavLink>


          <NavLink to={`/dashboard/dashbaordAllProduct`} className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">file_copy</span>
            All Cosmetics
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </NavLink>

          <NavLink to={`/dashboard/overview`}  className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">file_copy</span>
            Overview
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </NavLink>
          
          {/* <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">file_copy</span>
            Another menu item
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </a> */}


        </div>
  
        <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">

          <NavLink to={`/dashboard/profile`}  className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">face</span>
            Profile
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </NavLink>


          <NavLink to={`/dashboard/profileEdit`}  className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">settings</span>
            Settings Profile
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </NavLink>

          <a href="/" className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">home</span>
             Home
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </a>

          <a onClick={handleSignout} className="inline-block text-gray-600 hover:text-black my-4 w-full">
            <span className="material-icons-outlined float-left pr-2">power_settings_new</span>
            Log out
            <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
          </a>


        </div>
      </div>
      
      
      

      <Outlet></Outlet>



    </div>
  </div>
  )
}
