import React from 'react'
import vdo from '../assets/vdo.mp4'
import { FaDownload, FaRegBookmark, FaRegThumbsDown, FaRegThumbsUp, FaShare } from 'react-icons/fa'
import { FaEllipsis } from 'react-icons/fa6'
import profile from '../assets/vijay.jpg'

const PlayVideoCard = () => {
    return (
        <div className='border w-[65%] p-4 pb-10'>

            <video src={vdo} controls autoPlay loop className='aspect-video rounded-xl'></video>
            {/* <iframe className='aspect-video' src="https://www.youtube.com/embed/Zb1zVeXLUf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

            <h1 className='font-bold p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consectetur enim nostrum ipsa voluptates expedita cupiditate omnis aliquid pariatur voluptas?</h1>

            <div className='flex justify-between '>
                <div className='flex items-center gap-5'>
                    <div className='flex gap-1'>
                        <img src={profile} alt="" className='w-10 h-10 rounded-full hover:cursor-pointer' />
                        <div>
                            <h2 className='font-semibold px-2 hover:cursor-pointer'>Channel Name</h2>
                            <h3 className='text-gray-600 text-xs px-2 hover:cursor-pointer'>subscribers</h3>
                        </div>
                    </div>
                    <button className='bg-black text-white px-3 py-1.5 rounded-3xl hover:cursor-pointer'>Subscribe</button>
                </div>
                <div className='flex gap-3'>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-3 rounded-3xl'><FaRegThumbsUp className='text-xl' />53K<FaRegThumbsDown className='text-xl' /></button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-3 rounded-3xl'><FaShare className='text-xl' />Share</button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-3 rounded-3xl'><FaRegBookmark className='text-xl' />Save</button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-3 rounded-3xl'><FaDownload className='text-xl' />Download</button>
                    <button className='border hover:cursor-pointer px-3 py-1.5 flex items-center gap-3 rounded-3xl'><FaEllipsis className='text-xl' /></button>
                </div>
            </div>

            {/* Description */}
            <div className='mt-3 p-3 rounded-2xl bg-gray-200 hover:bg-blue-100 transition-all'>
                <p className='font-semibold'>76K views 4 weeks ago</p>
                <p>Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni voluptatum, quae quos repellendus, sed voluptas fugiat temporibus dicta reprehenderit non? Veniam distinctio tempora enim inventore voluptates praesentium fugiat.</p>
                <p className='font-semibold hover:cursor-pointer'>...more</p>
            </div>

            {/* Comments  */}
            <div className='p-3 mt-3'>
                <h2 className='font-semibold text-xl'>130 Comments</h2>
                
                <div className='flex gap-3 p-2 mt-2'>
                    <img src={profile} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                    <div>
                        <p className='hover:cursor-pointer'>@vijay</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint quo, et delectus quod sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor autem odio possimus accusantium vel accusamus deserunt quo sapiente quam. .</p>
                        <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp/> 37 <FaRegThumbsDown/> Reply</p>
                    </div>
                </div>

                <div className='flex gap-3 p-2 mt-2'>
                    <img src={profile} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                    <div>
                        <p className='hover:cursor-pointer'>@vijay</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint quo, et delectus quod sit.</p>
                        <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp/> 37 <FaRegThumbsDown/> Reply</p>
                    </div>
                </div>

                <div className='flex gap-3 p-2 mt-2'>
                    <img src={profile} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                    <div>
                        <p className='hover:cursor-pointer'>@vijay</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint quo, et delectus quod sit.</p>
                        <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp/> 37 <FaRegThumbsDown/> Reply</p>
                    </div>
                </div>

                <div className='flex gap-3 p-2 mt-2'>
                    <img src={profile} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                    <div>
                        <p className='hover:cursor-pointer'>@vijay</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint quo, et delectus quod sit.</p>
                        <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp/> 37 <FaRegThumbsDown/> Reply</p>
                    </div>
                </div>

                <div className='flex gap-3 p-2 mt-2'>
                    <img src={profile} alt="" className='w-8 h-8 rounded-full hover:cursor-pointer' />
                    <div>
                        <p className='hover:cursor-pointer'>@vijay</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sint quo, et delectus quod sit.</p>
                        <p className='flex gap-3 items-center mt-2'><FaRegThumbsUp/> 37 <FaRegThumbsDown/> Reply</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PlayVideoCard

// 2:03:00