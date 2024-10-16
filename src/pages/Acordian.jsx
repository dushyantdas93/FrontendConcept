import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Acordian = ({menubar}) => {
  const [open,setOpen] = useState(false)
  return (
    <>
  <div className={`flex w-full ${ menubar ? " lg:w-5/6 " :" lg:w-full " }  overflow-y-auto relative `}>
     
      <div className={`bg-gray-400 text-center py-2 flex capitalize fixed top-0 w-full ${ menubar ? " lg:w-5/6 " :" lg:w-full " } flex  justify-between px-6`}><p>q</p><h1 className="text-4xl font-semibold text-red-800 ">accordian</h1><p>w</p></div>
        <div className="w-full h-screen flex  justify-start items-start p-20 gap-4 flex-wrap">
   {[1,1,1,1,1,1,1].map((item,idx)=>{
    return <div className={`border rounded-lg px-4 ${open ? " h-auto " : ' h-10 '} w-full lg:w-2/5 flex flex-col relative  overflow-hidden`}>
    <button className='absolute top-2 right-3' onClick={()=>setOpen(!open)}>close</button>
    <h4>what is your name ?</h4>
    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, minus sed? Quasi non temporibus inventore magni. Assumenda ipsa inventore magni omnis ipsum, rem ipsam amet repellendus. Necessitatibus inventore harum laborum reiciendis repudiandae dolores error soluta officiis architecto ratione, blanditiis sed! Laboriosam alias culpa id exercitationem natus suscipit rem possimus qui sapiente, deleniti veniam laudantium cupiditate aut reiciendis accusantium, quae nemo ipsam dolorem, minima quod explicabo? Molestias odit deserunt odio illum? Fuga nemo repellat exercitationem similique nisi tempore ut enim. Laudantium nulla ut architecto similique optio mollitia ipsa, inventore facilis at excepturi sunt iste officia rem hic ratione expedita vitae reiciendis quidem, cum distinctio veritatis. Unde doloribus quia inventore vitae, impedit fuga adipisci explicabo placeat nisi illum itaque aliquam, hic maiores. Aliquam laborum velit repudiandae repellat explicabo laboriosam, voluptatum blanditiis cumque distinctio recusandae? Officia rem cupiditate repellat? Unde quas, iste officiis quia minus odio vel, architecto quidem numquam omnis non, mollitia obcaecati enim iure? Autem natus cum adipisci? Iste at hic quisquam quo aut non, optio, aliquid odit, laudantium cupiditate eius natus ad iure? Non harum, cupiditate incidunt nesciunt repudiandae voluptatum distinctio sed perspiciatis est vel libero illo velit laboriosam beatae architecto doloribus! Atque at unde iste tenetur, suscipit delectus voluptates?</p>
    
    </div>
   })}
   
        </div>
    </div>
    </>
  )
}

export default Acordian