"use client";

import { LuLocateFixed } from "react-icons/lu";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Igniting{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Innovation</span>
            <br />
            <span className="text-secondary">Inspiring</span>{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Ideas
            <br />
            <span className="text-secondary">Impacting </span>the Future{" "}
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            We empower students and startups to transform visionary ideas into
            impactful solutions through mentorship, resources, and real world
            opportunities, turning creativity into lasting change.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className=" max-w-7xl md:mx-auto flex items-center flex-col-reverse md:flex-row justify-center gap-10">
        <main className="flex flex-col md:w-1/2 md:pt-16 px-4 md:px-8 ">
          <h2 className="font-calsans text-left text-4xl md:text-4xl lg:text-6xl font-bold leading-loose md:mb-8">
            Who are we?
          </h2>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurship Cell of BIT Sindri, a council
            dedicated to nurturing innovation, creativity, and entrepreneurial
            mindset within the student community. Our council works to create an
            environment where ideas are explored, refined, and developed into
            meaningful solutions. Through startup-oriented initiatives,
            idea-development programs, innovation-based learning experiences,
            and a range of activities such as workshops, seminars, mentorship
            sessions, idea-pitching events, hackathons, and other experiential
            opportunities, we help students gain the exposure and practical
            understanding needed to navigate the startup ecosystem.
          </p>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We enable students to build the confidence and skills needed to
            navigate the startup ecosystem. We strive to inspire the next
            generation of founders, innovators, and leaders who can drive
            impactful change in technology, society, and industry.
          </p>
        </main>
        <div className="md:w-1/2 px-4">
          <Image
            src="/images/aboutus.png"
            alt="Incubator"
            width={500}
            height={300}
            priority
            className="mx-auto max-h-[60vh] object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 md:gap-20 mt-8 mb-16">
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <LuLocateFixed />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Vision</h2>
          <p className="text-secondary mt-2">
            Our vision is to build a dynamic entrepreneurial culture at BIT
            Sindri that sparks innovative thinking, strengthens entrepreneurial
            drive, and empowers students to build solutions that make a real
            difference. We aim to shape future founders and leaders who
            contribute meaningfully to technological advancement, industry
            growth, and societal progress.
          </p>
        </div>
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <FaMapPin />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Mission</h2>
          <p className="text-secondary mt-2">
            Our mission is to cultivate a vibrant entrepreneurial ecosystem that
            encourages innovation, supports idea development, and empowers
            students to develop their ideas into real, innovative and impactful
            solutions. We aim to provide mentorship, resources, and experiential
            learning opportunities that help young innovators grow into
            confident and capable startup leaders.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl md:mx-auto ">
          <h1 className="font-calsans text-left text-4xl md:text-4xl lg:text-4xl leading-loose md:mb-8">
            Celebrating Success
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {spotlightItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Subtitle overlay (if exists) */}
                  {item.subtitle && (
                    <div className="absolute top-4 right-4 left-4 text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Title Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-black p-4 transform translate-y-0 transition-all duration-300">
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const spotlightItems = [
  {
    id: 1,
    image: "/events/spot4.webp",
    title: "Successfully organised the TEXcelerate competition",
    subtitle:
      "Awarded by Ministry of Education's Innovation Cell (MIC) for outstanding performance in fostering innovation and entrepreneurship.",
  },
  {
    id: 2,
    image: "/events/spot3.webp",
    title: "Felicitation to the selected students in TEXcelerate",
    subtitle:
      "Awarded by Ministry of Education's Innovation Cell (MIC) for outstanding performance in fostering innovation and entrepreneurship.",
  },
  {
    id: 3,
    image: "/events/spot8.webp",
    title:
      "President Prof. Prakash recognised for Excellence by Governer, Govt. of Jharkhand.",
    subtitle: "",
  },
  {
    id: 4,
    image: "/events/spot2.webp",
    title: "TEAM ARPIT from BIT Sindri at CANSAT Student India Competition.",
    subtitle: "",
  },
];
