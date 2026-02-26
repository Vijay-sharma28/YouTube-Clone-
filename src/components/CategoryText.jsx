import React from 'react'

const CategoryText = ({categories,setCategory}) => {
  return (
    <>
    
      {categories.map((items,index) => {
        return <div key={index} onClick={()=>setCategory(items.code)} className={`border px-3 py-1 rounded-2xl w-full whitespace-nowrap hover:bg-gray-200 text-sm font-medium transition hover:cursor-pointer`}>
            {items.name}
        </div>
      })}
    
    </>
  )
}

export default CategoryText
