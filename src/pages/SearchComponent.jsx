// import React from 'react'

// import axios from "axios";

// import { useHistory } from "react-router-dom";


import { useState } from 'react';
import CosmeticsHomeCard from '../components/cards/CosmeticsHomeCard';

export default function SearchComponent() {


    // const [query, setQuery] = useState('');
    // const navigate = useNavigate();
  
    // const handleSearch = () => {
    //   navigate(`/resultsPageSearch?query=${query}`);
    // };



    
    // const [query, setQuery] = useState('');
    // const history = useHistory();
  
    // const handleSearch = () => {
    //   history.push(`/resultsPageSearch?query=${query}`);
    // };


    // const [query, setQuery] = useState('');
    // const history = useHistory();
  
    // const handleSearch = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:5000/search?q=${query}`);
    //     history.push('/resultsPageSearch', { results: response.data });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };














  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/search?query=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  console.log(setResults);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for cosmetics..."
        />
        <button className="btn bg-lime-700" type="submit">
          Search
        </button>
      </form>

      <div>


      {results.map((cosmetic) => (
        <CosmeticsHomeCard key={cosmetic?._id} cosmetic={cosmetic} />
      ))}
    </div>

      {/* <div key={item._id}>
          <h3>{item.cosmeticsName}</h3>
          <p>{item.title}</p>
          <p>{item.brand}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.cosmeticsDetails}</p>
          <img src={item.image} alt={item.cosmeticsName} />
        </div> */}
{/* 
      <div>
        <div className="mx-16">
          <h1 className="text-4xl my-20 text-center">Our Cosmetics</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
            {results
              ?.reverse()

              ?.map((cosmetic) => (
                <CosmeticsHomeCard key={cosmetic?._id} cosmetic={cosmetic} />
              ))}
          </div>
        </div>
      </div> */}


    </div>
  );
}
