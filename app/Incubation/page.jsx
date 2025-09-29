import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const founders = [
  {
    name: "Franklin Clinton",
    bio: "Franklin Clinton is a visual designer focused on crafting bold, functional design systems. He works with creative teams and startups to build standout brands and seamless digital experiences. Based in London, he balances clarity with character — and enjoys experimenting with motion design and interactive visuals in his spare time.",
    image: "/images/startup.png",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder at Agero", years: "2024-Now" },
      { title: "Brand Designer at Google", years: "2023-2024" },
      { title: "Web Designer at Shopify", years: "2018-2023" },
      { title: "Junior Designer at Meta", years: "2015-2018" },
    ],
  },
  {
    name: "Franklin Clinton",
    bio: "Franklin Clinton is a visual designer focused on crafting bold, functional design systems. He works with creative teams and startups to build standout brands and seamless digital experiences. Based in London, he balances clarity with character — and enjoys experimenting with motion design and interactive visuals in his spare time.",
    image: "/images/startup.png",
    socials: {
      LinkedIn: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    experience: [
      { title: "Founder at Agero", years: "2024-Now" },
      { title: "Brand Designer at Google", years: "2023-2024" },
      { title: "Web Designer at Shopify", years: "2018-2023" },
      { title: "Junior Designer at Meta", years: "2015-2018" },
    ],
  },
];

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
            <span className="text-secondary">based in</span>{" "}
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
                    <Linkedin />
                  </a>
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100/40 rounded-full"
                  >
                    <Instagram />
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
      <div className="max-w-7xl mx-auto mt-40 w-full h-[70vh] md:h-[60vh]">
        <div className="relative w-full h-full">
          <Image
            src="/images/incub.png"
            alt="Incubator"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-3xl px-7">
            <h3 className="text-white text-4xl md:text-5xl font-bold text-center">
              Need <span className="text-accent">Incubation</span> <br />
              Support?
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl text-center">
              Send your application at iicbit@bitsindri.ac.in or simply fill out
              the contact form
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
    </section>
  );
};

export default page;
