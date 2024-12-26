import video from "../../assets/video.mp4";
import ismail from "../../assets/ismail.jpg";
import { CgProfile } from "react-icons/cg";
import { TbShare3 } from "react-icons/tb";
import { GiSaveArrow } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa6";
import cameron from "../../assets/cameron.png"
import Recomended from "../Recomended/Recomended"



const PlayVideo = () => {
  
  
  
  return (
    <>
    <div className='mt-[3rem] pt-[0.3rem] grid grid-cols-10 gap-4'>
    <div className='col-span-10 sm:col-span-6 w-full h-[100vh] overflow-y-scroll p-2'>
    <video src={video} controls autoPlay muted className='w-full'></video> 
    <h4  className='m-2'>Bets YouTube channel to learn Web Development</h4>
    <div className='ml-4'>
    <div className='flex flex-row justify-between items-center'>
    <p>12988 views &bull; 3 days ago</p>
    <div className='flex flex-row gap-4 items-center'>
    <span className='flex flex-row gap-1 items-center'><FaThumbsUp size='25'/> 231</span>
    <span className='flex flex-row gap-1 items-center'><FaRegThumbsDown size='25'/> 3</span>
    <span className='flex flex-row gap-1 items-center'><TbShare3 size='25'/> Share</span>
    <span className='flex flex-row gap-1 items-center'><GiSaveArrow size='25'/> Save</span>
    </div>
    </div>
    </div>
    <hr  className='my-1'/>
    <div className='m-1 ml-4 flex flex-col gap-4'>
    <div className='flex flex-row justify-between items-center gap-2'>
    <div className='flex flex-row gap-2'>
    <img src={ismail} alt=''  className='w-[40px] h-[40px] rounded-full align-bottom'/>
    <span>
    <h4 className='text-xl font-medium text-gray-900 align-top'>DevCode</h4>
    <span>1M Subscribers</span>
    </span>
    </div>
    <button className='text-white bg-red-600 px-2 rounded-xl'>Subscribe</button>
    </div>
    <hr/>
    <h3 className='text-xl font-medium text-gray-800'>Comments 345</h3>
    <div className='flex flex-col'>
    <span className='flex flex-row items-center gap-2 text-xl font-medium'><img src={cameron} className='w-[40px] h-[40px] rounded-full'/> <h4 className='text-gray-800'>MrBeast</h4> <span className='text-sm font-normal text-gray-500'>2 days ago</span></span>
    <div className='ml-[45px] text-sm font-normal text-gray-700'>
    <p>Wow this is a very useful content. Thank you</p>
    <span className='flex flex-row gap-4'><span className='flex flex-row items-center gap-2'><FaThumbsUp size='20'/> 235</span> <span className='flex flex-row items-center gap-2'><FaRegThumbsDown size='20'/></span></span>
    </div>
    </div>
    <div className='flex flex-col'>
    <span className='flex flex-row items-center gap-2 text-xl font-medium'><img src={cameron} className='w-[40px] h-[40px] rounded-full'/> <h4 className='text-gray-800'>MrBeast</h4> <span className='text-sm font-normal text-gray-500'>2 days ago</span></span>
    <div className='ml-[45px] text-sm font-normal text-gray-700'>
    <p>Wow this is a very useful content. Thank you</p>
    <span className='flex flex-row gap-4'><span className='flex flex-row items-center gap-2'><FaThumbsUp size='20'/> 235</span> <span className='flex flex-row items-center gap-2'><FaRegThumbsDown size='20'/></span></span>
    </div>
    </div>
    <div className='flex flex-col'>
    <span className='flex flex-row items-center gap-2 text-xl font-medium'><img src={cameron} className='w-[40px] h-[40px] rounded-full'/> <h4 className='text-gray-800'>MrBeast</h4> <span className='text-sm font-normal text-gray-500'>2 days ago</span></span>
    <div className='ml-[45px] text-sm font-normal text-gray-700'>
    <p>Wow this is a very useful content. Thank you</p>
    <span className='flex flex-row gap-4'><span className='flex flex-row items-center gap-2'><FaThumbsUp size='20'/> 235</span> <span className='flex flex-row items-center gap-2'><FaRegThumbsDown size='20'/></span></span>
    </div>
    </div>
    <div className='flex flex-col'>
    <span className='flex flex-row items-center gap-2 text-xl font-medium'><img src={cameron} className='w-[40px] h-[40px] rounded-full'/> <h4 className='text-gray-800'>MrBeast</h4> <span className='text-sm font-normal text-gray-500'>2 days ago</span></span>
    <div className='ml-[45px] text-sm font-normal text-gray-700'>
    <p>Wow this is a very useful content. Thank you</p>
    <span className='flex flex-row gap-4'><span className='flex flex-row items-center gap-2'><FaThumbsUp size='20'/> 235</span> <span className='flex flex-row items-center gap-2'><FaRegThumbsDown size='20'/></span></span>
    </div>
    </div>
    </div>
    </div>
    <div  className='hidden sm:block col-span-4 w-full h-[100vh] overflow-y-scroll border-l-[1px]'>
    <Recomended />
    </div>
    </div>
    </>
    )
}


export default PlayVideo;