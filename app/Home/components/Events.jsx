"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      description:
        "Showcase your ideas, compete with top innovators, and earn funding to turn your concept into a real venture.",
      position: "Idea Pitching Competition",
      image: "/events/ipc1.webp", // Replace with actual image path
    },
    {
      description:
        "A 36-hour innovation marathon where students solve real challenges, build creative solutions, and showcase teamwork under pressure.",
      position: "Innovathon",
      image: "/events/inno1.webp", // Replace with actual image path
    },
    {
      description:
        "A platform to present mining focused innovations, compete across rounds, and secure funding to grow impactful tech-driven solutions.",
      position: "TexCelerate",
      image: "/events/tex1.webp", // Replace with actual image path
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="min-h-screen py-12 md:mt-10">
      <div className="text-gray-500 text-base mb-4 text-center">(Events)</div>
      <h1 className="text-5xl md:text-6xl font-calsans font-bold mb-8 text-center">
        Our Initiatives
      </h1>
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-6 px-2">
        {/* Left Card */}
        <div className="bg-gray-900 text-white w-full md:w-80 rounded-3xl p-8 flex flex-col justify-between min-h-[500px] flex-shrink-0">
          <div className="space-y-12">
            <div>
              <div className="text-6xl font-bold mb-2">100+</div>
              <div className="text-gray-300 text-lg">Total Events</div>
            </div>

            <div>
              <div className="text-6xl font-bold mb-2">50L+</div>
              <div className="text-gray-300 text-lg">
                Total Prize Money Distributed
              </div>
            </div>

            <div>
              <div className="text-6xl font-bold mb-2">10,000+</div>
              <div className="text-gray-300 text-lg">Participation</div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${testimonials[currentSlide].image})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
            {/* Slide indicator */}
            <div className="flex justify-end">
              <span className="bg-black bg-opacity-30 px-3 py-1 rounded-full text-sm">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-6">
              <div className="text-gray-300 text-lg">
                {testimonials[currentSlide].position}
              </div>
              <blockquote className="text-3xl font-bold leading-tight">
                "{testimonials[currentSlide].description}"
              </blockquote>

              {/* <div>
                <div className="text-xl font-semibold">
                  {testimonials[currentSlide].author}
                </div>
                <div className="text-gray-300">
                  {testimonials[currentSlide].position}
                </div>
              </div> */}
            </div>

            {/* Navigation */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={prevSlide}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded-full p-3"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded-full p-3"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
