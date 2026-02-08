import React from 'react'

function Banner() {
  return (
    <div className="banner bg-black text-white py-24 px-5 md:px-0">
      <div className="max-w-7xl mx-auto  bg-[url('/public/img/BgImg.png')] bg-cover bg-center rounded-2xl p-20 block md:flex items-center gap-20 justify-between">
        <div>
          <h1 className="text-[28px] font-bold mb-6">
            Start your free trial today!
          </h1>
          <p className="text-gray-400 text-lg  leading-relaxed">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>

        <button className="bg-[#E50000] hover:bg-[#ff0000] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mt-10 md:mt-0">
          Get Started
        </button>

      </div>

    </div >
  )
}

export default Banner