// import React from 'react'

import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.config";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import { reload } from "firebase/auth";

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location?.state?.from?.pathname || "/login";

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [user] = useAuthState(auth);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [signOut] = useSignOut(auth);


    const [userInfoDb,setUserInfo]=useState({});
    const [isFetching, setFetching] = useState(false);

    useEffect(()=>{
        async function fetchData() {
            setFetching(true);

            const response = await fetch(`http://localhost:5000/user/${user?.email}`)

            console.log("response = ", response);
            let data = await response.json();
            setUserInfo(data) //updt state
              setFetching(false);
            //   setData(true)
            // console.log("Data = ", data);
            
        }
        fetchData();


        // fetch(`http://localhost:5000/user/${user?.email}`)
        // .then((res)=>res.json())
        // .then((data)=>setUserInfo(data))
        
      },[user,userInfoDb,signOut,isFetching])

      if (isFetching) {
        console.log("data loading ......")
        // alert ("data loading")
        
    }



      console.log(user);
      console.log(userInfoDb);

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
          navigate(from);
          reload()
          
        }
    }






  return (
   <div>
            {/* Navbar */}
            <nav className="bg-black p-4">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">Porfolio </div>

                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
                        <NavLink to={"/"}  className="text-white  px-4 py-2 hover:text-orange-600 ">Home</NavLink>
                        <NavLink to={"/homeCosmetics"}  className="text-white  px-4 py-2 hover:text-orange-600 ">Cosmetics</NavLink>
                        <NavLink to={"/article"}  className="text-white  px-4 py-2  hover:text-orange-600">Article</NavLink>
                        <NavLink to={"/blog"}   className="text-white  px-4 py-2  hover:text-orange-600">Blog</NavLink>
                        <NavLink to={"/about"}   className="text-white  px-4 py-2  hover:text-orange-600">About</NavLink>
                        <NavLink to={"/contact"}   className="text-white  px-4 py-2  hover:text-orange-600">Contact Me</NavLink>
                    </div>

                    <div className="flex gap-2">
                        {/* <NavLink to={"/login"} className="btn btn-outline btn-primary">LogIn</NavLink>
                        <NavLink to={"/register"} className="btn btn-outline btn-primary">Register</NavLink> */}

                        {
                            !userInfoDb?.email ?
                            <>
                            <NavLink to={"/login"} className="btn btn-outline btn-primary">LogIn</NavLink>
                             <NavLink to={"/register"} className="btn btn-outline btn-primary">Register</NavLink> 

                            </>
                            :
                            <>
                            <div>

                                {
                                    !userInfoDb?.fullName ?
                                    <>
                                     <h2 className="text-yellow-500">Avetor</h2>

                                       </>
                                         :
                                         <>
                                        <h2 className="text-yellow-500">{userInfoDb.fullName}</h2>

                                       </>
                                }
                            </div>

                            <NavLink  className={"btn"}
                                   to={"dashboard"}
                                       >Dashboard
                             </NavLink>

                            <button onClick={handleSignout} className="btn">Logout</button>

                            <div className="avatar online">
                <div className="w-20 rounded-full">
                     {/* <img src={user?.photoURL} /> */}
                     


                     {
              !userInfoDb?.image ?
              <>
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

              </>
              :
              <>
              <img src={userInfoDb?.image} />

              </>
            }




                </div>
              </div>




                            </>
                        }




                    </div>



                </div>
                
            </nav>


        </div>
  )
}

