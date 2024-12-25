import { IoIosHome, IoLogoGameControllerB, IoMdCar, IoIosMusicalNotes } from "react-icons/io";
import { MdSportsFootball } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GrTechnology, GrBlog } from "react-icons/gr";
import { FaRegNewspaper, FaBlogger } from "react-icons/fa";
import ismail from "../../assets/ismail.jpg";
import gerard from "../../assets/gerard.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png"




const Sidebar = () => {
  
  
  return (
    <>
    <div className='mt-[2rem] px-2 pt-[1.5rem] pb-[0.5rem] w-4/12 sm:w-2/12 h-screen text-gray-800 bg-gray-100 flex flex-col gap-2 tracking-wider font-roboto'>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <IoIosHome size='20'/>
    <p>Home</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <IoLogoGameControllerB size='20'/>
    <p>Games</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <MdSportsFootball size='20'/>
    <p>Sports</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <SiYoutubeshorts size='20'/>
    <p>Shorts</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <GrTechnology size='20'/>
    <p>Technology</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <IoIosMusicalNotes size='20'/>
    <p>Musics</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <FaBlogger size='20'/>
    <p>Blogging</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer'>
    <FaRegNewspaper size='20'/>
    <p>News</p>
    </div>
    <hr/>
    <div>
    <h3>Subscribers</h3>
    <div>
    <img src={ismail} alt='' />
    <p></p>
    </div>
    </div>
    </div>
    </>
    )
}

export default Sidebar;