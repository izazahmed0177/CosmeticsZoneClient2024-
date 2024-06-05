/* eslint-disable no-undef */
// import React from 'react'

// import { useLocation } from "react-router";

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from 'react';


// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
//   };

export default function ResultsPageSearch() {

    





    const [results, setResults] = useState([]);
  const location = useLocation();
  console.log(location);
  const data=location.search;
  const data1=new URLSearchParams(location.search)
  console.log(data);
  console.log(data1[0]);

  const [query, setQuery] = useState('');

  setQuery(data1)

  useEffect(() => {
    // const query = new URLSearchParams(location.search).get('query');
    fetch(`https://cosmeticszoneserver2024.onrender.com/search?query=${data1}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [location]);

  console.log(results);
  console.log(query);
  console.log(location);





// const query = useQuery().get('query');
// const [results, setResults] = useState([]);

// useEffect(() => {
//   if (query) {
//     fetch(`https://cosmeticszoneserver2024.onrender.com/search?query=${query}`)
//       .then(response => response.json())
//       .then(data => setResults(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }
// }, [query]);
// console.log(results);
// console.log(query);



// const location = useLocation();
// const results = location.state?.results || [];



  return (
    <div>

<div>
      <h1>Search Results</h1>
      {results.map(result => (
        <div key={result._id}>
          <h2>{result.cosmeticsName}</h2>
          <p>{result.title}</p>
          <p>{result.brand}</p>
          <p>{result.price}</p>
          <p>{result.category}</p>
          <p>{result.cosmeticsDetails}</p>
          <img src={result.image} alt={result.cosmeticsName} />
        </div>
      ))}
    </div>


      
    </div>
  )
}
