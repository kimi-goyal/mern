import React from 'react'
import Navbar from './homes/Navbar'
import Footer from './homes/Footer'
import Courses from './courses/Courses'

function Course() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'> 
    <Courses/>
   </div>
  
   <Footer/>
   </>
  )
}

export default Course