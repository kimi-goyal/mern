import React from 'react'
import list from '../../books.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const filterData= list.filter((data)=>data.category==="free")
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
   <>
   <div>
   
   <Slider {...settings}>
       {filterData.map((items)=>
      <Cards
      item = {items}
      key = {items.id}
      />)}
      </Slider>
      <style>
        {`
 .slick-dots li button:before {
    font-size: 25px; 
    color: black;    
 `}
    </style>
   </div>
   </>
  )
}

export default Freebook