import { Link } from "react-router-dom";
import { API_KEY, formatViewCount } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";



const Feed = ({category}) => {
  
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    
  const fetchData = async () => {
    const vedio_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=BD&videoCategoryId=${category}&key=${API_KEY}`;
    try {
    const response = await axios(vedio_url);
    setData(response.data.items)
    } catch (error) {
      console.error(error.message);
    }
  };
  
  fetchData();
  },[category])
  
  
  
  return (
    <>
    <div className='w-full pr-2 m-[3rem]'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4 rounded'>
    {
      data.map((item) => {
        return (
        <div className='bg-gray-200 rounded-xl  p-1'  key={item.id}>
        <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.localized.title} className='rounded-md w-full'/>
        </Link>
        <h2 className='text-xl tracking-tight'>{item.snippet.localized.title}</h2>
        <div className='flex flex-row gap-4 items-center'>
        <h3 className='font-semibold'>{item.snippet.channelTitle}</h3>
        </div>
        <p>{formatViewCount(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </div>
        )
      })
    }
    </div>
    </div>
    </>
    )
}

export default Feed;