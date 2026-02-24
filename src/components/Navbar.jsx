import React from 'react'
import { FaBars, FaBell, FaMicrophone, FaSearch } from "react-icons/fa";
import logo from '../assets/vijay.jpg'


const Navbar = ({setSidebar}) => {
    return (
        <div className="border w-full flex items-center justify-between px-10 py-2 bg-white fixed top-0">

            {/* Left Nav  */}
            <div className='flex items-center gap-5'> 
                <button onClick={() => setSidebar(prev => !prev)}><FaBars className="text-2xl cursor-pointer" /></button>
                <h1 className='font-bold text-xl'>ViewTube</h1>
            </div>

            {/* Middle Nav  */}
            <div className='p-2 flex gap-3 items-center'> 
                <div className="input relative border-amber-400">
                    <input type="text" placeholder='Search' className='border h-9 w-90 px-3 py-1 rounded-3xl' />
                    <FaSearch className='absolute top-0 right-0 text-xl border-l w-10 h-9 p-1.5' />
                </div>
                <FaMicrophone className='border h-10 w-10 p-2 rounded-3xl'/>
            </div>

            {/* Right Nav  */}
            <div className='flex items-center gap-6'> 
                <FaBell className=' h-10 w-10 p-2 rounded-3xl' />
                <img src={logo} className='object-cover h-10 w-10 rounded-full' alt="" />
            </div>

        </div>
    )
}

export default Navbar