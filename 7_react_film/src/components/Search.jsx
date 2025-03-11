import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
    //the searchTearm as props cannot be resigned another value as searchTerm = 2222
    //we can use only set function

  return (
    <div className='search'>

        {/** the search icon */}
        <img src="/src/assets/search.svg"  alt="search"/>


        {/** the search input */}
        <input 
            type='text'
            placeholder='Search through thounsands fo movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    
    </div>
  )
}

export default Search