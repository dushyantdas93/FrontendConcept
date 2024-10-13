import React, { useState } from 'react'
import { Routes,Route} from "react-router-dom"
import Crud from './pages/Crud'
import Home from './pages/Home';
import Acordian from "./pages/Acordian"
import AdminDashboard from "./pages/AdminDashboard";
import InfiniteScrolling from "./pages/InfiniteScrolling";
import Pagination from "./pages/Pagination";
import SelectCountry from "./pages/SelectCountry";
import SidebarNavigation from "./pages/SidebarNavigation";
import TabSwitching from "./pages/TabSwitching";
import Dashboard from "./pages/Dashboard";
import Crousel from "./pages/Crousel"
import Sidebar from './pages/Sidebar';





const App = () => {
  const [menubar,setMenubar] = useState(true)
  return (
    <div className='flex w-screen h-screen relative '>
      <div className="absolute top-6 left-2 size-10 bg-gray-600 z-10 rounded-full  flex " onClick={()=>setMenubar(!menubar)} > 
      </div>
      {menubar && <Sidebar value={{menubar,setMenubar}}/>}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/crousel" element={<Crousel />} />
        <Route path="/crud" element={<Crud menubar={menubar}/>} />
        <Route path="/acordian" element={<Acordian />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/infiniteScrolling" element={<InfiniteScrolling />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/selectCountry" element={<SelectCountry />} />
        <Route path="/sidebarNavigation" element={<SidebarNavigation />} />
        <Route path="/tabSwitching" element={<TabSwitching />} />
        
      </Routes>
    </div>
  );
}

export default App