"use client";

import Image from "next/image";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState("leadership");

  const faculties = [
    {
      id: 1,
      name: "Alex Kumongso",
      role: "Founder & CEO",
      image: "/images/team/myphoto.png",
      social: {
        email: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Lisa Ningrum",
      role: "Chief Technology Officer",
      image: "/images/team/myphoto.png",
      social: {
        email: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Ryan Wilujeng",
      role: "Head of Operations",
      image: "/images/team/myphoto.png",
      social: {
        email: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Sarah Kumala",
      role: "VP of Customer Success",
      image: "/images/team/myphoto.png",
      social: {
        email: "#",
        linkedin: "#",
      },
    },
  ];

  const students = {
    leadership: {
      name: "Leadership",
      members: [
        {
          id: 1,
          name: "Alex Kumongso",
          role: "Founder & CEO",
          image: "/images/team/myphoto.png",
          social: {
            email: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          id: 2,
          name: "Lisa Ningrum",
          role: "Chief Technology Officer",
          image: "/images/team/myphoto.png",
          social: {
            email: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          id: 3,
          name: "Ryan Wilujeng",
          role: "Head of Operations",
          image: "/images/team/myphoto.png",
          social: {
            email: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          id: 4,
          name: "Sarah Kumala",
          role: "VP of Customer Success",
          image: "/images/team/myphoto.png",
          social: {
            email: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
      ],
    },
    engineering: {
      name: "Engineering",
      members: [
        {
          id: 5,
          name: "Michael Chen",
          role: "Lead AI Engineer",
          image: "/team/michael.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 6,
          name: "Elena Rodriguez",
          role: "Senior Full Stack Developer",
          image: "/team/elena.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 7,
          name: "David Park",
          role: "DevOps Engineer",
          image: "/team/david.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 8,
          name: "Priya Sharma",
          role: "Machine Learning Specialist",
          image: "/team/priya.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 9,
          name: "James Wilson",
          role: "Backend Developer",
          image: "/team/james.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 10,
          name: "Sophie Laurent",
          role: "Frontend Developer",
          image: "/team/sophie.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
      ],
    },
    design: {
      name: "Design & Marketing",
      members: [
        {
          id: 11,
          name: "Amanda Foster",
          role: "Creative Director",
          image: "/team/amanda.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 12,
          name: "Carlos Martinez",
          role: "UX/UI Designer",
          image: "/team/carlos.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 13,
          name: "Jessica Kim",
          role: "Marketing Manager",
          image: "/team/jessica.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
        {
          id: 14,
          name: "Oliver Thompson",
          role: "Brand Strategist",
          image: "/team/oliver.jpg",
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#",
          },
        },
      ],
    },
  };

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

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
            <div className="flex-1">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                [ OUR TEAM ]
              </p>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Meet the Team
              </h2>
            </div>
            <div className="flex-1 max-w-md">
              <p className="text-lg leading-relaxed">
                Our AI-driven automation eliminates busywork, streamlines your
                operations, and helps your business grow, without extra effort.
              </p>
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-36">
            {faculties.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent rounded-full opacity-30" />
                  </div>

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 hover:scale-125"
                  />

                  {/* Name and Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>

                  {/* Social Links - Visible on Hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                      href={member.social.email}
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Mail size={14} className="text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={14} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Filter Tabs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-12">
            {Object.entries(students).map(([key, team]) => (
              <button
                key={key}
                onClick={() => setActiveTeam(key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTeam === key
                    ? "bg-white text-black shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 hover:text-white"
                }`}
              >
                {team.name}
              </button>
            ))}
          </div>

          {/* Team Grid with Animation */}
          <div className="relative">
            <div
              key={activeTeam}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn"
            >
              {students[activeTeam].members.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

                    {/* Placeholder for image - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent rounded-full opacity-30" />
                    </div>

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Name and Role Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                    </div>

                    {/* Social Links - Visible on Hover */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a
                        href={member.social.email}
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Mail size={14} className="text-white" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={14} className="text-white" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram size={14} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for fade-in animation */}
        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .group:nth-child(1) {
            animation-delay: 0ms;
          }
          .group:nth-child(2) {
            animation-delay: 100ms;
          }
          .group:nth-child(3) {
            animation-delay: 200ms;
          }
          .group:nth-child(4) {
            animation-delay: 300ms;
          }
          .group:nth-child(5) {
            animation-delay: 400ms;
          }
          .group:nth-child(6) {
            animation-delay: 500ms;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TeamSection;

export const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    image: "/images/team/myphoto.png",
    social: {
      linkedin: "https://www.linkedin.com/in/johnsmith",
      instagram: "https://www.instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Lead Developer",
    image: "/images/team/myphoto.png",
    social: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      instagram: "https://www.instagram.com/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Product Manager",
    image: "/images/team/myphoto.png",
    social: {
      linkedin: "https://www.linkedin.com/in/peterjones",
      instagram: "https://www.instagram.com/peterjones",
      twitter: "https://twitter.com/peterjones",
    },
  },
  {
    id: 4,
    name: "Emily White",
    role: "UI/UX Designer",
    image: "/images/team/myphoto.png",
    social: {
      linkedin: "https://www.linkedin.com/in/emilywhite",
      instagram: "https://www.instagram.com/emilywhite",
      twitter: "https://twitter.com/emilywhite",
    },
  },
];
