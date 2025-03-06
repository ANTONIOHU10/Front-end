import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

/** Router lib */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './Pages/HomePage'

const router = createBrowserRouter(

  /**
   * 
   * Create a router for the HomePage component(page)
   */
  createRoutesFromElements(<Route index element={<HomePage/>}/>)
);


const App = () => {

      return <RouterProvider router = {router}/>;

};

export default App