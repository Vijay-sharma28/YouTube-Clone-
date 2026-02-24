import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Videos'
import axios from 'axios'


const Home = ({sidebar}) => {

  const apiKey = import.meta.env.VITE_YOUTUBE_API

  const [category,setCategory] = useState(0)
  const [videos,setVideos] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`) 
      setVideos(response.data.items)
    } catch (error) {
      console.log('Error..' ,error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[category])

  const converter = (value) => {
    if(value>=1000000){
      return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
      return Math.floor(value/1000)+"K"
    }
    else{
      return value
    }
  }

  return (
    <div>
      
      <div className='flex mt-18'>
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
        <Videos sidebar={sidebar} videos={videos} converter={converter} category={category} />
      </div>
    </div>
  )
}

export default Home
