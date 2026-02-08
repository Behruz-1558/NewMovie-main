import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./Header.css";

function Header() {
    const movies = [
        {
            "id": 48,
            "title": "A Clockwork Orange",
            "year": 1971,
            "genre": ["Crime", "Drama", "Sci-Fi"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
            "rating": 8.3
        },
        {
            "id": 49,
            "title": "Taxi Driver",
            "year": 1976,
            "genre": ["Crime", "Drama"],
            "poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "rating": 8.2
        },
        {
            "id": 50,
            "title": "Apocalypse Now",
            "year": 1979,
            "genre": ["Drama", "Mystery", "War"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "rating": 8.4
        },
        {
            "id": 51,
            "title": "The Social Network",
            "year": 2010,
            "genre": ["Biography", "Drama"],
            "poster": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "rating": 7.7
        },
        {
            "id": 52,
            "title": "There Will Be Blood",
            "year": 2007,
            "genre": ["Drama"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
            "rating": 8.2
        },
        {
            "id": 53,
            "title": "Casino",
            "year": 1995,
            "genre": ["Crime", "Drama"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
            "rating": 8.2
        },
        {
            "id": 54,
            "title": "No Country for Old Men",
            "year": 2007,
            "genre": ["Crime", "Drama", "Thriller"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
            "rating": 8.1
        },
        {
            "id": 55,
            "title": "Blade Runner 2049",
            "year": 2017,
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
            "rating": 8.0
        },
        {
            "id": 56,
            "title": "Shutter Island",
            "year": 2010,
            "genre": ["Mystery", "Thriller"],
            "poster": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "rating": 8.2
        },
        {
            "id": 57,
            "title": "Arrival",
            "year": 2016,
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
            "rating": 7.9
        },
        {
            "id": 58,
            "title": "Logan",
            "year": 2017,
            "genre": ["Action", "Drama", "Sci-Fi"],
            "poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            "rating": 8.1
        },
        {
            "id": 59,
            "title": "Her",
            "year": 2013,
            "genre": ["Drama", "Romance", "Sci-Fi"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg",
            "rating": 8.0
        },
        {
            "id": 60,
            "title": "The Big Lebowski",
            "year": 1998,
            "genre": ["Comedy", "Crime"],
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg",
            "rating": 8.1
        }
    ]

    return (
        <header className="Header relative min-h-screen overflow-hidden bg-black">

            {movies.length > 0 && (
                <div className="absolute inset-0 z-0 opacity-60">
                    <Marquee speed={35} gradient={false} className="h-[320px]">
                        {movies.map(movie => (
                            <img
                                key={movie.id}
                                src={movie.poster}
                                alt=""
                                className="h-[300px] mx-4 rounded-xl object-cover"
                            />
                        ))}
                    </Marquee>

                    <Marquee
                        speed={25}
                        direction="right"
                        gradient={false}
                        className="h-[320px] mt-6"
                    >
                        {movies.map(movie => (
                            <img
                                key={movie.id + "-2"}
                                src={movie.poster}
                                alt=""
                                className="h-[300px] mx-4 rounded-xl object-cover"
                            />
                        ))}
                    </Marquee>

                    <Marquee speed={35} gradient={false} className="h-[320px]">
                        {movies.map(movie => (
                            <img
                                key={movie.id}
                                src={movie.poster}
                                alt=""
                                className="h-[300px] mx-4 rounded-xl object-cover"
                            />
                        ))}
                    </Marquee>
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10"></div>

            <div className="relative z-20 min-h-screen flex items-end">
                <div className="title text-center w-full mx-auto px-4 pb-16">

                    <div className="Logo flex justify-center mb-20 md:mb-28">
                        <img src="./img/LogoHero.png" alt="Logo" />
                    </div>

                    <h1 className="text-white font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        The Best Streaming Experience
                    </h1>

                    <p className="text-[#999999] mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        StreamVibe is the best streaming experience for watching your favorite
                        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
                        enjoy a wide variety of content.
                    </p>

                    <button className="bg-[#E50000] text-white px-10 py-4 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base flex items-center gap-2 mx-auto">
                        ▶ Start Watching Now
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Header;
