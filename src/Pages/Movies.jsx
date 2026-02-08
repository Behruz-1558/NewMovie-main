import React from 'react'
import Slider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'

const Movies = () => {
  return (
     <div className='pt-20 bg-black'>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Banner/>
     </div>
  )
}

export default Movies