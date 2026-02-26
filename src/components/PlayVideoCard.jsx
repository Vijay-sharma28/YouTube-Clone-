import React, { useEffect, useState } from 'react'
import { FaDownload, FaRegBookmark, FaRegThumbsDown, FaRegThumbsUp, FaShare } from 'react-icons/fa'
import { FaEllipsis } from 'react-icons/fa6'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideoCard = ({apiKey,converter}) => {

    const {videoId} = useParams()

    const [data, setData] = useState()
    const [more,setMore] = useState(true)
    const [channelData,setChannelData] = useState(undefined)
    const [commentsData,setCommentsData] = useState([])
    
    

    const fetchVideoData = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`)
            setData(response.data.items[0])
        } catch (error) {
            console.log('Error...', error);
        }
    }
    useEffect(() => {
        fetchVideoData()
    },[videoId])


    const fetchChannelData = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${apiKey}`)
            setChannelData(response.data.items[0])
        } catch (error) {
            console.log('Error...', error);
        }
    }
    
    useEffect(() => {
        fetchChannelData()
    },[data])
    
    const fetchCommentsData = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${apiKey}&maxResults=15`)
            setCommentsData(response.data.items)
        } catch (error) {
            console.log('Error...', error);
        }
    }
    useEffect(() => {
        fetchCommentsData()
    },[data])


     if (!data || !channelData) { return <div className="w-[65%] p-4">Loading...</div> }


    return (
        <div className='border xl:w-[65%] p-2'>

            <iframe className='aspect-video' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <h1 className='font-bold p-2'>{data ? data.snippet.title : "Title Not Found"}</h1>

            <div className='lg:flex justify-between '>
                <div className='flex items-center gap-5'>
                    <div className='flex gap-1'>
                        <img src={channelData?channelData.snippet.thumbnails.high.url || channelData.snippet.thumbnails.medium.url || channelData.snippet.thumbnails.default.url :""} alt="" className='w-10 h-10 rounded-full hover:cursor-pointer' />
                        <div>
                            <h2 className='font-semibold px-2 hover:cursor-pointer'>{data.snippet.channelTitle}</h2>
                            <h3 className='text-gray-600 text-xs px-2 hover:cursor-pointer'>{channelData?converter(channelData.statistics.subscriberCount):"00"} subscribers</h3>
                        </div>
                    </div>
                    <button className='bg-black text-white px-3 py-1.5 rounded-3xl hover:cursor-pointer'>Subscribe</button>
                </div>

                <div className='flex mt-3 gap-1 lg:gap-3'>
                    <button className='border hover:cursor-pointer px-3 py-1 flex items-center gap-2 lg:gap-3 rounded-3xl'><FaRegThumbsUp className='text-sm lg:text-xl' /><span className='text-sm'>{converter(data.statistics.likeCount)}</span><FaRegThumbsDown className='text-sm lg:text-xl' /></button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-2 lg:gap-3 rounded-3xl'><FaShare className='text-sm lg:text-xl' />Share</button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-2 lg:gap-3 rounded-3xl'><FaRegBookmark className='text-sm lg:text-xl' />Save</button>
                    <button className='hidden border hover:cursor-pointer px-3 py-1.5 lg:flex items-center gap-2 lg:gap-3 rounded-3xl'><FaDownload className='text-sm lg:text-xl' />Download</button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-2 lg:gap-3 rounded-3xl'><FaEllipsis className='text-sm lg:text-xl' /></button>
                </div>
            </div>

            {/* Description */}
            <div className={`z-0 mt-3 p-3 rounded-2xl bg-gray-200 hover:bg-blue-100 transition-all relative ${more?'max-h-45 overflow-hidden':''}`}>
                <p className='font-semibold'>{converter(data.statistics.viewCount)} views &bull; {moment(data.snippet.publishedAt).fromNow()}</p>
                <p className='mb-3'>{data.snippet.description}</p>
                <p className={`font-semibold hover:cursor-pointer absolute bottom-0 bg-gray-200 hover:bg-blue-100 ${more?'w-full':''}`} onClick={()=> setMore(prev => !prev)}>{more?"...more":"...less"}</p>
            </div>

            {/* Comments  */}

            <div className='xl:p-3 mt-3'>
                <h2 className='font-semibold text-xl'>{converter(data.statistics.commentCount)} Comments</h2>
                {commentsData.map((items,index)=>(
                
                    <div key={index}>
                        <div className='flex gap-2 p-2 mt-2'>
                            <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                            <div className='text-sm'>
                                <p className='hover:cursor-pointer'>{items.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                <p>{items.snippet.topLevelComment.snippet.textOriginal}</p>
                                <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp /> {converter(items.snippet.topLevelComment.snippet.likeCount)} <FaRegThumbsDown /> Reply</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            

        </div>
    )
}

export default PlayVideoCard

// 2:03:00