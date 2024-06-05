// import React from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/Auth/GoogleLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/login";
  // const [user] = useAuthState(auth);
  const userInfo = useAuthState(auth);

  //===================

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [passMatch, setPassMatch] = useState(true);



  const [userInfoDb,setUserInfo]=useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const token=localStorage.getItem('token')

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const firstName=form.firstName.value;
    const lastName=form.lastName.value;
    const fullName=form.fullName.value;

    console.log(email, password, confirmPassword);


    function getUserDb(email) {
       fetch(`https://cosmetics-zone-server2024.vercel.app/user/${email}`)
      .then((res)=>res.json())
      .then((data)=>setUserInfo(data))
      
    }
    getUserDb(email)
      // fetch(`https://cosmetics-zone-server2024.vercel.app/user/${email}`)
      // .then((res)=>res.json())
      // .then((data)=>setUserInfo(data))
      
  



    if (email===userInfoDb.email) {
      console.log("Älrady user");
      toast.error(" Alrady exjist user")
    }




    if (password !== confirmPassword) {
      setPassMatch(false);
    }

    console.log(email, password, confirmPassword);

    if (password === confirmPassword && email!==userInfoDb.email) {


      createUserWithEmailAndPassword(email, password).then((data)=>{
        if (data?.user?.email) {


          const userInfo = {
            email: data?.user?.email,
            fullName:fullName,
            firstName:firstName,
            lastName:lastName,
          };

          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
          axios.post("https://cosmetics-zone-server2024.vercel.app/user",userInfo,{
            headers: headers

          }).then(()=>{
            
          })
          navigate(from);


          toast.success("user create")
          
        }
        if (user) {
          navigate(from);
        }



      });




    }
  };

  useEffect(() => {
    if (userInfo[0]) {
      navigate("/");
    }

    if (error) {
      console.log(error?.message);
      toast.error(" Alrady exjist user")
    }
  }, [navigate, userInfo, error]);

  console.log(user, loading);

  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      {/* <!-- Container --> */}
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          {/* <!-- Row --> */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`,
              }}
            ></div>
            {/* <!-- Col --> */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <div className="text-center">
                <GoogleLogin></GoogleLogin>
              </div>

              <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700
                     dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>

                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      name="confirmPassword"
                      placeholder="******************"
                    />
                  </div>

                </div>


                {!passMatch && (
                  <div className="my-2">
                    <p className="text-red-800">Password do not match</p>
                  </div>
                )}

                {error && <p className="text-red-800">{error?.message}</p>}



                <div className="mb-6 text-center">
                  <button
                    className="btn w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                {/* <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div> */}
                {/* <div className="text-center">
							<a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html">
								Already have an account? Login!
							</a>
						</div> */}
              </form>

              <div className="text-center">
                <NavLink
                  className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                  to={"/login"}
                >
                  Already have an account? Login!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
