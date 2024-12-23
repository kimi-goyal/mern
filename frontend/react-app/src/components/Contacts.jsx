import React from 'react'
import Navbar from './homes/Navbar'
import Footer from './homes/Footer'
import Contact from './contact/contact'

function Contacts() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'> 
    <Contact/>
   </div>
  
   <Footer/>
   </>
  )
}

export default Contacts