import Image from "next/image";
import React from "react";

const IntroIIC = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
      <h2 className="text-accent text-5xl font-dancingscript mb-8">Hello.</h2>
      <p className="text-3xl md:text-4xl font-calsans max-w-5xl text-center px-6">
        Welcome to the Startup & Entrepreneurship Cell, BIT Sindri.We are committed to{" "}
        <span className="text-secondary">
          {" "}
          building a campus where ideas grow, leadership develops, and innovation thrives. As the official council driving entrepreneurial initiatives at BIT Sindri, we work to empower students with the mindset, skills, and opportunities needed to transform ideas into impactful solutions.{" "}
        </span>{" "}
        Our ecosystem connects creative thinking with real world exposure through mentorship, entrepreneurial initiatives, and hands on innovation experiences.
        Here, students are encouraged to explore, experiment, and grow because every idea deserves the chance to become something impactful.
      </p>
      {/* <div className="flex justify-center flex-wrap max-w-xl gap-4 mt-12">
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
      </div> */}
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold font-dancingscript">
          Patronages and Recognitions
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10 md:mt-4">
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
