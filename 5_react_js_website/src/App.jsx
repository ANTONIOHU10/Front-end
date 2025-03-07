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
import MainLayout from './layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage from './Pages/JobPage'


const router = createBrowserRouter(

  createRoutesFromElements(    
    <Route path = "/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path = "/jobs" element={<JobsPage/>}/>
          {/** :id = dynamical for every pin job */}
          <Route path = "/jobs/:id" element ={<JobPage/>}/>
          {/**all not found page -> path = "*" */}
          <Route path ="*" element={<NotFoundPage/>}/>
          
    </Route>
  )
);


const App = () => {

      return <RouterProvider router = {router}/>;

};

export default App