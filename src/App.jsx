import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';



const  App = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  
  return (
    <>
    <Navbar setIsSidebarOpen={setIsSidebarOpen}/>
    <Routes>
    <Route path='/' element={<Home isSidebarOpen={isSidebarOpen}/>}/>
    <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    <SpeedInsights />
    </>
  )
}

export default App
