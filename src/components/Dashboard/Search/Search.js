import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
const Search = ({input,handlesearchChange}) => {
   
  return (
    <div className='search-box'>
        <SearchIcon/>
<input placeholder='Search' value={input} onChange={handlesearchChange}/>
      
      
    </div>
  )
}

export default Search
