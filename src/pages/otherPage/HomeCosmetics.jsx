// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"
import CosmeticsHomeCard from "../../components/cards/CosmeticsHomeCard";

export default function HomeCosmetics() {

    const [cosmetics,setCosmetics]=useState()

    useEffect(()=>{
        async function getCosmetics() {
      
            const cosmeticsData = await axios.get('http://localhost:5000/cosmetics');
      if (cosmeticsData?.status === 200) {
        setCosmetics(cosmeticsData?.data);
      }
        }
        getCosmetics()
    },[])
  return (
   
    <div className="mx-16">
    <h1 className="text-4xl my-20 text-center">Our Newest Cosmetics</h1>
    <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
      {cosmetics
        ?.reverse()
        
        ?.map((cosmetic) => (
          <CosmeticsHomeCard key={cosmetic?._id} cosmetic={cosmetic} />
        ))}

    </div>
  </div>
  )
}
