/* static usage
import jobs from '../jobs.json'
*/
import { useState,useEffect } from 'react';
import JobListing from './JobListing';
import React from 'react'
import Spinner from './Spinner';



const JobListings = ({isHome = false}) => {

    /*
    preview the list of info in json

        console.log(jobs);
    */

    /**only the recent 3 jobs is it's the homepage -> static
     * 
     * const JobListings = isHome? jobs.slice(0,3): jobs;
    */


   /** to save values 
    * 
    * in this case jobs= [] -> list
   */
    const [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);

   /** use Effect */
    useEffect(() => {
        const fetchJobs = async() => {
            const apiUrl = isHome ? "https://json-server-nu-beige.vercel.app/jobs?_limit=3" : "https://json-server-nu-beige.vercel.app/jobs"
            try{
                /*  a way to fetch only 3 jobs
                const res = await fetch("http://localhost:8000/jobs?_limit=3");
                 */
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);

            }
        }   

        fetchJobs();
    },[]);


    return (
        <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">

                {isHome ? 'Recent Jobs': 'Browse Jobs'}
            </h2>
            
            
            {/**{loading ? ... : ...} for conditional logic if loading */}
            {loading ? 
                /**loading  -> passing the loading state to the component*/
                (<Spinner loading = {loading}/>):

                /** not loading */
                (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                    <JobListing key={job.id} job = {job}/>
                    ))
                    }
                </div>)   
            }
            
            
        </div>
        </section>
    )
}

export default JobListings