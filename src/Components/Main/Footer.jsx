import React from "react";

function Footer() {
  return (
    <footer className=" bg-black from-black via-[#0b0b0b] to-black text-gray-400 px-6 md:px-16 pt-16 ">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10 max-w-7xl mx-auto px-6">

        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">Devices</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Movies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Genres</a></li>
            <li><a href="#" className="hover:text-white">Trending</a></li>
            <li><a href="#" className="hover:text-white">New Release</a></li>
            <li><a href="#" className="hover:text-white">Popular</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Shows</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Genres</a></li>
            <li><a href="#" className="hover:text-white">Trending</a></li>
            <li><a href="#" className="hover:text-white">New Release</a></li>
            <li><a href="#" className="hover:text-white">Popular</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Subscription</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Plans</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-[#141414] rounded-md flex items-center justify-center hover:bg-[#1f1f1f]">
              <img src="./icon/Icon.png" alt="" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#141414] rounded-md flex items-center justify-center hover:bg-[#1f1f1f]">
              <img src="./icon/Icon-1.png" alt="" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#141414] rounded-md flex items-center justify-center hover:bg-[#1f1f1f]">
              <img src="./icon/Icon-2.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 my-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-8 max-w-7xl mx-auto px-6">
        <p>©2023 streamvib, All Rights Reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
