import ismail from "../../assets/ismail.jpg";
import { TbShare3 } from "react-icons/tb";
import { GiSaveArrow } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa6";
import cameron from "../../assets/cameron.png"
import { useEffect, useState } from "react";
import { API_KEY, formatViewCount } from "../../data"
import axios from "axios";
import moment from "moment";



const PlayVideo = ({videoId}) => {
  
  const [apiData, setApiData] = useState(null);
  
  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      try {
        const response = await axios(videoDetails_url);
        setApiData(response.data.items);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchVideoData();
  }, [videoId])
  
  console.log(apiData);
  
  
  return (
    <>
    <div className='p-2'>
    <div className='w-full h-[100vh] overflow-y-scroll'>
    
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-full h-[250px]'></iframe>
    
    <h4  className='m-2'>Bets YouTube channel to learn Web Development</h4>
    <div className='ml-4'>
    <div className='flex flex-row justify-between items-center'>
    <p>{formatViewCount(apiData? apiData[0].statistics.viewCount : "")} views &bull; {apiData? moment(apiData[0].snippet.publishedAt).fromNow() : ""} ago</p>
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
    <div className='w-full flex flex-col'>
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
    </div>
    </>
    )
}


export default PlayVideo;