import logo from '../assets/images/logo.png'; 
import React from 'react'
import { NavLink } from 'react-router-dom';

import {Navbar as Navbar_hero, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

const Navbar = () => {

  const linkClass = ({isActive}) => 
    isActive ? 
    /** if active, background = black  -> this function is useful for all button(Link) */
    "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300"
    : 
    "text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300";

  return (
  <Navbar_hero>

    <NavbarBrand>      
      <p className="font-bold text-inherit">Jobs<span className='text-blue-400'>.com</span></p>
    </NavbarBrand>


    <NavbarContent className="sm:flex gap-4" justify="center">

      <NavbarItem >
        <NavLink className={linkClass} color="foreground" to ="/">
          Home
        </NavLink>
      </NavbarItem>

      <NavbarItem>
        <NavLink className ={linkClass} aria-current="page" to="/jobs">
          Jobs
        </NavLink>
      </NavbarItem>
      
      <NavbarItem>
        <NavLink className={linkClass} color="foreground" to="/add-job">
          Add Job
        </NavLink>
      </NavbarItem>
    </NavbarContent>

    
  </Navbar_hero>
  )
}

export default Navbar