import React from "react";
import Movie_inside from '../../Pages/Movie_inside'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 48,
    title: "A Clockwork Orange",
    year: 1971,
    genre: ["Crime", "Drama", "Sci-Fi"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
    rating: 8.3,
  },
  {
    id: 49,
    title: "Taxi Driver",
    year: 1976,
    genre: ["Crime", "Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: 8.2,
  },
  {
    id: 50,
    title: "Apocalypse Now",
    year: 1979,
    genre: ["Drama", "Mystery", "War"],
    poster:
      "https://play-lh.googleusercontent.com/hoMMLPxQnHTosXXfG_DgUaJwVvARK6aeZx7kLZj3Jm0O7s91N7_Jg5koONxedvGtl3OvLrqb9En1uNzFtaQ=w240-h480-rw",
    rating: 8.4,
  },
  {
    id: 51,
    title: "The Social Network",
    year: 2010,
    genre: ["Biography", "Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 7.7,
  },
  {
    id: 52,
    title: "There Will Be Blood",
    year: 2007,
    genre: ["Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
    rating: 8.2,
  },
  {
    id: 53,
    title: "Casino",
    year: 1995,
    genre: ["Crime", "Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    rating: 8.2,
  },
  {
    id: 54,
    title: "No Country for Old Men",
    year: 2007,
    genre: ["Crime", "Drama", "Thriller"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    rating: 8.1,
  },
  {
    id: 55,
    title: "Blade Runner 2049",
    year: 2017,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    rating: 8.0,
  },
  {
    id: 56,
    title: "Shutter Island",
    year: 2010,
    genre: ["Mystery", "Thriller"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 8.2,
  },
  {
    id: 57,
    title: "Arrival",
    year: 2016,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
    rating: 7.9,
  },
  {
    id: 58,
    title: "Logan",
    year: 2017,
    genre: ["Action", "Drama", "Sci-Fi"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    rating: 8.1,
  },
  {
    id: 59,
    title: "Her",
    year: 2013,
    genre: ["Drama", "Romance", "Sci-Fi"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg",
    rating: 8.0,
  },
  {
    id: 60,
    title: "The Big Lebowski",
    year: 1998,
    genre: ["Comedy", "Crime"],
    poster:
      "https://cdn.ananasposter.ru/image/cache/catalog/poster/film/81/15812-1000x830.jpg",
    rating: 8.1,
  },
];
const open = (navigate, id) => {
  navigate(`/movie/${id}`);
};

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  return (
    <section className="bg-black px-6 md:px-16 py-14">

      {/* Header */}
      <div className="mb-8 block md:flex items-end justify-between max-w-[1700px] mx-auto px-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            Explore our wide variety of categories
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
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
        spaceBetween={5}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1056: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="max-w-[1700px] mx-auto px-6 "
      >

        {movies.map(movie => (
          <SwiperSlide key={movie.id} className="pl-10  md:pl-5" onClick={() => open(navigate, movie.id)}>
            <div className="bg-[#0f0f0f] rounded-xl p-3 hover:scale-[1.03] transition w-[300px]" >

              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-[360px] w-[300px] rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <h3 className="text-white mt-3 font-medium text-sm">
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
