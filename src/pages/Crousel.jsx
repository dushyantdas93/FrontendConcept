import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Crousel = () => {
  const arr1 = [
    "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiIZU2_B-cwF3LgRbkk9p0oEe4BZg8l9fxw&s",
    "https://images.pexels.com/photos/1869322/pexels-photo-1869322.jpeg?cs=srgb&dl=pexels-brett-sayles-1869322.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9vFh93Vn1dtnxnuMZ22SWL8sja_8oV9pZQ&s",
    "https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-cute-wallpapers-cats-wallpapers-hd-4k-wallpapers-desktop-wallpapers-hd-image_2562853.jpg",
  ];

  const [page, setpage] = useState(0)
  console.log(page)
  return (
    <>
      
      <div className='w-full  flex justify-center item-center gap-10 relative'>
        {arr1.map((item, idx) => page == idx 

        
           
        )}

       <button onClick={()=>setpage(page-1)} className=' absolute top-72 left-56 border px-5 rounded-lg bg-gray-300 font-semibold text-gray-700 py-1'>pre</button>
        <div className="py-32">
        <img src={arr1[0]} alt="" className='rounded-xl' />
        </div>
        <button className=' absolute top-72 right-56 border px-5 rounded-lg bg-gray-300 text-gray-700 py-1 font-semibold' onClick={()=>setpage(page+1)}>nest</button>
        
       
         

    </div>
    </>
  )
}

export default Crousel