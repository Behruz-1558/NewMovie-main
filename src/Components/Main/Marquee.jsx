import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import Api_Service from '../../Service/Api.Service';

const HeaderMovies = ({url}) => {
  
      const [movies , setMovies] = useState();
          
        const getMovies = async () => {
           const responce = await Api_Service.getData(url);
           
           setMovies(responce.data.results)
           
        }
        useEffect(() => {
          getMovies()
        })
  return (
    <Marquee speed={35} gradient={false} className="h-60 my-5">
      {movies && movies.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title || "movie poster"}
          className="h-60 mx-3  rounded-xl object-cover"
        />
      ))}
    </Marquee>
  )
}

export default HeaderMovies
