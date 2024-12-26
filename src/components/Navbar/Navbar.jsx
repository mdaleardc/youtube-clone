import { IoMdSearch, IoMdCloudUpload, IoIosMore, IoMdNotifications } from "react-icons/io";
import { TbCircleLetterD } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";



const Navbar = ({setIsSidebarOpen, isSidebarOpen}) => {
  
  
  
  return (
    <nav className='w-full h-[3rem] bg-gray-200 grid grid-cols-12 justify-between items-center fixed top-0 left-0 z-50 px-4 gap-2'>
    <div className='flex flex-row gap-2 col-span-3'>
    <BiMenuAltLeft size='25' className='cursor-pointer hidden sm:block' onClick={()=>setIsSidebarOpen(prev => !prev)}/>
    <div className='flex flex-row items-center gap-2'>
    <TbCircleLetterD size='25' className='cursor-pointer text-[#FF0045]'/>
    <h1 className='hidden sm:block align-bottom mt-0.5 font-black text-[#FF0045]'>DevTube</h1>
    </div>
    </div>
    
    <div className='flex flex-row gap-4 col-span-5 w-full'>
    <input type='text' placeholder='Search' className='w-4/5 pl-2 cursor-pointer outline-none border border-gray-400 rounded focus:ring-[1px] ring-green-400'/>
    <IoMdSearch size='25' className='cursor-pointer'/>
    </div>
    
    <div className='ml-auto flex flex-row justify-end items-center gap-2 sm:gap-4 col-span-4'>
    <IoIosMore size='25' className='cursor-pointer'/>
    <IoMdCloudUpload size='25' className='cursor-pointer'/>
    <IoMdNotifications size='25' className='cursor-pointer'/>
    <CgProfile size='25' className='cursor-pointer'/>
    </div>
    </nav>
    )
}


export default Navbar;