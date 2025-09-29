"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState(new Set()); // Speed question open by default

  const faqData = [
    {
      id: 0,
      question: "What is the Entrepreneurship Cell (E-Cell)?",
      answer:
        "The E-Cell is a non-profit, student-run body within the college that aims to foster an entrepreneurial mindset among students. We provide a platform for aspiring entrepreneurs to develop their ideas, gain practical skills, and connect with a supportive community and industry experts.",
    },
    {
      id: 1,
      question: "What are the benefits of joining the E-Cell?",
      answer:
        "Joining the E-Cell offers a range of benefits. You get access to exclusive workshops, seminars, and guest lectures from successful entrepreneurs. It's a great opportunity to enhance your leadership, problem-solving, and networking skills while getting a head start on building your own venture.",
    },
    {
      id: 2,
      question: "What kind of activities does the E-Cell organize?",
      answer:
        "We organize a variety of events, including business plan competitions, hackathons, pitch sessions, and startup weekends. We also host guest lectures, workshops on topics like marketing and finance, and provide mentorship to help students turn their ideas into reality. ",
    },
    {
      id: 3,
      question: "How can I get my startup idea funded?",
      answer:
        "The E-Cell provides several pathways for funding. We connect promising student startups with angel investors and venture capitalists. We also help you prepare for and participate in business plan competitions where you can win seed funding. Additionally, we guide you on how to apply for various government grants and other funding schemes.",
    },
    {
      id: 4,
      question: "Do I need to have a business idea to join the E-Cell?",
      answer:
        "No, you don't! The E-Cell is open to all students, regardless of their background or whether they have a business idea. We believe that an entrepreneurial mindset is valuable in any career path. Our goal is to help you develop skills like critical thinking and innovation that will be useful in any professional setting.",
    },
    {
      id: 5,
      question: "How can I become a member?",
      answer:
        "Becoming a member is easy. Keep an eye out for our recruitment drives, which are usually held at the beginning of each academic year. You can also follow our social media channels or check the college's official notice board for announcements. Feel free to contact the E-Cell team for more information.",
    },
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            (FAQs)
          </p>
          <h1 className="text-5xl md:text-6xl font-calsans text-gray-900 mb-6">
            Your Questions, Answered
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Helping you understand our process and offerings.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-6">
            {faqData.map((item) => (
              <>
                {item.id % 2 === 0 && (
                  <div
                    key={item.id}
                    className="bg-foreground rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {item.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        {openItems.has(item.id) ? (
                          <Minus className="w-6 h-6 text-gray-600 transform transition-transform duration-200" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-600 transform transition-transform duration-200" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems.has(item.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex-1 space-y-6">
            {faqData.map((item) => (
              <>
                {item.id % 2 !== 0 && (
                  <div
                    key={item.id}
                    className="bg-foreground rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {item.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        {openItems.has(item.id) ? (
                          <Minus className="w-6 h-6 text-gray-600 transform transition-transform duration-200" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-600 transform transition-transform duration-200" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems.has(item.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
