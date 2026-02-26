import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Videos'
import axios from 'axios'


const Home = ({sidebar,category,setCategory,videos,converter}) => {

  return (
    <div>
      
      <div className='lg:flex mt-18'>
        <Sidebar sidebar={sidebar} />
        <Videos sidebar={sidebar} videos={videos} converter={converter} category={category} setCategory={setCategory} />
      </div>
    </div>
  )
}

export default Home
