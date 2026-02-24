import React from 'react'

const SidebarText = ({title,sidebar}) => {
  return (
    <div className={`${sidebar?'':'hidden'}`}>
      <p className='font-bold hover:text-gray-600'>{title}</p>
    </div>
  )
}

export default SidebarText
