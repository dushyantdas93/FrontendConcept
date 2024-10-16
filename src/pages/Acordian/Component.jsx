import React, { useState } from 'react'

const Component = ({ item, className }) => {
  const [show,setShow] = useState(false)
  return <div className={`${className}${show ? " h-72 " : " h-10 "} border w-5/6 overflow-hidden `}>
    <button onClick={()=>setShow(!show)}> + </button>
    {item}
  </div>;
}

export default Component