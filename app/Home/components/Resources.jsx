"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const awards = [
    {
      organization: "FaYouTube",
      title: "Top 5 Best of TedX talks for Entrepreneurs",
      company: "Blog",
      logo: <FaYoutube height={30} width={30} />,
      url: "",
    },
    {
      organization: "FaYouTube",
      title: "Top 5 Best of TedX talks for Entrepreneurs",
      company: "Blog",
      logo: <FaYoutube height={30} width={30} />,
      url: "",
    },
    {
      organization: "FaYouTube",
      title: "Top 5 Best of TedX talks for Entrepreneurs",
      company: "Blog",
      logo: <FaYoutube height={30} width={30} />,
      url: "",
    },
    {
      organization: "FaYouTube",
      title: "Top 5 Best of TedX talks for Entrepreneurs",
      company: "Blog",
      logo: <FaYoutube height={30} width={30} />,
      url: "",
    },
    {
      organization: "FaYouTube",
      title: "Top 5 Best of TedX talks for Entrepreneurs",
      company: "Blog",
      logo: <FaYoutube height={30} width={30} />,
      url: "",
    },
  ];

  return (
    <div className="max-w-7xl overflow-hidden mx-auto py-16 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-gray-500 text-base mb-4">(Notices)</div>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          Opportunities
        </h2>
      </div>

      {/* Opportunities list */}
      <div className="space-y-0 border-t-[0.5px] border-secondary">
        {awards.map((award, index) => (
          <a
            key={index}
            href={award.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={index}
              className={`group relative border-b-[0.5px] py-8 cursor-pointer transition-all duration-700 ${
                hoveredIndex - 1 === index
                  ? "border-accent"
                  : "border-secondary"
              }`}
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="flex items-center justify-between">
                {/* Left: Organization */}
                <div className="w-48 flex-shrink-0">
                  <span
                    className={`text-sm transition-colors duration-700 ${
                      hoveredIndex - 1 === index
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {award.organization}
                  </span>
                </div>

                {/* Center: Award Title */}
                <div className="flex-1 text-center px-8">
                  <span
                    className={`text-sm md:text-lg transition-all duration-700 `}
                  >
                    <span
                      className={`${
                        hoveredIndex - 1 === index ? "text-accent" : ""
                      }`}
                    >
                      {award.title}
                    </span>
                  </span>
                </div>

                {/* Right: Company */}
                <div className="hidden md:flex w-48 flex-shrink-0 text-right">
                  <span
                    className={`text-sm transition-colors duration-700 ${
                      hoveredIndex - 1 === index
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {award.company}
                  </span>
                </div>

                {/* Orange Circle - Only visible on hover of first item */}

                <div className="hidden md:block absolute right-[20%] top-0 animate-[bounce_3s_ease-in-out_infinite]">
                  <div
                    className={`bg-accent text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg transition-all duration-300 ease-in ${
                      hoveredIndex - 1 === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="opacity-70">{award.logo}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
