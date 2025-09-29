import { Locate, PinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

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

      <div className=" max-w-7xl md:mx-auto flex items-center flex-col-reverse md:flex-row justify-center gap-10">
        <main className="flex flex-col md:w-1/2 md:pt-16 px-4 md:px-8 ">
          <h2 className="font-calsans text-left text-4xl md:text-4xl lg:text-5xl leading-loose md:mb-8">
            Who are we?
          </h2>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurial Cell of BIT Sindri. Our mission
            is to empower design startups with exceptional, conversion-focused
            web solutions that drive growth and success. We are the official
            Entrepreneurial Cell of BIT Sindri. Our mission is to empower design
            startups with exceptional, conversion-focused web solutions that
            drive growth and success.
          </p>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurial Cell of BIT Sindri. Our mission
            is to empower design startups with exceptional, conversion-focused
            web solutions that drive growth and success. We are the official
            Entrepreneurial Cell of BIT Sindri. Our mission is to empower design
            startups with exceptional, conversion-focused web solutions that
            drive growth and success.
          </p>
        </main>
        <div className="md:w-1/2 px-4">
          <Image
            src="/images/incub.png"
            alt="Incubator"
            width={500}
            height={300}
            priority
            className="mx-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 md:gap-20 mt-8">
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <PinIcon />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Mission</h2>
          <p className="text-secondary mt-2">
            Our mission is to empower design startups with exceptional,
            conversion-focused web solutions that drive growth and success.
          </p>
        </div>
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <Locate />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Vision</h2>
          <p className="text-secondary mt-2">
            To be the leading catalyst for design innovation, transforming
            startups into industry leaders through strategic web development and
            unparalleled digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
