import React from 'react';
import './style.css';

export const SearchBox = ({placeholder, handleChange}) =>{
  return (<input className='search' 
                 onChange={handleChange} 
                 type='text' 
                 placeholder={placeholder}/>)
}