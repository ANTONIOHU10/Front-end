import React from 'react'
/** Router lib */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import HomePage from './Pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage';


const App = () => {

  /** Add new job = function for the form -> add the new job in to jobs.json */
  const addJob = async (newJob)=>{
    const res = await fetch("https://json-server-nu-beige.vercel.app/jobs",{
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
    const res = await fetch(`https://json-server-nu-beige.vercel.app/jobs/${id}`,{
      method:"DELETE",/** adding new job */
  });
  return;
  }
  

  /** Update job */

  const updateJob = async (job) =>{
    const res = await fetch(`https://json-server-nu-beige.vercel.app/jobs/${job.id}`,{
      method:"PUT",/** adding new job */

      /** specifying the type of content */
      headers:{
        "Content-Type" : "application/json"
      },

      /** transform our data into JSON */
      body:JSON.stringify(job)
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
            <Route path = "/jobs/:id" element ={<JobPage deleteJob={deleteJob}/>} loader = {jobLoader} />

            <Route path = "/edit-job/:id" element ={<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}/>
            {/**all not found page -> path = "*" */}
            <Route path ="*" element={<NotFoundPage/>}/>
            
      </Route>
    )
  );

      return(
      <RouterProvider router = {router} 
      
    />  
  );
};

export default App