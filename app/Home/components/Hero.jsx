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
          Igniting{" "}
          <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
          <span className="text-accent">Innovation</span>
          <br />
          <span className="text-secondary">Inspiring</span>{" "}
          <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
          Ideas
          <br />
          <span className="text-secondary">Impacting the</span> Future{" "}
        </h2>
        <p className="text-sm md:text-base font-semibold max-w-xl text-gray-900 mb-12">
          We empower students and startups to transform visionary ideas into
          impactful solutions through mentorship, resources, and real world
          opportunities, turning creativity into lasting change.
        </p>
      </main>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-foreground via-[#f0eeee]/50 to-black/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <Image
          src="/home/Banner.webp"
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
