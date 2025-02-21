import { TbShare3 } from "react-icons/tb";
import { GiSaveArrow } from "react-icons/gi";
import { FaThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API_KEY, formatViewCount } from "../../data"
import axios from "axios";
import moment from "moment";



const PlayVideo = ({videoId}) => {
  
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  
  
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
  }, [videoId]);
  
  // console.log(apiData);
  
  useEffect(()=> {
    const fetchChannelData = async () => {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData[0].snippet.channelId}&key=${API_KEY}`;
      try {
        const response = await axios(channelData_url);
        setChannelData(response.data.items);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchChannelData();
  },[apiData, videoId]);
  
  //console.log(channelData);
  
  
  useEffect(() => {
    const fetchCommentData = async () => {
      const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
      try {
        const response = await axios(commentData_url);
        setCommentData(response.data.items);
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchCommentData()
  },[apiData, channelData, videoId]);
  
  //console.log(commentData);
  
  return (
    <>
    <div className='p-2'>
    <div className='w-full h-[100vh] overflow-y-scroll'>
    
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-full h-[250px]'></iframe>
    
    <h4  className='m-2'>{apiData? apiData[0].snippet.title : ""}</h4>
    <div className='ml-4'>
    <div className='flex flex-row justify-between items-center'>
    <p>{formatViewCount(apiData? apiData[0].statistics.viewCount : "")} views &bull; {apiData? moment(apiData[0].snippet.publishedAt).fromNow() : ""}</p>
    <div className='flex flex-row gap-4 items-center'>
    <span className='flex flex-row gap-1 items-center'><FaThumbsUp size='25'/>{apiData? formatViewCount(apiData[0].statistics.likeCount) : ""}</span>
    <span className='flex flex-row gap-1 items-center'><FaRegThumbsDown size='25'/></span>
    <span className='flex flex-row gap-1 items-center'><TbShare3 size='25'/>Share</span>
    <span className='flex flex-row gap-1 items-center'><GiSaveArrow size='25'/> Save</span>
    </div>
    </div>
    </div>
    <hr  className='my-1'/>
    <div className='m-1 ml-4 flex flex-col gap-4'>
    <div className='flex flex-row justify-between items-center gap-2'>
    <div className='flex flex-row gap-2'>
    <img src={channelData?channelData[0].snippet.thumbnails.medium.url:""} className='w-[40px] h-[40px] rounded-full align-bottom channelProfile'/>
    <span>
    <h4 className='text-xl font-medium text-gray-900 align-top'>{apiData?apiData[0].snippet.channelTitle:""}</h4>
    <span>{channelData? formatViewCount(channelData[0].statistics.subscriberCount): ""}</span>
    </span>
    </div>
    <button className='text-white bg-red-600 px-2 py-1 rounded-lg'>Subscribe</button>
    </div>
    <hr/>
    
    <h3 className='text-xl font-medium text-gray-800'>{apiData? formatViewCount(apiData[0].statistics.commentCount) : ""}</h3>
    {
     commentData.map((item) =>{
       return (
       <div className='flex flex-col' key={item.id}>
    <span className='flex flex-row items-center gap-2 text-xl font-medium'><img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} className='w-[40px] h-[40px] rounded-full'/> <h4 className='text-normal text-gray-800'>{item.snippet.topLevelComment.snippet.authorDisplayName}</h4> <span className='text-sm font-normal text-gray-500'>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></span>
    <div className='ml-[45px] text-sm font-normal text-gray-700'>
    <p className='overflow-hidden'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
    <span className='flex flex-row gap-4'><span className='flex flex-row items-center gap-2'><FaThumbsUp size='20'/>{formatViewCount(item.snippet.topLevelComment.snippet.likeCount)}</span> <span className='flex flex-row items-center gap-2'><FaRegThumbsDown size='20'/></span></span>
    </div>
    </div>
       )
     })
    }
    
    </div>
    </div>
    </div>
    </>
    )
    
}


export default PlayVideo;