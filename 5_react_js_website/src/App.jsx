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
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'




const App = () => {

  /** Add new job = function for the form -> add the new job in to jobs.json */
  const addJob = async (newJob)=>{
    const res = await fetch("/api/jobs",{
        method:"POST",/** adding new job */

        /** specifying the type of content */
        headers:{
          "Content-Type" : "application/json"
        },

        /** transform our data into JSON */
        body:JSON.stringify(newJob)
    });
    return;
  };

  /** Delete job  */

  const deleteJob =async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method:"DELETE",/** adding new job */
  });
  return;
  }
  
  const router = createBrowserRouter(
  
    createRoutesFromElements(    
      <Route path = "/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path = "/jobs" element={<JobsPage/>}/>
            <Route path = "/add-job" element= {<AddJobPage addJobSubmit={addJob}/>}/>
            {/** :id = dynamical for every pin job */}
            <Route path = "/jobs/:id" element ={<JobPage deleteJob={deleteJob}/>} loader = {jobLoader}/>
            {/**all not found page -> path = "*" */}
            <Route path ="*" element={<NotFoundPage/>}/>
            
      </Route>
    )
  );
  

      return <RouterProvider router = {router} />;

};

export default App