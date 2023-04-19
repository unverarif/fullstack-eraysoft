import React from 'react'

// Componentler

import { Hero } from '../components/Hero'
import { Cards } from '../components/Cards'
// import { Hero } from '../components/Hero'
// import { Footerv2 } from '../components/Footerv2'
// import { Cards } from '../components/Cards'

const Home = () => {
  return (
    <div className='bg-white'>

        <Hero />
        <Cards />

        {/* <Hero />
        <Cards />
        <Footerv2 /> */}
    </div>
  )
}

export default Home