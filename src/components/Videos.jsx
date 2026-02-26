import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Category from './Category'

const Videos = ({sidebar,videos,converter,category,setCategory}) => {



  return (
    <div className='relative pt-10'>
      <Category setCategory={setCategory} sidebar={sidebar} />

      <div className={`lg:p-5 lg:${sidebar ? ' lg:ml-50 ' : ' lg:ml-20'} grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3`}>

        {videos.map((items, index) => {
          return <Link to={`PlayVideo/${category}/${items.id}`} key={index} className={`p-3 rounded-2xl hover:cursor-pointer hover:bg-blue-50 transition-all`}>
            <img src={items.snippet.thumbnails.high.url || items.snippet.thumbnails.standard.url} alt="" className='w-full aspect-video object-cover rounded-xl' />
            <p className='font-semibold mt-0.5 px-2'>{items.snippet.title}</p>
            <h2 className='text-gray-700 mt-0.5 px-2'>{items.snippet.channelTitle}</h2>
            <p className='text-gray-700 mt-0.5 px-2'>{converter(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
          </Link>
        })}

      </div>
      
    </div>
  )
}

export default Videos
