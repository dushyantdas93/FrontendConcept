import React from 'react'
import Component from './Component';

const Acordian = ({menubar}) => {
  return (
    
      <>
        <div
          className={`flex w-full ${
            menubar ? " lg:w-5/6 " : " lg:w-full "
          }  overflow-y-auto relative `}
        >
          <div
            className={`bg-gray-400 text-center py-2 flex capitalize fixed top-0 w-full ${
              menubar ? " lg:w-5/6 " : " lg:w-full "
            } flex  justify-between px-6`}
          >
            <p>q</p>
            <h1 className="text-4xl font-semibold text-red-800 ">accordian</h1>
            <p>w</p>
          </div>
          <div className="w-full h-screen flex p-20 gap-4 flex-wrap ">
            {[1, 1, 1, 1, 1, 1, 1].map((item, idx) => {
              return <Component item={item} className={""} />;
           })}
          </div>
        </div>
      </>
  
  );
}

export default Acordian