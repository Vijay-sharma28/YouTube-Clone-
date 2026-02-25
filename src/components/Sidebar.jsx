import React from 'react'
import { FaBlog, FaGamepad, FaHouse, FaMusic, FaNewspaper, FaVideo } from 'react-icons/fa6'
import SidebarText from './SidebarText'

const Sidebar = ({ sidebar,category,setCategory}) => {
  return (
    <div className={`border border-t-0 hidden md:block md:${sidebar ? 'w-[15%] border-r-0' : 'w-[6%]'} h-[89.9vh] p-3 fixed `}>

      <div onClick={()=>setCategory(0)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaHouse className={`text-2xl ${category===0?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="Home" sidebar={sidebar} />
      </div>

      <div onClick={()=>setCategory(10)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaMusic className={`text-2xl ${category===10?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="Music" sidebar={sidebar} />
      </div>

      <div onClick={()=>setCategory(20)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaGamepad className={`text-2xl ${category===20?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="Gaming" sidebar={sidebar} />
      </div>

      <div onClick={()=>setCategory(22)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaBlog className={`text-2xl ${category===22?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="Blog" sidebar={sidebar} />
      </div>

      <div onClick={()=>setCategory(25)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaNewspaper className={`text-2xl ${category===25?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="News" sidebar={sidebar} />
      </div>

      <div onClick={()=>setCategory(30)} className={` ${sidebar ? "w-full" : "w-15"} px-4 py-2 flex gap-5 hover:bg-gray-200 rounded hover:cursor-pointer`}>
        <FaVideo className={`text-2xl ${category===30?'border-b-2 pb-1 border-b-red-600':''}`} /> <SidebarText title="Movies" sidebar={sidebar} />
      </div>

    </div>
  )
}

export default Sidebar
