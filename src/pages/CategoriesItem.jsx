// import React from 'react'

// import { NavLink, useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import CosmeticsHomeCard from "../components/cards/CosmeticsHomeCard";

export default function CategoriesItem() {
    const cosmetics = useLoaderData();
  
  return (
    <>

<div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Cosmetics</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        {cosmetics
            ?.reverse()
           
            ?.map((cosmetic) => (
              <CosmeticsHomeCard key={cosmetic?._id} cosmetic={cosmetic} />
            ))}
        </div>
      </div>

    </>
  )
}
