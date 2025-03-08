import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import Tip from '../components/Tip'

const HomePage = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
  return (
    <>
        <Hero/>
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />

        <Tip />

         
    </>
  )
}

export default HomePage