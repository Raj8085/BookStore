import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Ourcourses = () => {
    const [book,setBook] = useState([]);
         useEffect(()=>{
            const getBook = async()=>{
                try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data,"backend");
        setBook(res.data)
                }catch(error){
                    console.log(error)
                }
            }
            getBook();
    },[]);
     
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center items-center">
            <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! : )</span></h1>
            <p className="mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione soluta sed incidunt accusantium totam. Labore laboriosam minima sequi numquam iure. Maiores distinctio necessitatibus repellat eius quaerat expedita impedit at amet.</p>

            <Link to="/">
            <button className="bg-pink-500 hover:bg-pink-700 text-white rounded-md duration-300 px-4 py-3 mt-6 cursor-pointer">Back</button>
            </Link>

             
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item) =>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Ourcourses
