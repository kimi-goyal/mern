import React from 'react';

function Cards({ item }) {
  return (
    <div className="flex flex-wrap justify-center p-6">
      <div className="card  w-80 shadow-lg rounded-lg overflow-hidden transition-transform text-gray-800 transform hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
        {/* Image Section */}
        <figure className="w-full h-56 ">
          <img
            className="h-full w-full object-cover"
            src={item.image}
            alt={item.title}
          />
        </figure>
        {/* Card Body */}
        <div className="card-body p-6">
        <div className='flex justify-between items-start  '>
          <h2 className="text-xl font-bold  mb-4">
            {item.title}
            </h2>
            <span className=" items-center text-xs font-semibold text-pink-700 bg-pink-200 px-2 py-1 rounded-full shadow-sm hover:bg-pink-300 transition duration-300">
              {item.category}
            </span>
        </div>
          <p className=" text-sm mb-6">{item.name}</p>
          {/* Actions */}
          <div className="flex justify-between mb-4">
            <span className=" text-sm rounded-md text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white px-2 py-1 cursor-pointer">
              ${item.price}
            </span>
            <button className=" text-sm bg-pink-500 text-white hover:bg-pink-600 px-2 py-1 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
