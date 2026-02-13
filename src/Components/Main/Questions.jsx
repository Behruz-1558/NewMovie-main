import React, { useState } from "react";

const faqs = [
  { id: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: "02", question: "How much does StreamVibe cost?", answer: "Plans start from $9.99/month." },
  { id: "03", question: "What content is available on StreamVibe?", answer: "Movies, series, and originals." },
  { id: "04", question: "How can I watch StreamVibe?", answer: "Mobile, web, smart TVs and more." },
  { id: "05", question: "How do I sign up for StreamVibe?", answer: "Create an account and choose a plan." },
  { id: "06", question: "What is the StreamVibe free trial?", answer: "7-day free trial available." },
  { id: "07", question: "How do I contact StreamVibe customer support?", answer: "Email or live chat support." },
  { id: "08", question: "What are the StreamVibe payment methods?", answer: "Visa, Mastercard, PayPal." },
];

const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);

function Questions() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black text-white px-5 md:px-10 py-20">

      <div className="mb-14 max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl">
            Got questions? We've got answers! Everything you need to know about StreamVibe.
          </p>
        </div>

        <button className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-red-600/20 w-full md:w-auto">
          <i className="fa-regular fa-circle-question"></i>
          Ask a Question
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-[1600px] mx-auto">

        <div>
          {leftFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-red-600/40">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-center py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-zinc-800 px-4 py-3 rounded text-sm">
                      {item.id}
                    </span>
                    <h3 className="font-medium">{item.question}</h3>
                  </div>

                  <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} />
                </button>

                {isOpen && (
                  <p className="text-gray-400 pb-4 text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div>
          {rightFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-red-600/40">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-center py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-zinc-800 px-4 py-3 rounded text-sm">
                      {item.id}
                    </span>
                    <h3 className="font-medium">{item.question}</h3>
                  </div>

                  <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} />
                </button>

                {isOpen && (
                  <p className="text-gray-400 pb-4 text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Questions;
