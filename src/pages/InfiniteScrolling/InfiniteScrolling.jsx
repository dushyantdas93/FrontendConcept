import React, { useEffect, useState } from "react";
import Card from "./Card";

const InfiniteScrolling = () => {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, setTotalpages] = useState(0);

  const handelScroll =  () =>{
    console.log(document.documentElement.scrollHeight)
  }
  

  const productsFetch = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=15&skip=${page * 15 - 15}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalpages(data.total);
    }
    // console.log(totalpages / 10);
  };


  useEffect(() => {
    productsFetch();
  }, [page]);


  useEffect(() => {
    window.addEventListener("scroll", handelScroll)
   
  
  }, [])
  
  return (
    <>
      <div className="overflow-y-auto w-full relative">
        <div
          className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full ${
            menubar ? " lg:w-5/6 " : " lg:w-full "
          }  px-6`}
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
