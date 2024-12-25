import { IoMdMenu, IoMdSearch, IoMdCloudUpload, IoIosMore, IoMdNotifications } from "react-icons/io";
import { TiSocialVimeoCircular } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  
  
  
  return (
    <nav className='w-full h-[3rem] bg-gray-200 flex flex-row justify-between items-center fixed top-0 left-0 z-50 px-4'>
    <div className='flex flex-row gap-4'>
    <IoMdMenu size='25' className='cursor-pointer'/>
    <TiSocialVimeoCircular size='25' className='cursor-pointer'/>
    </div>
    
    <div className='flex flex-row gap-4'>
    <input type='text' placeholder='Search' className='cursor-pointer outline-none border border-gray-600 rounded focus:ring-[1px] ring-green-400'/>
    <IoMdSearch size='25' className='cursor-pointer'/>
    </div>
    
    <div className='flex flex-row justify-between items-center gap-6'>
    <IoMdCloudUpload size='25' className='cursor-pointer'/>
    <IoIosMore size='25' className='cursor-pointer'/>
    <IoMdNotifications size='25' className='cursor-pointer'/>
    <CgProfile size='25' className='cursor-pointer'/>
    </div>
    </nav>
    )
}


export default Navbar;