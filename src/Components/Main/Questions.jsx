import React, { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  { id: "02", question: "How much does StreamVibe cost?", answer: "Plans start from $9.99/month." },
  { id: "03", question: "What content is available on StreamVibe?", answer: "Movies, series, and originals." },
  { id: "04", question: "How can I watch StreamVibe?", answer: "Mobile, web, smart TVs and more." },
  { id: "05", question: "How do I sign up for StreamVibe?", answer: "Create an account and choose a plan." },
  { id: "06", question: "What is the StreamVibe free trial?", answer: "7-day free trial available." },
  { id: "07", question: "How do I contact StreamVibe customer support?", answer: "Email or live chat support." },
  { id: "08", question: "What are the StreamVibe payment methods?", answer: "Visa, Mastercard, PayPal." },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-black text-white  px-6 md:px-20 py-20 ">
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-2">
            Got questions? We've got answers!
          </p>
        </div>

        <button className="bg-red-600 px-6 py-3 rounded-lg">
          Ask a Question
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 ">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.id} className="border-b border-red-600/40 ">
              <button onClick={() => toggleItem(index)} className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-zinc-800 px-3 py-2 rounded text-sm">
                    {item.id}
                  </span>
                  <h3>{item.question}</h3>
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
    </section>
  );
}

export default Questions;
