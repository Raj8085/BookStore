import React from 'react'
import Navbar from '../components/Navbar'
import Ourcourses from '../components/Ourcourses'
import Footer from '../components/Footer'
const Courses = () => {
  return (
     <>
        <Navbar/>
        <div className="min-h-screen">
        <Ourcourses/>
        </div>
        <Footer/>
     </>
  )
}

export default Courses
