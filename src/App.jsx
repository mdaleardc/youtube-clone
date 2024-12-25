import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

import { Routes, Route } from "react-router-dom"


const  App = () => {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
