import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";




const Home = ({isSidebarOpen}) => {
  
  
  
  return (
    <>
    <div>
    
    <div className='fixed top-0 left-0 z-40'>
    <Sidebar isSidebarOpen={isSidebarOpen}/>
    </div>
    <div className={`${isSidebarOpen ? "ml-[9rem]" : "ml-[2rem]"}  pt-[0.5rem]  text-gray-800`}>
    <Feed />
    </div>
    
    </div>
    </>
    )
}


export default Home;