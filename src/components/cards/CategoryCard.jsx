/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-router-dom";

export default function CategoryCard({category}) {
  return (
    <NavLink  to={`/categoryCosmetics/${category?.title}`} className="border px-5 py-3 rounded hover:font-bold">
    <h1 className="text-center ">{category?.title}</h1>
  </NavLink>
  )
}
