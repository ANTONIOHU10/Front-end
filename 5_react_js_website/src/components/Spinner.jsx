import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '100px auto'
}


/**
 * 
 * @param {*} loading = Each loader accepts a loading prop as a boolean. The loader will render null if loading is false
 * @returns 
 */
const Spinner = (loading) => {
  return (
    <ClipLoader
        color='#4338Ca'
        loading={loading}
        cssOverride={override}
        size={150}
    />
    
  )
}

export default Spinner