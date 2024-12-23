import React, { useEffect, useState } from 'react';

import Navbar from './homes/Navbar'
import Banner from './homes/Banner';
import Footer from './homes/Footer'
import Freebook from './homes/Freebook'
function Home() {
  
  return (
    <div className='overflow-x-hidden'>
  <Navbar/>
  <Banner/>
  <Freebook/>
  <Footer/>
    </div>
  );
}

export default Home;
