import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Components/Main/Banner";
import Api_Service from "../Service/Api.Service";

function Search() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null); // faqat 1 ta natija
  const [videoKey, setVideoKey] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;

    let endpoint = "";
    if (active === "Movies") endpoint = `search/movie?query=${encodeURIComponent(query)}`;
    else if (active === "TV Series") endpoint = `search/tv?query=${encodeURIComponent(query)}`;
    else if (active === "Actors") endpoint = `search/person?query=${encodeURIComponent(query)}`;
    else endpoint = `search/multi?query=${encodeURIComponent(query)}`;

    try {
      const res = await Api_Service.getData(endpoint);
      const firstResult = res.data.results[0] || null;
      setResult(firstResult);
      setVideoKey(""); // avvalgi videoni tozalash

      if (firstResult) {
        // faqat Movie yoki TV bo‘lsa video chaqirish
        if ((active === "Movies") || (active === "All" && firstResult.media_type === "movie")) {
          fetchVideo(firstResult.id, "movie");
        } else if ((active === "TV Series") || (active === "All" && firstResult.media_type === "tv")) {
          fetchVideo(firstResult.id, "tv");
        }
      }
    } catch (err) {
      console.error("Qidiruv xatosi:", err);
    }
  };

  // Video olish funksiyasi
  const fetchVideo = async (id, type) => {
    try {
      const res = await Api_Service.getData(`${type}/${id}/videos`);
      const trailer = res.data.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) setVideoKey(trailer.key);
      else setVideoKey(""); // video topilmasa ko‘rsatilmaydi
    } catch (err) {
      console.error("Video yuklash xatosi:", err);
      setVideoKey("");
    }
  };

  return (
    <div className="bg-black px-4 sm:px-6 md:px-10 lg:px-20 pt-[120px] pb-20 min-h-screen">
      <div className="max-w-[1500px] mx-auto">

        {/* Search input */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search for movies, TV shows, or actors..."
            className="flex-1 bg-[#111] text-white px-4 py-3 md:px-5 md:py-4 rounded-xl border border-[#222] outline-none hover:border-red-600 transition"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Search
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 md:mt-10">
          {["Movies", "TV Series", "Actors", "All"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-3 md:px-8 md:py-4 rounded-xl border transition hover:bg-red-600
                ${
                  active === item
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-[#111] text-white border-[#222]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>


        {/* Natija */}
        {result && (
          <div className="mt-12 flex flex-col items-center">
            <div
              onClick={() =>
                active === "Actors"
                  ? navigate(`/actor/${result.id}`, { state: { actor: result } })
                  : navigate(`/movie/${result.id}`, { state: { movie: result } })
              }
              className="bg-[#111] rounded-xl p-3 cursor-pointer hover:scale-105 transition w-full sm:w-[300px]"
            >
              <img
                src={
                  result.poster_path || result.profile_path
                    ? `https://image.tmdb.org/t/p/w500${result.poster_path || result.profile_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={result.title || result.name}
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h3 className="text-white mt-3 text-lg font-medium text-center truncate">
                {result.title || result.name}
              </h3>
            </div>

            {/* Faqat shu natijaga tegishli video */}
            {videoKey && (
              <div key={videoKey.id} className="mt-6 w-full aspect-video sm:w-[600px]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  title="Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              </div>
            )}
          </div>
        )}

      </div>

      <div className="relative w-full md:w-[112%] md:right-20 lg:w-[110%] lg:right-16">
        <Banner />
      </div>
    </div>
  );
}

export default Search;
