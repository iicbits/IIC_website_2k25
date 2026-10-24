import Image from "next/image";
import Link from "next/link";
import React from "react";

const Spotlight = () => {
  const spotlightItems = [
    {
      id: 1,
      title: "TEXcelerate 2026",
      category: "Idea Pitching Challenge",
      description:
        "Flagship challenge in collaboration with TEXMiN Hub, IIT ISM Dhanbad focusing on Mining 4.0 and Cyber-Physical Systems.",
      image: "/events/tex06.jpg",
      span: "col-span-1 lg:col-span-1",
      href: "/Initiatives",
    },
    {
      id: 2,
      title: "E-SUMMIT '26",
      category: "Flagship Summit",
      description:
        "Eastern India's premier entrepreneurship and innovation summit bringing together 10,000+ students, 250+ startups, and a ₹25L+ prize pool.",
      image: "/events/esum06.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      href: "/Initiatives",
    },
    {
      id: 3,
      title: "INNOVATHON 3.0",
      category: "36-Hour Hackathon",
      description:
        "National hackathon where participants build functional prototypes and practical technology solutions in AI/ML & smart automation.",
      image: "/events/inno07.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      href: "/Initiatives",
    },
    {
      id: 4,
      title: "UDAAN UG Fellowship",
      category: "Research & Fellowship",
      description:
        "Funded fellowship program empowering undergraduate innovators through research-driven projects, structured mentorship, and prototyping support.",
      image: "/events/udan01.webp",
      span: "col-span-1 lg:col-span-1",
      href: "/Initiatives",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
        (Featured Initiatives)
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-calsans font-bold text-center mb-4 text-gray-900">
        Initiatives Spotlight
      </h2>
      <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Highlighting the flagship summits, hackathons, and innovation challenges empowering the next generation of changemakers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
        {spotlightItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`relative ${item.span} overflow-hidden rounded-2xl group h-72 sm:h-80 md:h-96 border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-300 block`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark overlay gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300"></div>

            {/* Top badge and action icon */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-start justify-between z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white border border-white/20">
                {item.category}
              </span>
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
              <h3 className="text-white text-xl sm:text-2xl font-bold font-calsans mb-1.5 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Action link to view all initiatives */}
      <div className="text-center mt-10 md:mt-12">
        <Link
          href="/Initiatives"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-200 text-sm font-semibold shadow hover:shadow-md"
        >
          <span>Explore All Initiatives & Programs</span>
          <span className="text-base">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Spotlight;

