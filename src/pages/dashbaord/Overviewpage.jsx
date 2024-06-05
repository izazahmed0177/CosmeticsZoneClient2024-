/* eslint-disable no-unused-vars */
// import React from 'react'
import { LineChart,
     Line, XAxis,
      YAxis, CartesianGrid, 
      Tooltip, Legend,
      ResponsiveContainer,
      Pie,
    
        } from 'recharts';
// import { LineChart,
//      Line, XAxis,
//       YAxis, CartesianGrid, 
//       Tooltip, Legend, ResponsiveContainer,
//        BarChart, Bar, RadarChart, PolarRadiusAxis,
//         PolarAngleAxis, PolarGrid, Radar,  Pie,
//          PieChart } from 'recharts';



         const pdata = [
            {
                name: "MongoDb",
                student: 11,
                fees: 120,
            },
            {
                name: "Javascript",
                student: 15,
                fees: 12,
            },
            {
                name: "PHP",
                student: 5,
                fees: 10,
            },
            {
                name: "Java",
                student: 10,
                fees: 5,
            },
            {
                name: "C#",
                student: 9,
                fees: 4,
            },
            {
                name: "C++",
                student: 10,
                fees: 8,
            },
        ];


       
// import * as d3 from "d3";

// // import BarChart from "./components/BarChart";
// // import PieChart from "./components/PieChart";
// // import WorldMap from "./components/WorldMap";
// import { useEffect, useState } from 'react';
// import WorldMap from '../../components/chart/WorldMap';
// import PieChart from '../../components/chart/PieChart';
// import BarChart from '../../components/chart/BarChart';
// // import { PieChart } from 'recharts';

// const pieChartData = [
//   { name: "Christians", value: 2_173_180_000 },
//   { name: "Muslims", value: 1_598_510_000 },
//   { name: "None", value: 1_126_500_000 },
//   { name: "Hindus", value: 1_033_080_000 },
//   { name: "Buddhists", value: 487_540_000 },
//   { name: "Folk Religionists", value: 405_120_000 },
//   { name: "Other Religions", value: 58_110_000 },
//   { name: "Jews", value: 13_850_000 },
// ];

// const barChartData = [
//   { country: "India", population: 1_417_173_173 },
//   { country: "China", population: 1_412_175_000 },
//   { country: "United States", population: 333_287_557 },
//   { country: "Indonesia", population: 275_501_339 },
//   { country: "Pakistan", population: 235_824_862 },
//   { country: "Nigeria", population: 218_541_212 },
//   { country: "Brazil", population: 215_313_498 },
//   { country: "Bangladesh", population: 171_186_372 },
//   { country: "Russia", population: 144_236_933 },
//   { country: "Mexico", population: 127_504_125 },
//   { country: "Japan", population: 125_124_989 },
//   { country: "Ethiopia", population: 123_379_924 },
// ];









export default function Overviewpage() {


    const data2 = [
        { x: 1, y: 123, z: 122 },
        { x: 2, y: 113, z: 713 },
        { x: 3, y: 125, z: 312 },
        { x: 4, y: 235, z: 123 },
        { x: 5, y: 145, z: 420 },
        { x: 6, y: 25, z: 529 },
        { x: 7, y: 117, z: 61 },
        { x: 8, y: 32, z: 435 },
        { x: 9, y: 143, z: 93 },
    ];

    // const data1 = [
    //     { name: "Geeksforgeeks", students: 400 },
    //     { name: "Technical scripter", students: 700 },
    //     { name: "Geek-i-knack", students: 200 },
    //     { name: "Geek-o-mania", students: 1000 },
    // ];





    // const [worldPopulation, setWorldPopulation] = useState(null);
    // const [topography, setTopography] = useState(null);
    // const [barChartData, setBarChartData] = useState([]);
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   const getData = async () => {
    //     setLoading(true);
  
    //     let populationData = {};
    //     await Promise.all([
    //       d3.json(
    //         "https://res.cloudinary.com/tropicolx/raw/upload/v1/Building%20Interactive%20Data%20Visualizations%20with%20D3.js%20and%20React/world.geojson",
    //       ),
    //       d3.csv(
    //         "https://res.cloudinary.com/tropicolx/raw/upload/v1/Building%20Interactive%20Data%20Visualizations%20with%20D3.js%20and%20React/world_population.csv",
    //         (d) => {
    //           populationData = {
    //             ...populationData,
    //             [d.code]: +d.population,
    //           };
    //         },
    //       ),
    //     ]).then((fetchedData) => {
    //       const topographyData = fetchedData[0];
    //       const barChartData = topographyData.features
    //         .map((d) => ({
    //           country: d.properties.name,
    //           population: populationData[d.id] || 0,
    //         }))
    //         .sort((a, b) => b.population - a.population)
    //         .slice(0, 12);
    //       setBarChartData(barChartData);
    //       setWorldPopulation(populationData);
    //       setTopography(topographyData);
    //     });
  
    //     setLoading(false);
    //   };
  
    //   getData();
    // }, []);
  
    // if (loading) return <div>Loading...</div>;









  return (
    <div>

    <div>
    <h1 className="text-heading">Line Chart Using Rechart</h1>
            <ResponsiveContainer width={500} height={700} aspect={3}>
                <LineChart width={500} height={300} data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" interval={"preserveStartEnd"} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="student"
                        stroke="black"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
           
   
    </div>

    <div>

    <LineChart width={500}
            height={700} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left-axis" />
            <YAxis yAxisId="right-axis"
                orientation="right" />
                <Tooltip />
            <Line yAxisId="left-axis"
                type="dashed" dataKey="y"
                stroke="pink" />
            <Line yAxisId="right-axis"
                type="dashed" dataKey="z"
                stroke="blue" />
        </LineChart>
    </div>

    <div>
    <LineChart width={500}
            height={700} data={data2}>
            <CartesianGrid />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left-axis" />
            <YAxis yAxisId="right-axis"
                orientation="right" />
                 <Tooltip />
            <Line yAxisId="left-axis"
                type="monotone" dataKey="y"
                stroke="green" />
            <Line yAxisId="right-axis"
                type="monotone" dataKey="z"
                stroke="red" />
        </LineChart>
    </div>

    {/* <div>

    <PieChart width={700} height={700}>
                <Tooltip />
                <Pie
                    data={data1}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="green"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>
    </div> */}











    <div>
    <div className='text-center'>
                {/* <LineChart  width={500} height={300} data={quizsData} */}

                <LineChart  width={500} height={300} data={pdata}
                >

                     <XAxis dataKey="name" />
                         <YAxis />
                          <Tooltip />
                        <Legend />

                    {/* <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                     <Line type="monotone" dataKey="total" stroke="black" />

                </LineChart>
                </div>
    </div>


    {/* <div>
    <div className="dashboard">
      <div className="wrapper">
        <h1>
          <span className="thin">World</span>
          <span className="bold">Population</span> Insights 2022
        </h1>
        <main className="main">
          <div className="grid">
            <div className="card stat-card">
              <h2>Total Population</h2>
              <span className="stat">7.95B</span>
            </div>
            <div className="card stat-card">
              <h2>Male Population</h2>
              <span className="stat">4B</span>
            </div>
            <div className="card stat-card">
              <h2>Female Population</h2>
              <span className="stat">3.95B</span>
            </div>
            <div className="card map-container">
              <h2>World Population by Country</h2>
              <WorldMap
                // width={550}
                height={450}
                data={{ worldPopulation, topography }}
              />
            </div>
            <div className="card pie-chart-container">
              <h2>World Population by Religion</h2>
              <PieChart
                // width={650}
                height={450}
                data={pieChartData}
              />
            </div>
            <div className="card bar-chart-container">
              <h2>Top Countries by Population (in millions)</h2>
              <BarChart
                // width={1248}
                height={500}
                data={barChartData}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
 */}







    </div>
  )
}
