import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"



const  App = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  
  return (
    <>
    <Navbar setIsSidebarOpen={setIsSidebarOpen}  isSidebarOpen={isSidebarOpen}/>
    <Routes>
    <Route path='/' element={<Home isSidebarOpen={isSidebarOpen}/>}/>
    <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
