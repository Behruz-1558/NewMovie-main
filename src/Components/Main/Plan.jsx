import React, { useState } from "react";

function Plan() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      desc:
        "Enjoy an extensive library of movies and shows, including recently released titles.",
      monthly: 9.99,
      yearly: 99.99
    },
    {
      name: "Standard Plan",
      desc:
        "Access a wider selection of movies and shows, including most new releases and exclusive content.",
      monthly: 12.99,
      yearly: 129.99,
      popular: true
    },
    {
      name: "Premium Plan",
      desc:
        "Access the widest selection of movies and shows, including all new releases and Offline Viewing.",
      monthly: 14.99,
      yearly: 149.99
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose the plan that's right for you
            </h2>
            <p className="text-[#999999] leading-relaxed">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>

          {/* TOGGLE */}
          <div className="mt-6 lg:mt-0 bg-[#111] p-1 rounded-xl flex w-49">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-lg text-sm transition
                ${billing === "monthly"
                  ? "bg-[#1c1c1c] text-white"
                  : "text-gray-400"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-lg text-sm transition
                ${billing === "yearly"
                  ? "bg-[#1c1c1c] text-white"
                  : "text-gray-400"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#0f0f0f] rounded-2xl p-8 border
                ${plan.popular
                  ? "border-[#E50000]/40 shadow-[0_0_40px_rgba(229,0,0,0.15)]"
                  : "border-white/5 hover:border-white/10"} transition`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 text-xs bg-[#E50000] px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-[#999999] text-sm mb-8">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">
                  $
                  {billing === "monthly"
                    ? plan.monthly
                    : plan.yearly}
                </span>
                <span className="text-gray-400 text-sm">
                  {billing === "monthly" ? " /month" : " /year"}
                </span>

                {billing === "yearly" && (
                  <div className="text-green-500 text-sm mt-1">
                    Save 20%
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 border border-white/10 rounded-lg py-3 text-sm hover:bg-white/5 transition">
                  Start Free Trial
                </button>
                <button className="flex-1 bg-[#E50000] rounded-lg py-3 text-sm hover:bg-red-700 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Plan;
