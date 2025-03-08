import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const MainLayout = () => {
  return (
    <>
        {/** We put the navbar here, because every page has this navBar */}
        <Navbar/>
        <Outlet/>
         
         {/** using the toast */}
        <ToastContainer/>
    </>
  )
}

export default MainLayout