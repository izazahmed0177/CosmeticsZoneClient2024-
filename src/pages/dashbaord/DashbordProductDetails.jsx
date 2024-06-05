// import React from 'react'

import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

export default function DashbordProductDetails() {
    const cosmetics=useLoaderData()

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/dashboard/dashbaordAllProduct";


    const hendleDelete=()=>{
      const token=localStorage.getItem('token')
      
        Swal.fire({
          title: "Are you sure Delete Cosmetics ?",
          text: "You won't be able to revert this Cosmetics!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            cosmeticsDelete();
            Swal.fire({
              title: "Deleted!",
              text: "Your Cosmetics has been deleted.",
              icon: "success"
            });
          }
        });
  
  
  
        const cosmeticsDelete=async()=>{

          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
  
          const deleteCosmetics=await axios.delete(`https://cosmetics-zone-server2024.vercel.app/cosmetics/delete/${cosmetics?._id}`,{
            headers:headers
          })
  
          if (deleteCosmetics?.status === 200) {
              // alert("Are you Delete this item")
          toast.success('Successfully Delete Recipe Item')
          navigate(from);
            }else{
              toast.error("Something wrong")
            }
  
        }
     
        
  
    }
  
  
  





  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {
                    cosmetics?.image  ? 
                    <>
                    <img className="w-full h-full object-cover" src={cosmetics?.image} alt="Product Image"/>

                    </>
                    :
                    <>

                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image"/>
                    </>
                }
                </div>


                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                    <button className="w-full bg-gray-900 dark:bg-gray-600
                         text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800
                          dark:hover:bg-gray-700">
                        <NavLink to={`/dashboard/editproduct/${cosmetics?._id}` } >Edit Product</NavLink>
                          </button>
                    </div>
                    <div className="w-1/2 px-2">
                        <NavLink onClick={hendleDelete} className=" btn w-full bg-red-500 dark:bg-gray-700
                         text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold
                          hover:bg-orange-600 dark:hover:bg-gray-600">Delete Product</NavLink>
                    </div>
                </div>




            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name: {cosmetics?.cosmeticsName}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   Title: {cosmetics?.title}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                        <span className="text-gray-600 dark:text-gray-300">$ {cosmetics?.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">category:</span>
                    <div className="flex items-center mt-2">
                       {cosmetics?.category}
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                    <div className="flex items-center mt-2">
                  {cosmetics?.brand}
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {cosmetics?.cosmeticsDetails}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
