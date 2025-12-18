"use client";

import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const founders = [
  {
    name: "Khwaab  Publication - “ Let You Writings Flyyy! ”",
    bio: "Established strategic alliances with international and domestic partners to foster innovation in the printing and publishing industry.",
    image: "/incubation/khwab.webp",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder & CEO", years: "Mr. Kunal Sonkar" },
      { title: "Incorporated", years: "June, 2020" },
      { title: "Branch", years: "MINING ENGINEERING DEPARTMENT, 2K23" },
    ],
  },
  {
    name: "VoWHELM - “ Ensure Your Survival in case of Accident ”",
    bio: "VoWHELM is an advanced IoT-enabled smart safety helmet designed to revolutionize two-wheeler accident response. By leveraging real-time crash detection, and GPS-based hospital connectivity, significantly improving survival rates.",
    image: "/incubation/VW.webp",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder & CEO", years: "Mr. Syed Adnan Ahmad" },
      { title: "Incorporated ", years: "April, 2025" },
      { title: "Branch", years: "PRODUCTION & INDUSTRIAL ENGG. , 2K22" },
    ],
  },
  {
    name: "QR CELEBRTIONS - “Scan, Plan and Celebrate”",
    bio: "QR Weds is a one-stop wedding solution that makes wedding planning easy and smart. From cards, vehicles, and catering to photography and decoration, we handle it all. With our unique QR smart cards, guests can access all wedding details, live location, and gift options with just one scan — blending tradition with technology.",
    image: "/incubation/QR.webp",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder & CEO", years: "Mr. Aryan Ray" },
      { title: "Incorporated ", years: "5th may 2025" },
      { title: "Branch", years: "MECHANICAL ENGG. DEPARTMENT, 2K23" },
    ],
  },
  {
    name: "YuMedic(Milo Doctor)",
    bio: "Yumedics is a fast-growing skincare brand that uses innovative and science-backed ingredients to improve, protect, and enhance the natural  glow of the skin.The brand offers a wide range of products, including face creams, acne treatment brightening serums, sunscreens, and advanced hair care solutions.",
    image: "/incubation/HD.webp",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder & CEO", years: "Mr. Karan Raj Mehta" },
      { title: "Batch", years: "2K16" },
    ],
  },
  // {
  //   name: "Sampurn Krishi Utthaan Foundation",
  //   bio: "•	Sampurn Krishi Utthaan Foundation, registered as Section 8 company in Ranchi, Jharkhand.Connected with farmers of Jharkhand, Bihar, Odissa.	Promoting Natural / Organic farming.	Right now having MOU with Unmukt Urja Pvt LTD as a social partner to professionalize thousands of Paddy growers towards LEISA (low external input sustainable agriculture). The agri-wastes from Paddy farms will be converted to Bio-Crude. That can be used in making of Bio-fuel.",
  //   image: "/images/startup.png",
  //   socials: {
  //     LinkedIn: "https://linkedin.com/",
  //     instagram: "https://instagram.com/",
  //   },
  //   experience: [
  //     { title: "Founder & CEO", years: "Mr. Ravi Singh Choudhary" },
  //     { title: "Batch", years: "2K16" },
  //   ],
  // },
  // {
  //   name: "First Ad",
  //   bio: "•	We are heading with the vision of making the world’s largest digitalized advertising ecosystem.	We facilitate creative methods to reach target audience. We connect the most compatible social media influencer using our predictive methods.",
  //   image: "/images/startup.png",
  //   socials: {
  //     LinkedIn: "https://linkedin.com/",
  //     instagram: "https://instagram.com/",
  //   },
  //   experience: [
  //    { title: "Founder & CEO", years: "Mr. Milan Kashyap & Mr. Shanu Anand" },
  //     { title: "Batch", years: "2K18" },
  //   ],
  // },
  // {
  //   name: " Successpapa (Udany Pvt Ltd)",
  //   bio: "•	Enhance education quality in India, especially in remote areas. Provide affordable educational facilities to everyone.	Foster literacy, skills, and competitive abilities in students.	Encourage regular newspaper reading and improve general awareness and aptitude.",
  //   image: "/images/startup.png",
  //   socials: {
  //     LinkedIn: "https://linkedin.com/",
  //     instagram: "https://instagram.com/",
  //   },
  //   experience: [
  //     { title: "Founder & CEO", years: "Mr. Divyanshu Sinha" },
  //     { title: "Batch", years: "2K16" },
  //   ],
  // },
  // {
  //   name: "Urja Viable solutions",
  //   bio: "The company's mission is to generate energy from waste to create a sustainable future. Their work includes: Renewable energy,	Suggesting the best renewable energy source for a customer's needs and availability,	Installation,	Finding the best company to install the renewable energy source, considering budget, climate, region, and other factors,	Project management,	Making sure all the prerequisites are in place for a project, from installation to commissioning",
  //   image: "/images/startup.png",
  //   socials: {
  //     LinkedIn: "https://linkedin.com/",
  //     instagram: "https://instagram.com/",
  //   },
  //   experience: [
  //     { title: "Founder & CEO", years: "Mr. Kumar Aryan & Mr. Adarsh Tirkey" },
  //   ],
  // },
  
];

const page = () => {
  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Empowering{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Startups</span>
            <br />
            <span className="text-secondary">Building</span>{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Entrepreneurs for Tomorrow 
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            Our incubation program supports student led startups at every stage helping them refine ideas, build prototypes, and move toward real market validation. Several startups from BIT Sindri have already secured seats in our incubation centre, gaining access to mentorship, resources, and a growth focused environment. We aim to strengthen both emerging and established startups as they shape impactful entrepreneurial journeys.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto space-y-32">
          <div className="mb-20">
            <p className="text-sm text-gray-500 tracking-wider">(Startups)</p>
            <h2 className="mt-2 text-5xl md:text-6xl font-calsans font-extrabold text-gray-900">
              Our Incubatees
            </h2>
          </div>
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-20 w-full"
            >
              {/* Image and Socials Section */}
              <div className="relative w-full lg:w-1/3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  height={400}
                  width={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {/* Social media icons */}
                  <a
                    href={founder.socials.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100/40 rounded-full"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100/40 rounded-full"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  {founder.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {founder.bio}
                </p>

                <hr className="border-t border-gray-400/70 my-8" />

                {/* Experience Section */}
                <div className="space-y-4">
                  {founder.experience.map((job, jobIndex) => (
                    <div
                      key={jobIndex}
                      className="flex justify-between items-center text-gray-700"
                    >
                      <p className="font-medium">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.years}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mx-2 md:mx-4 mt-40 h-[70vh] md:h-[60vh]">
        <div className="relative w-full h-full">
          <Image
            src="/incubation/incubationCTA.webp"
            alt="Incubator"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-3xl px-7">
            <h3 className="text-white text-4xl md:text-5xl font-bold text-center">
              Looking to Get Your <span className="text-accent">Startup</span> <br />
              Incubated?
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl text-center">
              Reach out to us at iicbits@bitsindri.ac.in or simply fill out the contact form to begin your incubation journey.
            </p>
            <Link
              href="/Contact"
              className={`mt-10 px-4 py-2 border border-neutral-400 rounded-full text-sm transition-colors duration-300 text-white hover:border-accent`}
            >
              Contact<span className="ml-2 animate-pulse">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
