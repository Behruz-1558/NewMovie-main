import React from 'react'
import './Movie.css'

const Movie_inside = () => {
  return (
    <div className=' bg-black pt-40 pb-40'>
      <div className='max-w-[1700px] m-auto  hero h-[80vh] bg-no-repeat bg-cover relative rounded-2xl'>
        
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative  z-10 h-full flex flex-col m-auto justify-end items-center px-10 pb-24 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kantara
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-6">
            A fiery young man clashes with an unflinching forest officer
            in a south Indian village where spirituality, fate and folklore
            rule the lands.
          </p>

          <div className="flex gap-4 ">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg flex items-center gap-2">
              ▶ Play Now
            </button>

            <button className="bg-black hover:bg-white/20 transition px-4 py-3 rounded-lg">
            <i class="fa-solid fa-plus"></i>
            </button>

            <button className="bg-black hover:bg-white/20 transition px-4 py-3 rounded-lg">
            <i class="fa-solid fa-thumbs-up"></i>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Movie_inside
