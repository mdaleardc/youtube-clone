import { IoIosHome, IoLogoGameControllerB, IoIosMusicalNotes } from "react-icons/io";
import { MdSportsFootball, MdLiveTv } from "react-icons/md";
import { GrTechnology} from "react-icons/gr";
import { FaRegNewspaper, FaBlogger } from "react-icons/fa";
import ismail from "../../assets/ismail.jpg";
import gerard from "../../assets/gerard.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png"




const Sidebar = ({isSidebarOpen, category, setCategory}) => {
  
  
  return (
    <>
    <div className='mt-[2rem] pl-4 pr-2 pt-[1.5rem] pb-[4rem] w-fit h-screen overflow-y-scroll hide-scrollbar text-gray-800 bg-gray-200 flex flex-col gap-3 tracking-wider font-roboto'>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(0)}>
    <IoIosHome size='20' className={`${category === 0 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Home</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(20)}>
    <IoLogoGameControllerB size='20' className={`${category === 20 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Games</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(17)}>
    <MdSportsFootball size='20' className={`${category === 17 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Sports</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(24)}>
    <MdLiveTv size='20' className={`${category === 24 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Entertainment</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(28)}>
    <GrTechnology size='20' className={`${category === 28 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Technology</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(10)}>
    <IoIosMusicalNotes size='20' className={`${category === 10 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Musics</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(22)}>
    <FaBlogger size='20' className={`${category === 22 ? "border-b-[2px] border-red-500" : ""}`}/>
    <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Blogs</p>
    </div>
    <div className='flex flex-row gap-2 text font-medium cursor-pointer h-[1.5rem]' onClick={()=>setCategory(25)}>
    <FaRegNewspaper size='20' className={`${category === 25 ? "border-b-[2px] border-red-500" : ""}`}/>
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