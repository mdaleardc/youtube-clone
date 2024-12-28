import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { useState } from 'react';




const Home = ({isSidebarOpen}) => {
  
  const [category, setCategory] = useState(0);
  
  
  return (
    <>
    <div>
    
    <div className='fixed top-0 left-0 z-40'>
    <Sidebar isSidebarOpen={isSidebarOpen} category={category} setCategory={setCategory}/>
    </div>
    <div className={`${isSidebarOpen ? "ml-[8.5rem]" : "ml-[1.5rem]"}  pt-[0.5rem]  text-gray-800`}>
    <Feed  category={category} />
    </div>
    
    </div>
    </>
    )
}


export default Home;