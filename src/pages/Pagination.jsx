import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar.jsx'

const Pagination = () => {


  const [products,setProducts] = useState([])
  const [page,setpage] = useState(1)
  const [totalpages,setTotalpages] = useState(0)
  
   const productsFetch = async ()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
    const data = await res.json()
    if(data && data.products){
      setProducts(data.products)
      setTotalpages(data.total)
    }
    console.log(totalpages)
   }

   const handlepage = (id)=>{
   if(
    id >= 1 && id<=totalpages && id !==page
   )setpage(id)
   }


   useEffect(()=>{
    productsFetch()
   },[page])
  return (
    <>
   
    <div className='overflow-y-auto w-full relative'>
      <div className="text-center w-full py-4"> pagination </div>

      <div className="flex flex-wrap w-full  gap-2 justify-center  ">
      {products.map((item,idx)=>{
        return <div className='w-72 h-3/4 border  p-4 rounded-lg shadow-xl' key={idx}>
          <img src={item.images} alt="" />
<h1> {item.title}</h1>
<br />
       <p> {item.description}</p> </div>
      })}
      </div>
     {products.length > 0 &&  <div className="   right-48 w-4/6 h-10  border  rounded-xl flex justify-between  items-center overflow-hidden">
      <button className='border-r p-2 bg-blue-200 ' onClick={()=>handlepage(page-1)}>pre</button>
      {[...Array(totalpages)].map((_,id) => (<span className='cursor-pointer' onClick={()=>setpage(id+1 )}>{id+1}</span>))}
      <button className='border-l p-2 bg-blue-200 ' onClick={()=>handlepage(page+1)}>nest</button>
      
      </div>}


    </div>
    </>
  )
}

export default Pagination