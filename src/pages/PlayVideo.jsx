import React from 'react'
import PlayVideoCard from '../components/PlayVideoCard'
import VideoSidebar from '../components/VideoSidebar'
import { useParams } from 'react-router-dom'

const PlayVideo = ({apiKey,converter}) => {

  const {videoId,categoryId} = useParams() 

  return (
    <div className='xl:flex mt-18'>
      <PlayVideoCard videoId={videoId} apiKey={apiKey} converter={converter} />
      <VideoSidebar categoryId={categoryId} apiKey={apiKey} converter={converter} />
    </div>
  )
}

export default PlayVideo
