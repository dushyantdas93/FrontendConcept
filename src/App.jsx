import React from 'react'
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





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
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