import React, { useEffect, useState } from "react";
import Card from "./Card";

const InfiniteScrolling = () => {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, setTotalpages] = useState(0);

  

  const productsFetch = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=15&skip=${page }`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts((prev)=>[...prev,...data.products]);
      setTotalpages(data.total);
    }
    // console.log(totalpages / 10);
  };


  useEffect(() => {
    productsFetch();
    
 
  }, [page]);

   const handleScroll = async () => {
     console.log("hello");

     console.log(
       document.documentElement.scrollHeight,
       document.documentElement.scrollTop,
       window.innerHeight
     );
     try {
       if (document.documentElement.scrollHeight < document.documentElement.scrollTop + window.innerHeight + 1) {
         setpage(page+1)
       }
      
     } catch (error) {
       console.log(error)
      
     }
   };

  useEffect(() => {
   
    window.addEventListener("click", handleScroll)
    return () => window.removeEventListener("click", handleScroll);
    
  },[page]) 


  
  return (
    <>
      <div className="overflow-y-auto w-full relative">
        <div
          className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full  px-6`}
        >
          <h1 className="text-4xl font-semibold text-red-800 ">Infinite Scrolling
          </h1>
        </div>

        <div className="flex flex-wrap w-full  gap-2 justify-center  ">
          {products.map((item, idx) => {
            return <Card key={idx} item={item} />;
          })}
         
        </div>
      </div>
    </>
  );
}

export default InfiniteScrolling;
