import React from 'react'
import { useState } from 'react'
/** react additional icons */
import {FaMapMarker} from 'react-icons/fa'

import { Link } from 'react-router-dom'

/**
 * 
 * @param {*} if it's an object, component, variable, list, array... use the curly braces 
 * @returns 
 */
const JobListing = ({job}) => {

    /** State hook 
     * 
     * for default, we use false */
    const [showFullDescription,setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0,90) + '...';
    }

    return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
    <div className="mb-6">
        <div className="text-gray-600 my-2">
            {/** from the json file */}
            {job.type}
        </div>
        <h3 className="text-xl font-bold">
            {/** from the json file */}
            {job.title}
        </h3>
    </div>

    <div className="mb-5">
        {/** from the json file */}
        {description}
    </div>

    {/** display button 
     * the function setShowFullDescription take input from showFullDescription as input
     * 
    */}
    <button onClick = {() => setShowFullDescription((prevState) => !prevState)} className="text-blue-500 mb-5 hover:text-blue-600">
        {showFullDescription ? 'Less': 'More'}
    </button>

    <h3 className="text-blue-500 mb-2">
        {/** from the json file */}
        {job.salary} /Year
    </h3>

    <div className="border border-gray-100 mb-5"></div>

    <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
            
       <FaMapMarker className='inline text-lg mb-1 mr-1'/>
        
        {/** from the json file */}
        {job.location}
        </div>
        <Link
        
        /** dynamical using the id from the json file*/
        to={`/jobs/${job.id}`}
        className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
        Read More
        </Link>
    </div>
    </div>
    </div>  
    )
}

export default JobListing