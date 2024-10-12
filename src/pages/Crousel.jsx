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
      <Sidebar/>
      <div>
        {arr1.map((item, idx) => page == idx 

        
           
        )}

       <button onClick={()=>setpage(page-1)}>pre</button> <img src={arr1[0]} alt="" /> <button onClick={()=>setpage(page+1)}>nest</button>
        
       
        

    </div>
    </>
  )
}

export default Crousel