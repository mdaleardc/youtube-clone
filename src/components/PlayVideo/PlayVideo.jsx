import video from "../../assets/video.mp4";
import ismail from "../../assets/ismail.jpg";
import { CgProfile } from "react-icons/cg";
import { TbShare3 } from "react-icons/tb";
import { GiSaveArrow } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa6";



const PlayVideo = () => {
  
  
  
  return (
    <>
    <div>
    <div>
    <video src={video} controls autoPlay muted></video> 
    <h4>Bets YouTube channel to learn Web Development</h4>
    <div>
    <p>12988 views &bull; 3 days ago</p>
    <div className='flex flex-row gap-4 items-center'>
    <span className='flex flex-row gap-1 items-center'><FaThumbsUp size='25'/> 231</span>
    <span className='flex flex-row gap-1 items-center'><FaRegThumbsDown size='25'/> 3</span>
    <span className='flex flex-row gap-1 items-center'><TbShare3 size='25'/> Share</span>
    <span className='flex flex-row gap-1 items-center'><GiSaveArrow size='25'/> Save</span>
    </div>
    </div>
    <hr />
    <div className='flex flex-row items-center gap-4'>
    <img src={ismail} alt=''  className='w-[40px] h-[40px] rounded-full'/>
    <div className='flex flex-col '>
    <p>DevCode</p>
    <span>1M Subscribers</span>
    </div>
    <button>Subscribe</button>
    </div>
    </div>
    </div>
    </>
    )
}


export default PlayVideo;