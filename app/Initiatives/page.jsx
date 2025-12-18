"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const services = [
  {
    title: "INNOVATHON",
    description:
      "INNOVATHON, a 36-hour competition organized by the Institution’s Innovation Council (IIC 7.0) in association with Department of Production and Industrial Engineering, BIT Sindri.The event presented participants with a variety of real-world problem statements, challenging them to design cutting-edge solutions in areas such as smart manufacturing, predictive maintenance,etc.",
    image: [
      "/events/inno1.webp",
      "/events/inno2.webp",
      "/events/inno3.webp",
      "/events/inno4.webp",
      "/events/inno5.webp",
    ],
  },
  {
    title: "MENTOR MENTEE SCHEME ",
    description:
      "Under the Supervision of Chairman, Prof. Pankaj Rai (Director, BIT Sindri), President, Prof. Prakash Kumar & Convener Prof. Rahul Kumar. Standard Xth Students from Mother's Teresa School visited BIT Sindri Innovation & Incubation Centre Foundation.",
    image: [
      "/events/mms2.jpeg",
      "/events/mms1.jpeg",
      "/events/mms3.jpeg",
      "/events/mms4.jpeg",
      "/events/mms5.jpeg",
    ],
  },
  {
    title: "TEXcelerate",
    description:
      "Institution’s Innovation Council (IIC 7.0), BIT Sindri in collaboration with TEXMiN Hub, IIT ISM Dhanbad successfully conducted Texcelerate. The objective of the event was to encourage and support innovative ideas that can be developed into real-world solutions to address existing challenges.",
    image: [
      "/events/tex1.webp",
      "/events/tex2.webp",
      "/events/tex3.webp",
      "/events/tex4.webp",
    ],
  },
  {
    title: "Idea Pitching Competition",
    description:
      "As a part of its core mission to promote innovation, creativity, and problem-solving among students, the Institution’s Innovation Council (IIC 7.0) in collaboration with Jharkhand University of Technology, Ranchi BIT Sindri organized Idea Pitching Competition. This event was specifically curated to encourage students to explore innovative solutions rooted in real-world problems.",
    image: ["/events/ipc1.webp", "/events/ipc2.webp"],
  },
  {
    title: "IDEOGRAPH",
    description:
      "In honor of World Creativity and Innovation Day, BIT Sindri’s Institution’s Innovation Council (IIC 7.0) hosted IDEOGRAPH, a compelling and imaginative poster presentation event that brought together student innovators from across engineering disciplines.",
    image: [
      "/events/ideo2.webp",
      "/events/ideo1.webp",
      "/events/ideo3.webp",
      "/events/ideo4.webp",
    ],
  },

  {
    title: "SIH Internals",
    description:
      "The Hackathon & Coding Club at BIT Sindri, in collaboration with the Entrepreneurial Cell and Institution’s Innovation Council (IIC 7.0), successfully organized an internal hackathon which was designed to foster technological innovation, teamwork, and problem-solving skills among students.",
    image: [
      "/events/sih3.webp",
      "/events/sih2.webp",
      "/events/sih1.webp",
      "/events/sih4.webp",
    ],
  },
];

const page = () => {
  const [currentSlides, setCurrentSlides] = useState(services.map(() => 0));

  const nextSlide = (serviceIndex) => {
    setCurrentSlides((prev) =>
      prev.map((slide, idx) =>
        idx === serviceIndex
          ? slide === services[serviceIndex].image.length - 1
            ? 0
            : slide + 1
          : slide
      )
    );
  };

  const prevSlide = (serviceIndex) => {
    setCurrentSlides((prev) =>
      prev.map((slide, idx) =>
        idx === serviceIndex
          ? slide === 0
            ? services[serviceIndex].image.length - 1
            : slide - 1
          : slide
      )
    );
  };

  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Where Ideas{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Compete</span>,
            <br />
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-secondary">Collaborate </span>& Come Alive
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            Our initiatives bring together innovation challenges, hackathons,
            workshops, and real world problem solving to shape the next
            generation of innovators.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className="px-2 md:px-4 pt-10">
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
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
                  <Image
                    src={service.image[currentSlides[index]]}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0">
                    <button
                      onClick={() => prevSlide(index)}
                      className="absolute bottom-2 right-16 -translate-y-1/2 bg-white/30 backdrop:blur-lg p-2 rounded-full shadow-md"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={() => nextSlide(index)}
                      className="absolute bottom-2 right-4 -translate-y-1/2 bg-white/30 backdrop:blur-lg p-2 rounded-full shadow-md"
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                {/* Tags */}
                {/* <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 md:px-4 md:py-2 bg-secondary text-white text-xs md:text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>

              <div className="">
                <p className="text-gray-600 leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mx-auto mt-40 w-full h-[70vh] md:h-[60vh]">
          <div className="relative w-full h-full">
            <Image
              src="/events/EventCTA.webp"
              alt="Incubator"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-3xl px-6">
              <h3 className="text-white text-4xl md:text-5xl font-bold text-center">
                Let's <span className="text-accent">Collaborate</span> <br /> &
                Create Something Big
              </h3>
              <p className="text-gray-400 mt-4 max-w-xl text-center">
                To Collaborate with us, reach us out at iicbit@bitsindri.ac.in
                or simply fill out the contact form
              </p>
              <Link
                href="/Contact"
                className={`mt-10 px-4 py-2 border border-neutral-700 rounded-full text-sm transition-colors duration-300 text-white hover:border-accent`}
              >
                Contact<span className="ml-2 animate-pulse">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
