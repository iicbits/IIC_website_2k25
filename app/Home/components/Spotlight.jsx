import Image from "next/image";
import React from "react";

const Spotlight = () => {
  const spotlightItems = [
    { id: 1, title: "Innovation Hub", image: "/events/spot1.webp", span: "col-span-1" },
    { id: 2, title: "Tech Excellence", image: "/events/spot2.webp", span: "md:col-span-2" },
    { id: 3, title: "Future Forward", image: "/events/spot3.webp", span: "md:col-span-2" },
    { id: 4, title: "Creative Space", image: "/events/spot4.webp", span: "col-span-1" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 py-8 md:py-20">
      <p className="text-center text-lg text-gray-600 mb-4">(Memories)</p>
      <h2 className="text-5xl md:text-6xl font-calsans font-bold text-center mb-8">
        Spotlight
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-fr">
        {spotlightItems.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.span} overflow-hidden rounded-lg group h-64 md:h-80`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
