import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Api_Service from "../../Service/Api.Service";

import "swiper/css";
import "swiper/css/navigation";

function Slider({ url, title, description }) {

  const [movies, setMovies] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();


  const getApi = async () => {
    const response = await Api_Service.getData(url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getApi();
  }, [url]);

  return (
    <section className="bg-black px-6 md:px-16 py-14">

      <div className="mb-8 flex items-end justify-between max-w-[1700px] mx-auto px-6">

        <div>
          <h2 className="text-white text-2xl font-semibold mb-2">
            {title}
          </h2>

          <p className="text-gray-400 max-w-2xl">
            {description}
          </p>
        </div>

        <div className="flex gap-5 w-35 h-12 bg-[#1a1a1a] rounded-lg items-center justify-center mt-10 md:mt-0">
          <button
            ref={prevRef}
            className="w-13 h-10 rounded-[10px] bg-black
                       text-white hover:bg-[#2a2a2a] transition text-[20px]"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-13 h-10 rounded-[10px] bg-black
                       text-white hover:bg-[#2a2a2a] transition text-[20px]"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={500}
        spaceBetween={20}
        slidesPerView={5}

        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}

        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}

        className="max-w-[1700px] mx-auto px-6"
      >

        {movies?.map((movie) => (

          <SwiperSlide key={movie.id}>

            <div
              className="bg-[#0f0f0f] rounded-xl p-3 cursor-pointer"

              onClick={() =>
                navigate(`/movie/${movie.id}`, { state: { movie } })
              }
            >

              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full  rounded-lg object-cover"
              />

              <h3 className="text-white mt-2">
                {movie.title}
              </h3>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Slider;