import React, { useEffect, useState } from 'react'
import Card from './Card'


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
    console.log(totalpages/10)
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
      <div className="overflow-y-auto w-full relative">
        <div
          className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full ${
            menubar ? " lg:w-5/6 " : " lg:w-full "
          }  px-6`}
        >
          <h1 className="text-4xl font-semibold text-red-800 ">Crud app</h1>
        </div>

        <div className="flex flex-wrap w-full  gap-2 justify-center  ">
          {products.map((item, idx) => {
            return <Card item={item} />;
          })}
          {products.length > 0 && (
            <div className="   right-48 w-4/6 h-10  border  rounded-xl flex justify-between  items-center overflow-hidden">
              <button
                className="border-r p-2 bg-blue-200 "
                onClick={() => handlepage(page - 1)}
              >
                pre
              </button>
              {/* {[...Array(totalpages)].map((_,id) => (<span className='cursor-pointer' onClick={()=>setpage(id+1 )}></span>))} */}
              <span
                className="cursor-pointer"
                onClick={() => setpage(id + 1)}
              >{page}/{totalpages}</span>
              <button
                className="border-l p-2 bg-blue-200 "
                onClick={() => handlepage(page + 1)}
              >
                nest
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Pagination