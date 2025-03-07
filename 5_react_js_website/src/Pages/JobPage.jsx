import React from 'react'
import { useState,useEffect } from 'react'
/** get id from URL */
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const {id} = useParams();
  const [job,setJob] = useState(null);
  const [loading,setLoading] = useState(true);


/** for default, it fetch all these data when the page is open */
  useEffect (() => {
      const fetchJob = async() => {
        try{
          /*  a way to fetch only 3 jobs
          const res = await fetch("http://localhost:8000/jobs?_limit=3");
          */
          const res = await fetch(`/api/jobs/${id}`);
          const data = await res.json();
          setJob(data);
      } catch (error) {
          console.log('Error fetching data', error);
      } finally {
          setLoading(false);

      }
    }
  fetchJob();
  },[])

  return loading ? <Spinner/> : (<h1>{job.title}</h1>)
}


export default JobPage