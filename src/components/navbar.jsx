import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './search'
import { Links } from './Links'
import pic from "../images/logo.png";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-3 pb-0 flex flex-wrap  items-center border-b dark:border-gray-700 border-gray-200">
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
                 <img src={pic} alt='Seapedia' className='object-scale-down h-24 w-24'/>                
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-slate-700 dark:text-slate-200 bg-white border-1 rounded px-2 py-1 hover:shadow-lg'>
              {darkTheme ? '☀️' : '🌙'}
            </button>
        </div>
        <Links />
        <Search/>        
    </div>
  )
}