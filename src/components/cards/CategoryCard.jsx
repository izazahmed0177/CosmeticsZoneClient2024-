/* eslint-disable react/prop-types */
// import React from 'react'

export default function CategoryCard({category}) {
  return (
    <div className="border px-5 py-3 rounded hover:font-bold">
    <h1 className="text-center ">{category?.title}</h1>
  </div>
  )
}
