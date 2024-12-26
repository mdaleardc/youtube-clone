import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import ismail from "../../assets/ismail.jpg";
import gerard from "../../assets/gerard.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png"
import { Link } from "react-router-dom";




const Feed = () => {
  
  const thumbnailData = [
  {
    thumbnail: thumbnail1,
    profilePic: ismail
  }, 
  {
    thumbnail: thumbnail2,
    profilePic: gerard
  }, 
  {
    thumbnail: thumbnail3,
    profilePic: simon
  },
  {
    thumbnail: thumbnail4,
    profilePic: tom
  },
  {
    thumbnail: thumbnail5,
    profilePic: megan
  },
  {
    thumbnail: thumbnail6,
    profilePic: cameron
  },
  {
    thumbnail: thumbnail7,
    profilePic: ismail
  },
  {
    thumbnail: thumbnail8,
    profilePic: gerard
  }
    ];
  
  return (
    <>
    <div className='m-[3rem]'>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 rounded'>
    {
      thumbnailData.map((item, index) => {
        return (
        <Link to={'video/20/234'} key={index} className='bg-gray-200 rounded-xl  p-1'>
        <img src={item.thumbnail} alt={`${item} png`} className='rounded-md'/>
        <h2 className='text-xl tracking-tight'>Name is a letter optionally followed by one or more letter, digits, or underbars</h2>
        <div className='flex flex-row gap-4 items-center'>
        <img src={item.profilePic} alt={`${item} png`} className='w-[40px] h-[40px] rounded-full'/>
        <h3 className='font-semibold'>GreateStack</h3>
        </div>
        <p>34k views &bull; 2 days ago</p>
        </Link>
        )
      })
    }
    </div>
    </div>
    </>
    )
}

export default Feed;