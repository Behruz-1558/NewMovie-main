import React from "react";
import Banner from "../Components/Main/Banner";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Login() {
  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[1700px] bg-black border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 mt-20">

          {/* LEFT IMAGE */}
          <div className="flex-1">
            <img
              src="./img/Sub Container.png"
              alt="movies"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-semibold mb-10">
              Please login to use our app
            </h2>

            {/* Email */}
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition"
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="block mb-2 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition"
              />
            </div>

            {/* Login Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium mb-6">
              Login
            </button>

            <p className="text-center text-gray-400 mb-6">
              Don't have an account?
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 border border-gray-700 rounded-lg py-3 hover:bg-[#111] transition">
                <FaGoogle />
                Login with Google
              </button>

              <button className="flex-1 flex items-center justify-center gap-3 border border-gray-700 rounded-lg py-3 hover:bg-[#111] transition">
                <FaGithub />
                Login with Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default Login;
