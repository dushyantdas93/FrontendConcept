import React from 'react'

const Card = ({item,idx}) => {
  return (
    <div>
      <div className="w-72 h-[500px] border  p-4 rounded-lg shadow-xl" key={idx}>
        <img src={item.images} alt="" />
        <h1> {item.title} { item.id - 1}</h1>
        <br />
        <p> {item.description}</p>{" "}
      </div>
    </div>
  );
}

export default Card