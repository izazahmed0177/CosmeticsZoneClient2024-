// import React from 'react'

import { useEffect, useState } from "react";
import Banner from "../../components/home/Banner";
import CarouselItem from "../../components/home/CarouselItem";
import Header from "../../components/home/Header";
import Hero from "../../components/home/Hero";
import axios from "axios";
import CategoryCard from "../../components/cards/CategoryCard";
import CosmeticsHomeCard from "../../components/cards/CosmeticsHomeCard";
import SearchHome from "../../components/home/SearchHome";

export default function Home() {
  const [cosmetics,setCosmetics]=useState()

  const [categoris, setCategories] = useState();

  useEffect(()=>{
    async function getCatagory() {
      
      const categoriData = await axios.get('https://cosmetics-zone-server2024.vercel.app/catagory');

      if (categoriData?.status === 200) {
        setCategories(categoriData?.data);
        // console.log(categoriData);
      }


      const cosmeticsData = await axios.get('https://cosmetics-zone-server2024.vercel.app/cosmetics');
      // console.log(recipesData);
      // setRecipes(recipesData?.data);
      if (cosmeticsData?.status === 200) {
        setCosmetics(cosmeticsData?.data);
      }
   
  
    }
    getCatagory()


  },[])




  return (
    <>
    
    <div className="flex justify-center py-3">
        <SearchHome></SearchHome>

    </div>
        <Header></Header>
        <Hero></Hero>

        <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Cosmetics Categories </h1>
        <div className="grid md:grid-cols-4 grid-cols-2  gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?._id} category={category} />
          ))}
        </div>
      </div>



      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Cosmetics</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {cosmetics
            ?.reverse()
            ?.slice(0, 4)
            ?.map((cosmetic) => (
              <CosmeticsHomeCard key={cosmetic?._id} cosmetic={cosmetic} />
            ))}

        </div>
      </div>





        <Banner></Banner>
        <CarouselItem></CarouselItem>
    </>
  )
}
