import React from "react";
import { Calendar, Globe, Star, LayoutGrid, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const reviewPrevRef = useRef(null);
  const reviewNextRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-[1700px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">

          {/* DESCRIPTION */}
          <DetailCard title="Description">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              A fiery young man clashes with an unflinching forest officer in a south
              Indian village where spirituality, fate and folklore rule the lands.
            </p>
          </DetailCard>

          {/* CAST SWIPER */}
          <div className="bg-[#141414] border border-[#262626] text-white p-10 rounded-xl text-xs font-semibold">
            <div className="flex  items-center mb-10 justify-between">
              <div className="">
                <h1 className="font-bold text-2xl text-gray-400">Cast</h1>
              </div>
              <div className="flex gap-2">
              <div className="flex gap-5 w-35 h-12 bg-[#1a1a1a] rounded-lg items-center justify-center mt-10 md:mt-0 ">
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
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".cast-prev",
                nextEl: ".cast-next",
              }}
              spaceBetween={20}
              slidesPerView="auto"
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <SwiperSlide key={i} className="!w-[110px]">
                  <div className="group cursor-pointer text-center">
                    <Link to={`/actor/${i}`}>
                      <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border border-[#333] group-hover:border-red-600 transition">
                        <img
                          src={`https://i.pravatar.cc/150?u=${i}`}
                          alt="actor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* REVIEWS SWIPER */}
          <DetailCard
            title="Reviews"
            action={
              <div className="flex items-center gap-4">
                <button className="bg-[#141414] border border-[#262626] text-white px-5 py-2.5 rounded-xl text-xs font-semibold">
                  + Add Your Review
                </button>

                <div className="flex gap-2 bg-[#1a1a1a] rounded-lg p-1">
                  <button
                    ref={reviewPrevRef}
                    className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a]"
                  >
                    ←
                  </button>
                  <button
                    ref={reviewNextRef}
                    className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a]"
                  >
                    →
                  </button>
                </div>
              </div>
            }
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = reviewPrevRef.current;
                swiper.params.navigation.nextEl = reviewNextRef.current;
              }}
              navigation={{
                prevEl: reviewPrevRef.current,
                nextEl: reviewNextRef.current,
              }}
            >
              <SwiperSlide>
                <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 max-w-xl">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Aniket Roy</h4>
                      <p className="text-xs text-gray-500 mt-0.5">From India</p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full">
                      <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i <= 4 ? "#E50000" : "transparent"}
                            className={i <= 4 ? "text-[#E50000]" : "text-gray-600"}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-white ml-1">4.5</span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This movie was recommended to me by a very dear friend who went for the
                    movie by herself. I went to the cinemas to watch but had a houseful
                    board so couldn't watch it.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 max-w-xl">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Aniket Roy</h4>
                      <p className="text-xs text-gray-500 mt-0.5">From India</p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full">
                      <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i <= 4 ? "#E50000" : "transparent"}
                            className={i <= 4 ? "text-[#E50000]" : "text-gray-600"}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-white ml-1">4.5</span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This movie was recommended to me by a very dear friend who went for the
                    movie by herself. I went to the cinemas to watch but had a houseful
                    board so couldn't watch it.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 max-w-xl">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Aniket Roy</h4>
                      <p className="text-xs text-gray-500 mt-0.5">From India</p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full">
                      <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i <= 4 ? "#E50000" : "transparent"}
                            className={i <= 4 ? "text-[#E50000]" : "text-gray-600"}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-white ml-1">4.5</span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This movie was recommended to me by a very dear friend who went for the
                    movie by herself. I went to the cinemas to watch but had a houseful
                    board so couldn't watch it.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 max-w-xl">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Aniket Roy</h4>
                      <p className="text-xs text-gray-500 mt-0.5">From India</p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full">
                      <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i <= 4 ? "#E50000" : "transparent"}
                            className={i <= 4 ? "text-[#E50000]" : "text-gray-600"}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-white ml-1">4.5</span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This movie was recommended to me by a very dear friend who went for the
                    movie by herself. I went to the cinemas to watch but had a houseful
                    board so couldn't watch it.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </DetailCard>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-2xl space-y-10">

            {/* Released Year */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <i className="fa-regular fa-calendar"></i>
                <span>Released Year</span>
              </div>
              <p className="text-white text-xl font-bold">2022</p>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-solid fa-language"></i>
                <span>Available Languages</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Tamil", "Telegu", "Kannada"].map((lang) => (
                  <div
                    key={lang}
                    className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-lg text-sm text-white"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-regular fa-star"></i>
                <span>Ratings</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* IMDb */}
                <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl">
                  <p className="text-white text-sm font-semibold mb-2">IMDb</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i <= 4 ? "text-red-600" : "text-gray-600"
                          } text-sm`}
                      ></i>
                    ))}
                    <span className="text-white text-sm font-semibold ml-1">4.5</span>
                  </div>
                </div>

                {/* Streamvibe */}
                <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl">
                  <p className="text-white text-sm font-semibold mb-2">Streamvibe</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i <= 4 ? "text-red-600" : "text-gray-600"
                          } text-sm`}
                      ></i>
                    ))}
                    <span className="text-white text-sm font-semibold ml-1">4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Genres */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-solid fa-grip"></i>
                <span>Genres</span>
              </div>

              <div className="flex gap-2 ">
                {["Action", "Adventure"].map((g) => (
                  <div
                    key={g}
                    className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-lg text-sm text-white"
                  >
                    {g}
                  </div>
                ))}
              </div>
            </div>

            {/* Director */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-regular fa-user"></i>
                <span>Director</span>
              </div>

              <div className=" bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?u=rishab"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="text-white text-sm font-semibold">Rishab Shetty</p>
                  <p className="text-xs text-gray-500">From India</p>
                </div>
              </div>
            </div>

            {/* Music */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-solid fa-music"></i>
                <span>Music</span>
              </div>

              <div className=" bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?u=music"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="text-white text-sm font-semibold">
                    B. Ajaneesh Loknath
                  </p>
                  <p className="text-xs text-gray-500">From India</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

/* COMPONENTS */

const DetailCard = ({ title, children, action }) => (
  <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[15px]">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-gray-400 text-lg">{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, value, children }) => (
  <div>
    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
      {icon}
      <span>{label}</span>
    </div>
    {value && <p className="text-xl font-bold ml-7">{value}</p>}
    <div className="ml-7">{children}</div>
  </div>
);

const RatingBox = ({ label, score }) => (
  <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-[15px]">
    <p className="text-xs text-gray-400 mb-1">{label}</p>
    <div className="flex items-center gap-1">
      <Star size={14} fill="#E50000" className="text-[#E50000]" />
      <span className="font-bold">{score}</span>
    </div>
  </div>
);

const ReviewBox = ({ name, rating, text }) => (
  <div className="bg-[#0f0f0f] border border-[#262626] p-6 rounded-[10px] h-full">
    <div className="flex justify-between mb-4">
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-[10px] text-gray-500">From India</p>
      </div>
      <div className="flex items-center gap-1 bg-[#1a1a1a] px-3 py-1 rounded-full border border-[#262626]">
        <Star size={12} fill="#E50000" className="text-[#E50000]" />
        <span className="text-xs font-bold">{rating}</span>
      </div>
    </div>
    <p className="text-gray-400 text-xs italic leading-relaxed line-clamp-3">
      "{text}"
    </p>
  </div>
);

export default MovieDetail;
