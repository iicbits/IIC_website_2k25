import Image from "next/image";
import React from "react";

const IntroIIC = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
      <h2 className="text-accent text-5xl font-dancingscript mb-8">Hello.</h2>
      <p className="text-3xl md:text-4xl font-calsans max-w-5xl text-center px-6">
        Welcome to the Institution's Innovation Council at BIT Sindri. We are
        dedicated to{" "}
        <span className="text-secondary">
          {" "}
          fostering innovation and entrepreneurship among students and faculty.{" "}
        </span>{" "}
        Our mission is to create a vibrant ecosystem that nurtures creativity,
        collaboration, and the development of groundbreaking ideas. Join us in
        our journey to inspire and empower the next generation of innovators!
      </p>
      <div className="flex justify-center flex-wrap max-w-xl gap-4 mt-12">
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Entrepreneurship
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Innovation
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Startups
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Technology
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Creativity
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Leadership
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Collaboration
        </p>
        <p className="bg-secondary text-sm text-white rounded-2xl px-4 py-2">
          Research
        </p>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold font-dancingscript">Recognised by</h1>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
          <p className=" w-48">
            <Image
              src="/images/logos/MoE_logo.png"
              alt="Institution A"
              width={500}
              height={500}
            />
          </p>
          <p className=" w-36">
            <Image
              src="/images/logos/moe_full_logo.png"
              alt="Institution A"
              width={500}
              height={500}
            />
          </p>
          <p className="w-20">
            <Image
              src="/images/logos/aicte-logo.png"
              alt="Institution A"
              width={500}
              height={500}
            />
          </p>
          <p className="w-20">
            <Image
              src="/images/logos/jut.png"
              alt="Institution A"
              width={500}
              height={500}
            />
          </p>
          <p className="w-28">
            <Image
              src="/images/logos/BIT logo.png"
              alt="Institution A"
              width={500}
              height={500}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroIIC;
