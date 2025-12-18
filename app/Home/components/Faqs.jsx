"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState(new Set()); // Speed question open by default

  const faqData = [
    {
      id: 0,
      question: "How can I get my startup idea funded?",
      answer:
        "IIC helps members prepare project proposals and connects them with potential investors, incubators, or institutional funding schemes. Funding is granted based on the merit and feasibility of the startup idea.",
    },

    {
      id: 1,
      question: "What roles and responsibilities do IIC members have?",
      answer:
        "IIC members participate in innovation activities, attend workshops and seminars, contribute to idea generation, help organize events, and may mentor or guide others depending on their expertise.",
    },
    {
      id: 2,
      question: "What industries or sectors does IIC collaborate with?",
      answer:
        "IIC collaborates with a variety of industries, business incubators, venture capital firms, and innovation networks to provide students and faculty with exposure and opportunities.",
    },
    {
      id: 3,
      question: "Who can become a member of the IIC?",
      answer:
        "Any student, faculty, or staff member of the institution interested in innovation, entrepreneurship, or startup activities can become a member of the IIC.",
    },
    {
      id: 4,
      question: "How are innovative ideas selected for incubation?",
      answer:
        "Ideas are typically selected through structured competitions, hackathons, or proposal submissions. Selection is based on originality, feasibility, and potential societal or commercial impact.",
    },

    {
      id: 5,
      question:
        "Does IIC offer training or support for entrepreneurial skills?",
      answer:
        "Yes, IIC organizes training sessions on business model development, design thinking, pitching, leadership, and other entrepreneurial skills to help members develop as innovators.",
    },
    {
      id: 6,
      question:
        "Can I participate in national and international innovation competitions through IIC?",
      answer:
        "Yes, IIC facilitates participation in national and international competitions, providing guidance, mentorship, and sometimes funding support for travel or project development.",
    },
    {
      id: 7,
      question: "How does IIC help with protecting intellectual property (IP)?",
      answer:
        "IIC conducts IP awareness programs, provides guidance on patent filing processes, and connects innovators with IP experts to protect inventions and innovations.",
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
          <div className="flex-1">
            {faqData.map((item, index) => (
              <div key={item.id}>
                {item.id % 2 === 0 && (
                  <div
                    key={index}
                    className="bg-foreground mb-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
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
                          <FaMinus className="w-4 h-4 text-gray-600 transform transition-transform duration-200" />
                        ) : (
                          <FaPlus className="w-4 h-4 text-gray-600 transform transition-transform duration-200" />
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
              </div>
            ))}
          </div>
          <div className="flex-1">
            {faqData.map((item) => (
              <div key={item.id}>
                {item.id % 2 !== 0 && (
                  <div
                    key={item.id}
                    className="bg-foreground mb-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
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
                          <FaMinus className="w-4 h-4 text-gray-600 transform transition-transform duration-200" />
                        ) : (
                          <FaPlus className="w-4 h-4 text-gray-600 transform transition-transform duration-200" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
