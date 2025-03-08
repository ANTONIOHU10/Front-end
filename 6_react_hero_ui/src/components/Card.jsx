import React from 'react'

const Card = ({children, bg='bg-gray-100'}) => {
  return (
    /*
        { } = for an entire variable
        {$...} = for a string
        `` = template string
    */
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card