import React from 'react'
import { FaBars, FaBell, FaMicrophone, FaSearch } from "react-icons/fa";
import logo from '../assets/vijay.jpg'
import { Link } from 'react-router-dom';


const Navbar = ({setSidebar}) => {
    return (
        <div className="z-10 border w-full flex items-center justify-between px-3 lg:px-10 py-2 bg-white fixed top-0">

            {/* Left Nav  */}
            <div className='flex items-center gap-2 lg:gap-5'> 
                <button onClick={() => setSidebar(prev => !prev)}><FaBars className="lg:text-2xl cursor-pointer text-gray-600" /></button>
                <Link to={'/'} className='font-bold lg:text-xl'>ViewTube</Link>
            </div>

            {/* Middle Nav  */}
            <div className='p-2 sm:flex gap-2 lg:gap-3 items-center hidden sm:block'> 
                <div className="input relative border-amber-400">
                    <input type="text" placeholder='Search' className='border lg:h-9 lg:w-90 text-xs p-2 lg:px-3 lg:py-1 rounded-3xl' />
                    <FaSearch className='absolute top-0 lg:top-0 right-0 lg:text-xl border-l w-10 h-8 lg:h-9 p-1.5' />
                </div>
                <FaMicrophone className='border h-8 w-8 p-1.5 rounded-3xl'/>
            </div>

            {/* Right Nav  */}
            <div className='flex items-center gap-2 lg:gap-6'> 
                <FaBell className=' h-10 w-10 p-2 rounded-3xl' />
                <img src={logo} className='object-cover h-8 w-8 lg:h-10 lg:w-10 rounded-full' alt="" />
            </div>

        </div>
    )
}

export default Navbar