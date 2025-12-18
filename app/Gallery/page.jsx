"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    imageUrl: "/gallery/ipc1.webp",
  },
  {
    id: 2,
    imageUrl: "/gallery/inno1.webp",
  },
  {
    id: 3,
    imageUrl: "/gallery/tex3.webp",
  },
  {
    id: 4,
    imageUrl: "/gallery/ideo2.webp",
  },
];

const categories = ["All"];

const page = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectData;
    }
    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            A{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Glimpse</span>
            <br />
            <span className="text-secondary">into</span>{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Our Journey
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            Explore moments of innovation, creativity, and collaboration captured from our events, workshops, and startup initiatives.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-secondary mb-4">(Archives)</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-calsans font-extrabold mb-8">
          IIC Moments
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
              text-base font-semibold border-b-2 transition duration-300 
              ${
                activeFilter === category
                  ? "text-accent border-accent"
                  : "text-gray-500 border-transparent hover:text-accent" // Inactive state
              }
            `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-900">
                <Image
                  src={project.imageUrl}
                  alt={`Image ${project.id}`}
                  fill
                  className="object-cover"
                  priority // Load the first few images faster
                />
                <div className="absolute inset-0 flex items-end p-7 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">{project.title}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-10">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
