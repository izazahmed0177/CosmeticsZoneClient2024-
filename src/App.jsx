
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/routers'
import { Toaster } from 'react-hot-toast'
// import * as d3 from "d3";

function App() {
 

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
  <Toaster></Toaster>

    
    </>
  )
}

export default App
