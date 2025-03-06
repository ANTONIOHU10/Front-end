import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        {/** We put the navbar here, because every page has this navBar */}
        <Navbar/>
        <Outlet/>
        
    </>
  )
}

export default MainLayout