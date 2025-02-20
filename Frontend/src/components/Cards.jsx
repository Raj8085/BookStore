import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
    <>
    <div className="pb-6 mt-4 p-3">
    <div className="card w-94 bg-base-100 shadow-xl hover:scale-105   dark:bg-slate-900 dark:file:text-white dark:border duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500  hover:p-3  hover:text-white cursor-pointer border-[2px]">Buy Now</div>
    </div>
  </div>
</div>
    </div>



 
    </>
   
  )
}

export default Cards
