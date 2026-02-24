import React, { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = "AIzaSyAkvhkcUANYV1ZYCUj8KbT7tKWJoCVktsc"

const api = () => {
  const [videos, setVideos] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${apiKey}`);
      setVideos(response.data.items)
      console.log(response.data.items)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>hello</h1>
      {videos.map(el => {
        <div>
          <img src={el.snippet.thumbnails.medium.url} alt="" />
          <h3>{el.snippet.title}</h3>
          <p>{el.snippet.channelTitle}</p>
          <p>{el.statistics.viewCount} views</p>
        </div>
      })}
    </div>
  )
}

export default api
