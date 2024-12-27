import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recomended from "../../components/Recomended/Recomended";
import { useParams } from "react-router-dom";



const Video = () => {
  
  const {videoId, categoryId} = useParams();
  
  return (
    <>
    <div className='mt-[3rem] grid grid-cols-10'>
    <div className='col-span-10 sm:col-span-6'>
    <PlayVideo videoId={videoId}/>
    </div>
    <div className='hidden sm:block col-span-4 h-[100vh] overflow-y-scroll'>
    <Recomended/>
    </div>
    </div>
    </>
    )
}


export default Video;