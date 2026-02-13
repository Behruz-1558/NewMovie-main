import React from "react";

function Devices() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-4">
          We Provide you streaming experience across various .
        </h2>
        <p className="text-gray-400 max-w-4xl mb-16 leading-relaxed">
          With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
          anywhere. Our platform is designed to be compatible with a wide range of
          devices, ensuring that you never miss a moment of entertainment.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD */}
          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-mobile-screen text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Smartphones</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
             StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-tablet-screen-button text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Tablet</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-tv text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Smart TV</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-laptop text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Laptops</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
             StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-gamepad text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Gaming Consoles</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-[#E50000] transition-all duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black border border-white/10">
                <i className="fa-solid fa-vr-cardboard text-[#E50000] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">VR Headsets</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Devices;
