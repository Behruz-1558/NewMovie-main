import React, { useState } from "react";
import Banner from '../Components/Main/Banner'

function SearchSection() {
  const [active, setActive] = useState("Movies");

  const categories = ["Movies", "TV Series", "Actors", "All"];

  return (
    <div>

      <div className="bg-black  flex items-start justify-center pt-30 px-6 pb-15">
        <div className="w-full max-w-6xl">

          {/* Search Row */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search for movies, TV shows, or actors..."
              className="flex-1 bg-[#111] border border-gray-800 text-white px-5 py-4 rounded-xl outline-none focus:border-red-600 transition"
            />

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium transition">
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-6 mt-10">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-8 py-3 rounded-xl border transition font-medium
                ${active === item
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-transparent text-gray-300 border-gray-800 hover:border-gray-600"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default SearchSection;
