import { CheckCircle2, Contact2, TicketCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <section className="bg-foreground min-h-[80vh] md:min-h-screen flex items-center justify-center">
      <div className="absolute flex items-center justify-center flex-col z-10">
        <h4 className="font-dancingscript text-accent text-4xl mb-10">
          Registrations Ongoing.
        </h4>
        <h1 className="font-calsans text-5xl md:text-6xl leading-tight text-center">
          Join an <span className="text-secondary">Exclusive</span> <br />{" "}
          Community of <span className="text-accent">Innovators</span>
        </h1>
        <p className="text-center text-sm md:text-lg max-w-xl mt-4 text-secondary">
          Join our private community to access discussions, job opportunities,
          and insights you won't find elsewhere.
        </p>

        <Link href="/Registration-form" rel="noopener noreferrer">
          <button className="flex items-center space-x-2 px-5 py-2 bg-neutral-700 rounded-full hover:bg-neutral-600 text-primary transition-colors duration-300 mt-10 cursor-pointer">
            <span>Apply Now</span>
            <span className="text-xl animate-pulse">→</span>
          </button>
        </Link>

        <div className="flex justify-center items-center gap-4 md:gap-20 mt-12 font-semibold">
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52 text-black">
            <TicketCheck height={32} width={32} />
            <p className="text-center">
              Get access to the amazing community of innovators.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52">
            <Contact2 height={32} width={32} />
            <p className="text-center">
              Collaborate with industry experts and enhance skills.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 text-xs md:text-base w-28 md:w-52">
            <CheckCircle2 height={32} width={32} />
            <p className="text-center">
              Organise exclusive events and workshops.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[80vh] md:h-full flex flex-col justify-between">
        <div className="">
          <Image
            src="/images/bggrid.png"
            width={500}
            height={500}
            className="object-fit w-full rotate-180"
          />
        </div>
        <div className="">
          <Image
            src="/images/bggrid.png"
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
