/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-router-dom";


export default function CosmeticsHomeCard({ cosmetic }) {
    console.log(cosmetic);
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
    <div className="relative">

    {
        cosmetic?.image ?  
        <>
        <img className="w-full" src={cosmetic?.image} alt="Product Image"/>

        </>
        :
        <>
        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/>

        </>
    }



        {/* <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/> */}
        {/* <img className="w-full" src={cosmetic?.image} alt="Product Image"/> */}
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div className="p-4">
        <h2 className="text-lg font-medium mb-2">Title:{cosmetic?.title}</h2>
        <h2 className="text-lg font-medium mb-2">Catagore:{cosmetic?.category}</h2>
        <h2 className="text-lg font-medium mb-2">Name: {cosmetic?.cosmeticsName}</h2>
        <p className="text-gray-600 text-sm mb-4">{cosmetic?.cosmeticsDetails}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$ {cosmetic?.price}</span>
            <NavLink to={`/details/${cosmetic?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Details
            </NavLink>
        </div>
    </div>
</div>
  )
}
