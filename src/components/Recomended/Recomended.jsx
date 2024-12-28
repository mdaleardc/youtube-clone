import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, formatViewCount } from "../../data";
import moment from "moment";





const Recommended = ({categoryId}) => {
  const [recommendedData, setRecommendedData] = useState([]);
  
  useEffect(()=> {
    const fetchRecommendedVidoe = async () => {
      const recommendedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      try {
        const response = await axios(recommendedVideo_url);
        setRecommendedData(response.data.items);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchRecommendedVidoe();
  },[categoryId]);
  
  
  return (
    <>
    <div className='mt[3rem] pt-[0.3rem] flex flex-col gap-4'>
    {
    recommendedData.map((item)=>{
    console.log(item);
      return (
      <div className='grid grid-cols-2 gap-1 cursor-pointer' key={item.id}>
    <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.localized.title} />
    </Link>
        <div>
        <h4 className='text-sm'>{item.snippet.localized.title}</h4>
        <h3 className='font-medium'>{item.snippet.channelTitle}</h3>
        <p>{formatViewCount(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
        </div>
    </div>
      )
    })
    }
    </div>
    </>
    )
}


export default Recommended;