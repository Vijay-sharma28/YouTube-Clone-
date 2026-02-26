import React, { useEffect, useState } from 'react'
import thumbnail from '../assets/thumbnail.jpg'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'

const VideoSidebar = ({apiKey,categoryId,converter}) => {

    const [sideVideos,setSideVideos] = useState([])

    const sideVideosData = async () => {

        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${apiKey}&maxResults=30`)
            setSideVideos(response.data.items)
        } catch (error) {
            console.log('Error...', error)
        }

    }

    useEffect(()=>{
        sideVideosData()
    },[categoryId])



    if(sideVideos.length===0){
        return <div className='p-4'>Loading...</div>
    }

    return (
        <div className='border lg:w-[35%]'>

            {sideVideos.map((items,index) => (

                <Link to={`/PlayVideo/${items.snippet.categoryId}/${items.id}`} key={index} className='p-3 flex gap-2 hover:cursor-pointer hover:bg-blue-50 rounded-xl'>
                    <img src={items.snippet.thumbnails.standard.url || items.snippet.thumbnails.high.url || items.snippet.thumbnails.default.url} alt="" className='w-[50%] object-cover aspect-video rounded-xl' />
                    <div className='flex flex-col gap-1'>
                        <p className='font-semibold break-all'>{items.snippet.title}</p>
                        <p className='text-gray-500 text-xs'>{items.snippet.channelTitle}</p>
                        <p className='text-gray-500 text-xs'>{converter(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()} </p>
                    </div>
                </Link>

            ))}


            

            

        </div>
    )
}

export default VideoSidebar
