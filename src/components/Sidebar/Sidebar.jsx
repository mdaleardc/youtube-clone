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




const Sidebar = ({isSidebarOpen}) => {
  
  
  return (
    <>
    <div className='mt-[2rem] pl-4 pr-2 pt-[1.5rem] pb-[4rem] w-fit h-screen overflow-y-scroll hide-scrollbar text-gray-800 bg-gray-200 flex flex-col gap-3 tracking-wider font-roboto'>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <IoIosHome size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Home</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <IoLogoGameControllerB size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Games</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <MdSportsFootball size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Sports</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <SiYoutubeshorts size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Shorts</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <GrTechnology size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Technology</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <IoIosMusicalNotes size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Musics</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <FaBlogger size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Blogging</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]'>
    <FaRegNewspaper size='20'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>News</p>
    </div>
    <hr/>
    <div className='flex flex-col gap-3 tracking-tight'>
    <h3  className={`${isSidebarOpen ? "block" : "hidden"}`}>Subscribed</h3>
    <div className='flex flex-row items-center gap-2'>
    <img src={ismail} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>DevCode</p>
    </div>
    <div className='flex flex-row items-center gap-2'>
    <img src={simon} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>FreeCodeCamp</p>
    </div>
    <div className='flex flex-row items-center gap-2'>
    <img src={tom} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>GreatStack</p>
    </div>
    <div className='flex flex-row items-center gap-2'>
    <img src={cameron} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Thapa Technical</p>
    </div>
    <div className='flex flex-row items-center gap-2'>
    <img src={megan} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Patel MernStack</p>
    </div>
    <div className='flex flex-row items-center gap-2'>
    <img src={gerard} alt='' className='w-[40px] h-[40px] rounded-full'/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Mech Code</p>
    </div>
    </div>
    </div>
    </>
    )
}

export default Sidebar;