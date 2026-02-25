import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import PlayVideo from './pages/PlayVideo'

const App = () => {

  const apiKey = import.meta.env.VITE_YOUTUBE_API

  const [sidebar,setSidebar] = useState(true)
  const [category,setCategory] = useState(0)
  const [videos,setVideos] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`) 
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
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} category={category} setCategory={setCategory} videos={videos} converter={converter} />} />
        <Route path='/PlayVideo/:categoryId/:videoId' element={<PlayVideo apiKey={apiKey} converter={converter} category={category} />} />
      </Routes>
    </div>
  )
}

export default App
