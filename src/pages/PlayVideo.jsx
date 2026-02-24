import React from 'react'
import PlayVideoCard from '../components/PlayVideoCard'
import VideoSidebar from '../components/VideoSidebar'

const PlayVideo = () => {
  return (
    <div className='flex mt-18'>
      <PlayVideoCard />
      <VideoSidebar />
    </div>
  )
}

export default PlayVideo
