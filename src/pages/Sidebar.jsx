import React from "react";
import { Link } from "react-router-dom";
       
const linkItem = [{to:"/",title:"home"},{to:"/crud",title:"crud"},{to:"/crousel",title:"crousel"},{to:"/acordian",title:"acordian"},{to:"/adminDashboard",title:"adminDashboard"},{to:"/dashboard",title:"dashboard"},{to:"/infiniteScrolling",title:"infiniteScrolling"},{to:"/pagination",title:"pagination"},{to:"/selectCountry",title:"selectCountry"},{to:'/tabSwitching',title:"tabSwitching"},{to:"/",title:"home"},{to:"/crud",title:"crud"},{to:"/crousel",title:"crousel"},{to:"/acordian",title:"acordian"},{to:"/adminDashboard",title:"adminDashboard"},{to:"/dashboard",title:"dashboard"},{to:"/infiniteScrolling",title:"infiniteScrolling"},{to:"/pagination",title:"pagination"},{to:"/selectCountry",title:"selectCountry"},{to:'/tabSwitching',title:"tabSwitching"}]

const Sidebar = ({value}) => {
  return (
    <div className={`flex flex-col h-screen w-1/2 lg:w-1/6 gap-6 py-6 bg-gray-400 px-6 overflow-y-auto absolute lg:relative z-10 `}>
      <h1 className="text-2xl font-semibold sticky right-10 lg:right-4 cursor-pointer  " onClick={()=>value.setMenubar(false)}>Close...</h1>
      {linkItem.map((item,idx)=>{
        return <Link key={idx} to={item.to}>
               <button className="capitalize font-semibold" >{item.title}</button>        
               </Link>
      })}
    </div>
  );
};

export default Sidebar;
