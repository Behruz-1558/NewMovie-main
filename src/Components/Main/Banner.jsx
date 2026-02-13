import React from 'react'

function Banner() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      <div
        className="
          max-w-[1700px] mx-auto
          bg-[url('/img/BgImg.png')]
          bg-cover bg-center
          rounded-2xl
          p-6 sm:p-10 md:p-16 lg:p-20
          flex flex-col md:flex-row
          items-start md:items-center
          gap-6 md:gap-20
          justify-between
        "
      >
        <div className="max-w-xl">
          <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold mb-4 md:mb-6">
            Start your free trial today!
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            This is a clear and concise call to action that encourages users
            to sign up for a free trial of StreamVibe.
          </p>
        </div>

        <button
          className="
            bg-[#E50000]
            hover:bg-[#ff0000]
            text-white
            font-semibold
            py-3 px-6
            rounded-lg
            duration-300
            w-full sm:w-auto
          "
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner
