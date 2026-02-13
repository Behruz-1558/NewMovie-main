import React from "react";
import Banner from '../Components/Main/Banner'
import Questions from '../Components/Main/Questions'

const Support = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 my-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Welcome to our <br /> support page!
            </h2>
            <p className="text-[#999999] mb-8 max-w-md">
              We're here to help you with any problems you may be having with our product.
            </p>

            <div>
              <img src="./img/Sub Container.png" alt="" />
            </div>
            
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm mb-2 block">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000]"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000]"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Phone Number</label>
                <div className="flex gap-2">
                  <select className="bg-black border border-white/10 rounded-lg px-3">
                    <option>🇮🇳</option>
                    <option>🇺🇿</option>
                    <option>🇺🇸</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000]"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm mb-2 block">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your Message"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000]"
              ></textarea>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-[#999999]">
                <input type="checkbox" className="accent-[#E50000]" />
                I agree with Terms of Use and Privacy Policy
              </label>

              <button className="bg-[#E50000] px-6 py-3 rounded-md hover:bg-red-700 transition">
                Send Message
              </button>
            </div>

          </div>
        </div>
      </div>

      <Questions />
      <Banner />
    </section>
  );
};

export default Support;




