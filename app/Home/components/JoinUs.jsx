import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { LuTicketCheck } from "react-icons/lu";

const JoinUs = () => {
  return (
    <section className="bg-foreground min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-t from-foreground via-background to-foreground">
      <div className="absolute flex items-center justify-center flex-col z-10">
        <h4 className="font-dancingscript text-accent text-4xl mb-10">
          Registrations Ongoing.
        </h4>
        <h1 className="font-calsans text-5xl md:text-6xl leading-tight text-center">
          Join a <span className="text-secondary"></span> <br />{" "}
          Community of <span className="text-accent">Innovators</span>
        </h1>
        <p className="text-center text-sm md:text-lg max-w-xl mt-4 text-secondary">
          Connect with like-minded creators, problem solvers, and aspiring founders. Engage in meaningful discussions, discover exclusive opportunities, and stay informed through a collaborative and supportive community.
        </p>

        <Link href="/Registration-form" rel="noopener noreferrer">
          <button className="flex items-center space-x-2 px-5 py-2 bg-neutral-700 rounded-full hover:bg-neutral-600 text-primary transition-colors duration-300 mt-10 cursor-pointer">
            <span>Apply Now</span>
            <span className="text-xl animate-pulse">→</span>
          </button>
        </Link>

        <div className="flex justify-center items-center gap-4 md:gap-20 mt-12 font-semibold">
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52 text-black">
            <LuTicketCheck className="text-3xl" />
            <p className="text-center">
              Get access to a vibrant community of innovators and creators.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52 text-black">
            <IoMdContacts className="text-3xl" />
            <p className="text-center">
              Collaborate with mentors and industry experts to grow your skills.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52 text-black">
            <FaCheckCircle className="text-3xl" />
            <p className="text-center">
              Participate in exclusive events, workshops, and high-impact activities.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[80vh] md:h-full flex flex-col justify-between">
        <div className="">
          <Image
            src="/images/bggrid.png"
            alt="image"
            width={500}
            height={500}
            className="object-fit w-full rotate-180"
          />
        </div>
        <div className="">
          <Image
            src="/images/bggrid.png"
            alt="image"
            width={500}
            height={500}
            className="object-fit w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
