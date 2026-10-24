"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiatives = [
    {
      title: "E-SUMMIT '26",
      category: "Flagship Summit",
      description:
        "Eastern India's premier entrepreneurship and innovation summit bringing together 10,000+ students, 250+ startups, venture capitalists, and industry experts with a ₹25L+ prize pool.",
      image: "/events/esum05.jpg",
    },
    {
      title: "INNOVATHON 3.0",
      category: "36-Hour Hackathon",
      description:
        "A 36-hour national-level innovation marathon where students solve real industry challenges, build creative prototypes, and showcase teamwork under expert mentorship.",
      image: "/events/inno08.jpg",
    },
    {
      title: "TEXcelerate 2026",
      category: "Idea Pitching Challenge",
      description:
        "Flagship challenge in collaboration with TEXMiN Hub, IIT ISM Dhanbad, driving scalable, industry-oriented solutions in Mining 4.0 and Cyber-Physical Systems.",
      image: "/events/tex07.jpg",
    },
    {
      title: "UDAAN UG Fellowship",
      category: "Research & Prototyping",
      description:
        "Empowering undergraduate innovators through funded, research-driven projects aligned with real-world national priorities, offering structured mentorship and seed funding.",
      image: "/events/udan02.webp",
    },
    {
      title: "Idea Pitching Competition",
      category: "IIC Programs",
      description:
        "Curated in collaboration with Jharkhand University of Technology (JUT), Ranchi to encourage students to transform creative concepts into viable startup ventures.",
      image: "/events/ipc1.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % initiatives.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + initiatives.length) % initiatives.length
    );
  };

  const active = initiatives[currentSlide];

  return (
    <section className="min-h-screen py-12 md:py-20">
      <div className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-3 text-center">
        (Events & Programs)
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-calsans font-bold mb-8 text-center text-gray-900">
        Our Initiatives
      </h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-6 px-4 sm:px-6">
        {/* Left Card - Stats & CTA */}
        <div className="bg-gray-900 text-white w-full md:w-80 rounded-3xl p-8 flex flex-col justify-between min-h-[480px] md:min-h-[540px] flex-shrink-0 shadow-lg">
          <div className="space-y-10">
            <div>
              <div className="text-5xl md:text-6xl font-bold font-calsans text-accent mb-1">
                100+
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">
                Total Events & Workshops
              </div>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold font-calsans text-white mb-1">
                ₹50L+
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">
                Prize Money & Grants Distributed
              </div>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold font-calsans text-white mb-1">
                10,000+
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">
                Student & Innovator Participation
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <Link
              href="/Initiatives"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors"
            >
              <span>View All Initiatives</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Card - Showcase Slider */}
        <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[480px] md:min-h-[540px] shadow-lg border border-gray-200/50">
          {/* Background Image using Next.js Image for optimization */}
          <Image
            src={active.image}
            alt={active.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover transition-all duration-700 ease-out"
            priority
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between text-white">
            {/* Header: Category Badge & Slide Indicator */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                {active.category}
              </span>
              <span className="bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono border border-white/20">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(initiatives.length).padStart(2, "0")}
              </span>
            </div>

            {/* Main Details */}
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-calsans text-white tracking-tight">
                {active.title}
              </h3>
              <blockquote className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
                "{active.description}"
              </blockquote>

              <div>
                <Link
                  href="/Initiatives"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 text-xs font-semibold transition-all duration-300"
                >
                  <span>Learn more about {active.title}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Bottom Controls: Pagination Dots & Arrows */}
            <div className="flex items-center justify-between pt-4">
              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {initiatives.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all duration-300 rounded-full ${currentSlide === idx
                        ? "w-8 bg-accent"
                        : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-all duration-200 rounded-full p-3 text-white shadow-md active:scale-95"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-all duration-200 rounded-full p-3 text-white shadow-md active:scale-95"
                  aria-label="Next Slide"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

