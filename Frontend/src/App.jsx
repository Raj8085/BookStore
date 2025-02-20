import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom" 
import Home from '../home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from "./connect/Contact"
import {Toaster} from "react-hot-toast"
import { BookProvider } from './components/BookContext'
import { useAuth } from './context/AuthProvider'
const App = () => {
  const [authUser,setAuthUser] = useAuth();
  return (
     <BookProvider> 
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/course' element={authUser ? <Courses/>:<Navigate to="/signup"/>}/>
       <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Toaster/>
      
     </div>
     </BookProvider>
  )
}

export default App
