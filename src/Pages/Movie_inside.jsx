import React, { use, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Banner from '../Components/Main/Banner';
import {
  Play,
  Volume2,
  Calendar,
  Globe,
  Star,
  LayoutGrid,
  User,
  Music,
  X,
  Watch
} from "lucide-react";
import Api_Service from "../Service/Api.Service";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";



const MovieDetail = () => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [liked, setLiked] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [actor, setActor] = useState();

  const getMovie = async () => {
    const response = await Api_Service.getData(`movie/${id}`);
    const responseActor = await Api_Service.getData(`movie/${id}/credits`);
    setMovie(response.data);
    setActor(responseActor.data);
  };

const getTrailer = async () => {
    const response = await Api_Service.getData(`movie/${id}/videos`);
    const trailers = response.data.results.filter(video => video.type === "Trailer" && video.site === "YouTube");    
    setTrailerKey(trailers[0].key);

};

  useEffect(() => {
    getTrailer();
    getMovie();
  }, [id]);

  const [showVideo, setShowVideo] = useState(false);
  const playerTimerRef = React.useRef(null);

  const { poster, title, videoId, duration } = location.state || {};
  const videoDuration = duration || 90000;

  const director = actor?.crew?.find(p => p.job === "Director");
  const music = actor?.crew?.find(
    p => p.job === "Original Music Composer"
  );

  const reviewsData = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Aniket Roy ${i + 1}`,
    from: "India",
    rating: 4.5,
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it."
  }));
  const prevReviewRef = React.useRef(null);
  const nextReviewRef = React.useRef(null);
  const reviewSwiperRef = React.useRef(null);
  return (
    <div className="bg-black min-h-screen text-white pb-20 pt-30 ">

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center p-4">

          <button
            onClick={() => {
              setShowVideo(false);
              clearTimeout(playerTimerRef.current);
            }}
            className="absolute top-8 right-8 hover:text-red-500"
          >
            <X size={40} />
          </button>

          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-[#262626]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title={title}
              allowFullScreen
            />
          </div>

        </div>
      )}

      {/* BANNER */}
      <div className="container mx-auto px-4 md:px-10 pt-1 max-w-[1700px]">

        <div className="relative w-full h-[500px] md:h-[700px] rounded-[40px] overflow-hidden">

          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

          <div className="absolute bottom-16 w-full text-center">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
              {movie?.title}
            </h1>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => {
                  setShowVideo(true);
                  playerTimerRef.current = setTimeout(() => {
                    setShowVideo(false);
                  }, videoDuration);
                }}
                className="bg-[#E50000] hover:bg-red-700 px-10 py-4 rounded-2xl font-bold flex gap-3 items-center"
              >
                <Play size={22} fill="white" /> Play Now
              </button>

              <button className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-2xl">
                <Volume2 size={22} />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 md:px-10 mt-40 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1700px]">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">

          <DetailCard title="Description">
            <p className="text-gray-400">
              {movie?.overview}
            </p>
          </DetailCard>


          {/* CAST */}
          <DetailCard title="Cast">

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={5}
            >

              {actor?.cast?.map(actor => (

                <SwiperSlide key={actor.id}>

                  <div
                    onClick={() => navigate(`/actor/${actor.id}`)}
                    className="cursor-pointer text-center "
                  >

                    <img
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      className="rounded-2xl border  border-[#262626]"
                    />
                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </DetailCard>

          {/* REVIEWS */}

          <DetailCard>

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-gray-400 text-lg">
                Reviews
              </h3>

              <div className="flex gap-3 bg-[#1a1a1a] p-2 rounded-lg">

                <button
                  ref={prevReviewRef}
                  onClick={() => reviewSwiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-lg bg-black hover:bg-[#2a2a2a]"
                >
                  ←
                </button>

                <button
                  ref={nextReviewRef}
                  onClick={() => reviewSwiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-lg bg-black hover:bg-[#2a2a2a]"
                >
                  →
                </button>

              </div>

            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              onSwiper={(swiper) => {
                reviewSwiperRef.current = swiper;
              }}
              breakpoints={{
                768: { slidesPerView: 2 }
              }}
            >

              {reviewsData.map((review) => (

                <SwiperSlide key={review.id}>

                  <div className="bg-[#0f0f0f] border border-[#262626] p-5 rounded-2xl hover:border-[#E50000] transition-all">

                    {/* TOP */}
                    <div className="flex justify-between items-start mb-3">

                      <div>

                        <h4 className="font-semibold text-sm">
                          {review.name}
                        </h4>

                        <p className="text-gray-500 text-xs">
                          From {review.from}
                        </p>

                      </div>

                      {/* RATING */}
                      <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1 rounded-full">

                        <Star
                          size={12}
                          fill="#E50000"
                          stroke="none"
                        />

                        <span className="text-xs font-semibold">
                          {review.rating}
                        </span>

                      </div>

                    </div>

                    {/* TEXT */}
                    <p className="text-gray-400 text-xs leading-relaxed">

                      {review.text}

                    </p>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </DetailCard>

        </div>


        {/* SIDEBAR */}
        <div className="lg:col-span-4">

          <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[30px] space-y-10 sticky top-10">

            {/* RELEASE */}
            <SidebarItem
              icon={<Calendar size={18} />}
              label="Released Year"
              value={movie?.release_date?.slice(0, 4)}
            />

            {/* LANGUAGE */}
            <SidebarItem
              icon={<Globe size={18} />}
              label="Available Languages"
            >

              <span className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-xl text-xs">
                {movie?.original_language}
              </span>

            </SidebarItem>


            {/* RATINGS */}
            <SidebarItem
              icon={<Star size={18} />}
              label="Ratings"
            >

              <div className="grid grid-cols-2 gap-4">

                <RatingBox
                  label="IMDb"
                  score={(movie?.vote_average / 2).toFixed(1)}
                />

                <RatingBox
                  label="Streamvibe"
                  score={(movie?.vote_average / 2).toFixed(1)}
                />

              </div>

            </SidebarItem>


            {/* GENRES */}
            <SidebarItem
              icon={<LayoutGrid size={18} />}
              label="Genres"
            >

              <div className="flex flex-wrap gap-2">

                {movie?.genres?.map(g => (
                  <span
                    key={g.id}
                    className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-xl text-xs"
                  >
                    {g.name}
                  </span>
                ))}

              </div>

            </SidebarItem>


            {/* DIRECTOR */}
            {director && (
              <SidebarProfile
                icon={<User size={18} />}
                label="Director"
                name={director.name}
                image={director.profile_path}
              />
            )}


            {/* MUSIC */}
            {music && (
              <SidebarProfile
                icon={<Music size={18} />}
                label="Music"
                name={music.name}
                image={music.profile_path}
              />
            )}

          </div>

        </div>

      </div>

      <Banner />

    </div>
  );
};


/* COMPONENTS */


const DetailCard = ({ title, children }) => (

  <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[30px]">

    <h3 className="text-gray-400 mb-6">
      {title}
    </h3>

    {children}

  </div>

);



const SidebarItem = ({ icon, label, value, children }) => (

  <div>

    <div className="flex items-center gap-3 text-gray-400">

      <div className="p-2 bg-[#0f0f0f] border border-[#262626] rounded-lg">
        {icon}
      </div>

      <span className="text-sm">
        {label}
      </span>

    </div>

    {value && (
      <p className="mt-3 text-white font-semibold">
        {value}
      </p>
    )}

    {children && (
      <div className="mt-3">
        {children}
      </div>
    )}

  </div>

);



const RatingBox = ({ label, score }) => {

  const stars = Math.round(score);

  return (

    <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl">

      <p className="text-xs text-gray-400 mb-2">
        {label}
      </p>

      <div className="flex items-center gap-2">

        <div className="flex gap-1">

          {[1, 2, 3, 4, 5].map(i => (
            <Star
              key={i}
              size={16}
              fill={i <= stars ? "#E50000" : "none"}
              stroke="#E50000"
            />
          ))}

        </div>

        <span className="text-sm font-semibold">
          {score}
        </span>

      </div>

    </div>

  );

};



const SidebarProfile = ({ icon, label, name, image }) => (

  <div>

    <div className="flex items-center gap-3 text-gray-400 mb-3">

      <div className="p-2 bg-[#0f0f0f] border border-[#262626] rounded-lg">
        {icon}
      </div>

      <span className="text-sm">
        {label}
      </span>

    </div>


    <div className="flex items-center gap-4 bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl">

      <img
        src={`https://image.tmdb.org/t/p/w200/${image}`}
        className="w-12 h-12 rounded-lg object-cover"
      />

      <div>

        <p className="text-sm font-medium">
          {name}
        </p>

        <p className="text-xs text-gray-400">
          From Movie Database
        </p>

      </div>

    </div>

  </div>

);


export default MovieDetail;