import React from 'react'
import Header from '../Components/Movie/Header'
import Casts from '../Components/Movie/Casts'
import Banner from '../Components/Main/Banner'

function Movie_inside() {
  return (
    <div className=''>
      <Header/>
      <Casts/>
      <Banner/>
    </div>
  )
}

export default Movie_inside