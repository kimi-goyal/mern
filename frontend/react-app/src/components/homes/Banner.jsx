import React from 'react'

function Banner() {
    return (
        <>
            <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 flex-col md:flex-row '>
                <div className="w-full md:w-1/2 mt-10 md:mt-24 md:order-1 order2">
                    <div className='md:space-y-10 space-y-9'>
                        <h1 className='md:text-4xl font-bold text-3xl'>Hello, Get ready to lose yourself in <span className='text-pink-400'>  the world of books!!!</span>
                        </h1>
                        <p className='md:text-xl text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas, cumque autem, consectetur, doloremque facilis voluptate architecto.</p>
                    </div>
                    <div className=" mt-6">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <div>
                        <button className="px-6 py-1.5 rounded-md mt-4 text-white bg-pink-400 hover:bg-pink">Submit</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:order-1 order-2">
                <img src="../public/images/banner.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner