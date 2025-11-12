import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-foreground z-10 relative">
      <main className="z-20 bg-transparent flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-2 text-sm md:text-base text-secondary mb-12">
          <Image
            src="/images/logos/IIC logo.png"
            alt="Image 1"
            width={80}
            height={100}
            className=""
          />
          <p>
            Institution&apos;s Innovation Council cum Entrepreneurship Cell, BIT
            Sindri
          </p>
        </div>
        <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
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

        <button className="flex items-center space-x-2 px-5 py-2 bg-neutral-700 rounded-full hover:bg-neutral-600 text-primary transition-colors duration-300">
          <span>View Plans</span>
          <span className="text-xl">→</span>
        </button>
      </main>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-foreground to-[#f0eeee]/50 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <Image
          src="/home/Banner.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
