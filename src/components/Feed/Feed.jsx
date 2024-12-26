import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { Link } from "react-router-dom";




const Feed = () => {
  
  const thumbnailData = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7, thumbnail8]
  
  return (
    <>
    <div className='m-[3rem]'>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 rounded'>
    {
      thumbnailData.map((item, index) => {
        return (
        <Link to={'video/20/234'} key={index}>
        <img src={item} alt={`${item} png`} className='rounded'/>
        <h2 className='text-xl tracking-tight'>Name is a letter optionally followed by one or more letter, digits, or underbars</h2>
        <h3 className='font-medium'>GreateStack</h3>
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