import React from 'react'
import Cards from '../homes/Cards'
import {Link} from 'react-router-dom'
import list from '../../books.json'
function Courses() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 gap-10 items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-400'>Here:)!</span></h1>
   <p className='mt-11'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis excepturi impedit voluptate esse. Perspiciatis porro voluptatem optio aut deserunt, eum quod nesciunt ea expedita beatae quasi et facere quis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique non quo delectus laborum iste perspiciatis!</p>
    <Link to ='/'><button className='bg-pink-400 text-white hover:bg-black mt-6 rounded-md px-4 py-1'>Back</button></Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Cards item= {item} key={item.id}/>
            ))
        }
    </div>
   </div>
   </>
  )
}

export default Courses