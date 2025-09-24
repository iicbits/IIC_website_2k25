import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Web Design",
    description:
      "We design visually compelling, user-centric websites that blend creativity with functional brand from scratch.",
    image: "/images/incub.png",
    tags: ["UI/UX Design", "Responsive Layouts", "Web Development"],
  },
  {
    title: "Web Design",
    description:
      "We design visually compelling, user-centric websites that blend creativity with functional brand from scratch.",
    image: "/images/incub.png",
    tags: ["UI/UX Design", "Responsive Layouts", "Web Development"],
  },
];

const page = () => {
  return (
    <section className="">
      <div className="min-h-screen md:min-h-[80vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl leading-loose mb-8">
            Empowering{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Design</span>
            <br />
            <span className="text-secondary">for</span>{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Design Startups
            <br />
            <span className="text-secondary">based in</span> London{" "}
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            We make it easy for startups to launch, grow, and scale with clean,
            conversion focused designs—no delays, no drama.
          </p>

          <button className="flex items-center space-x-2 px-5 py-2 rounded-full hover:bg-neutral-600 border border-gray-400 transition-colors duration-300">
            <span>Scroll Down</span>
            <span className="text-xl animate-bounce">↓</span>
          </button>
        </main>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm text-gray-500 tracking-wider">(Events)</p>
            <h2 className="mt-2 text-5xl md:text-6xl font-calsans font-extrabold text-gray-900">
              Our Initiatives
            </h2>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start space-y-7 lg:space-y-0 lg:space-x-12 mb-16 last:mb-0 border-t-[1px] border-gray-400/80 pt-8"
            >
              {/* Service title and description */}
              <div className="md:w-[15%] text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 md:mb-4">
                  {service.title}
                </h3>
              </div>

              {/* Image and tags */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                    width={500}
                    height={300}
                  />
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 md:px-4 md:py-2 bg-secondary text-white text-xs md:text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="">
                <p className="text-gray-600 leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
