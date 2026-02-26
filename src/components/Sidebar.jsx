import React from 'react'
import { FaHouse, FaVideo } from 'react-icons/fa6'
import SidebarText from './SidebarText'
import { FaBars, FaClock, FaDownload, FaHistory, FaThumbsUp, FaYoutube } from 'react-icons/fa'

const Sidebar = ({ sidebar}) => {
  return (
    <div className={`border-r-2 hidden lg:block md:${sidebar ? 'w-[15%]' : 'w-[6%]'} h-screen p-3 fixed `}>

      <div onClick={console.log('hello its clicked.....')} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaHouse className={`text-2xl`} /> <SidebarText title="Home" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaYoutube className={`text-2xl`} /> <SidebarText title="Shorts" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaVideo className={`text-2xl`} /> <SidebarText title="Subscriptions" sidebar={sidebar} />
      </div>

      <hr className='my-4 text-gray-400' />

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaHistory className={`text-2xl`} /> <SidebarText title="History" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaBars className={`text-2xl`} /> <SidebarText title="Playlists" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaClock className={`text-2xl`} /> <SidebarText title="Watch later" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaThumbsUp className={`text-2xl`} /> <SidebarText title="Liked videos" sidebar={sidebar} />
      </div>

      <div className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaDownload className={`text-2xl`} /> <SidebarText title="Downloads" sidebar={sidebar} />
      </div>

      <hr className='my-4 text-gray-400' />

    </div>
  )
}

export default Sidebar
