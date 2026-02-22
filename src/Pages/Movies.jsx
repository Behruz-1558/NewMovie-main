import React, { useEffect } from 'react'
import Slider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'

const Movies = () => {
  useEffect(() => {
   document.documentElement.scrollTop = 0;
  }, []);

  return (
     <div className='pt-20 bg-black'>
      <Slider url={'movie/popular'} title={"Popular 10 In Geners"} description={"Movies by Geners description"}/>
      <Slider url={'movie/top_rated'} title={"Top Rated Movies"} description={"Simple description"}/>
      <Slider url={'movie/upcoming' } title={"Upcoming Movies"} description={"Hello description"}/>
      <Slider url={'movie/top_rated'} title={"Popular Movies"} description={"Behavioral description"}/>
      <Slider url={'movie/now_playing'} title={"Now Playing Movies"} description={"Upcoming description"}/>
      <Banner/>
     </div>
  )
}

export default Movies