import { IoIosHome, IoLogoGameControllerB, IoMdCar, IoIosMusicalNotes } from "react-icons/io";
import { MdSportsFootball } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GrTechnology, GrBlog } from "react-icons/gr";
import { FaRegNewspaper, FaBlogger } from "react-icons/fa";




const Sidebar = () => {
  
  
  return (
    <>
    <div className='mt-[2rem] px-1 pt-[1.5rem] pb-[0.5rem] w-2/12 h-screen bg-gray-100 flex flex-col gap-1'>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <IoIosHome size='25'/>
    <p>Home</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <IoLogoGameControllerB size='25'/>
    <p>Games</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <MdSportsFootball size='25'/>
    <p>Sports</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <SiYoutubeshorts size='25'/>
    <p>Shorts</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <GrTechnology size='25'/>
    <p>Technology</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <IoIosMusicalNotes size='25'/>
    <p>Musics</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <FaBlogger size='25'/>
    <p>Blogging</p>
    </div>
    <div className='flex flex-row gap-2 text-xl font-medium cursor-pointer'>
    <FaRegNewspaper size='25'/>
    <p>News</p>
    </div>
    </div>
    </>
    )
}

export default Sidebar;