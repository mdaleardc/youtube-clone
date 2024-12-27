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





const Recommended = () => {
  
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
    <div className='mt[3rem] pt-[0.3rem] flex flex-col gap-4'>
    {
      thumbnailData.map((item, index) => {
        
        return (
    <div className='grid grid-cols-2 gap-1' key={index}>
    <Link to='video/23/435'>
        <img src={item.thumbnail} alt={`thumbnail`} />
    </Link>
        <div>
        <h4 className='text-sm'>The best video to learn ReacJs</h4>
        <h3 className='font-medium'>GreateStack</h3>
        <p>34k views &bull; 2 days ago</p>
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