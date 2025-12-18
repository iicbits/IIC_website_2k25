"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState("final");
  const [copiedId, setCopiedId] = useState(null);

  // Logic to copy email and toggle icon for 3 seconds
  const handleCopyEmail = (email, id) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(email);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 3000);
    }
  };

  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Introducing the{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Team</span>,
            <br />
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Behind <span className="text-secondary">Our Vision</span>
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            Our team brings together dedicated faculty mentors and dynamic
            student leaders who work collectively to strengthen the culture of
            innovation and entrepreneurship at BIT Sindri.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
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
          </div>

          {/* Faculty Coordinators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {faculties.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
              >
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

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={() =>
                        handleCopyEmail(member.social.email, member.id)
                      }
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Copy email"
                    >
                      {copiedId === member.id ? (
                        <MdCheck
                          size={16}
                          className="text-green-400 animate-in zoom-in duration-300"
                        />
                      ) : (
                        <IoMdMail size={14} className="text-white" />
                      )}
                    </button>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin size={14} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gray-400 mb-12"></div>

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

          {/* Team Grid */}
          <div className="relative">
            <div
              key={activeTeam}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn"
            >
              {students[activeTeam].members.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent rounded-full opacity-30" />
                    </div>

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <button
                        onClick={() =>
                          handleCopyEmail(member.social.email, member.id)
                        }
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Copy email"
                      >
                        {copiedId === member.id ? (
                          <MdCheck
                            size={16}
                            className="text-green-400 animate-in zoom-in duration-300"
                          />
                        ) : (
                          <IoMdMail size={14} className="text-white" />
                        )}
                      </button>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin size={14} className="text-white" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <AiFillInstagram size={14} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS */}
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

      {/* Call to Action Button */}
      <div className="mx-2 md:mx-4 mt-20 h-[70vh] md:h-[60vh]">
        <div className="relative w-full h-full">
          <Image
            src="/team/teamCTA.jpg"
            alt="Incubator"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-3xl px-7">
            <h3 className="text-white text-4xl md:text-5xl font-bold text-center">
              Interested in becoming a
              <br />
              <span className="text-accent">Part</span> Team?
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl text-center">
              Send your application to iicbits@bitsindri.ac.in or simply fill
              out the registration form to get started.
            </p>
            <Link
              href="/Registration-form"
              className="mt-10 px-4 py-2 border border-neutral-400 rounded-full text-sm transition-colors duration-300 text-white hover:border-accent"
            >
              Apply Now<span className="ml-2 animate-pulse">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

const faculties = [
  {
    id: 1,
    name: "Prof. Pankaj Rai",
    role: "Chairman IIC",
    image: "/team/pankajrai.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Prof. Prakash Kumar",
    role: "President IIC",
    image: "/team/prakash.jpg",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Dr. S C Dutta",
    role: "Vice President IIC",
    image: "/team/sc.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Dr. Rahul Kumar",
    role: "Convener",
    image: "/team/rahul.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Dr. Mukesh Chandra",
    role: "Innovation Activity Coordinator",
    image: "/team/mukesh.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Mr. Khustar Ansari",
    role: "Hackathon Coordinator",
    image: "/team/khustar.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Mr. Vijay Besra",
    role: "ARIIA Coordinator",
    image: "/team/vijay.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 8,
    name: "Dr. Kashif Hasan Kazmi",
    role: "Internal Event Coordinator",
    image: "/team/kashif.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 9,
    name: "Sarah Kumala",
    role: "VP of Customer Success",
    image: "/team/fac.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 10,
    name: "Mr. Sanjay Oraon",
    role: "IPR Activity Coordinator",
    image: "/team/sanjay.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 11,
    name: "Dr. Priyanka Kumari",
    role: "NIRF Coordinator",
    image: "/team/mam.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 12,
    name: "Dr. Abhijeet Anand",
    role: "Internship Coordinator",
    image: "/team/abhijit.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
  {
    id: 13,
    name: "Mr. Roshan Shankar",
    role: "Research & Development Coordinator",
    image: "/team/roshan.webp",
    social: {
      email: "#",
      linkedin: "#",
    },
  },
];

const students = {
  final: {
    name: "Executive Members",
    members: [
      {
        id: 1,
        name: "Syed Adnan Ahmad",
        role: "Chief Coordinator",
        image: "/team/syedd.png",
        social: {
          email: "chief.iic@bitsindri.ac.in",
          linkedin: "https://linkedin.com/in/syedadnan03",
          instagram: "https://www.instagram.com/s.addy_3/",
        },
      },
      {
        id: 2,
        name: "Vivek Tiwari",
        role: "Vice Chief Coordinator",
        image: "/team/vivek_sir.png",
        social: {
          email: "vicechief.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/vivek-tiwari-b929a822b",
          instagram: "https://www.instagram.com/_vivek_tiwarii/",
        },
      },
      {
        id: 3,
        name: "Manohar Jha",
        role: "Secretary",
        image: "/team/manoharr.png",
        social: {
          email: "manoharjha809@gmail.com",
          linkedin: "https://www.linkedin.com/in/manohar-jha-1b1765257",
          instagram:
            "https://www.instagram.com/_manohar.jha_5?igsh=b2ZkYjExcjV2cmFq",
        },
      },

      {
        id: 4,
        name: "Harsh Bhargav",
        role: "Technical Head",
        image: "/team/Harsh.png",
        social: {
          email: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        id: 5,
        name: "Amit Kumar Mishra",
        role: "Design Head",
        image: "/team/amit.png",
        social: {
          email: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        id: 6,
        name: "Kashish Jain",
        role: "Innovation Head",
        image: "/team/kashish_mam.png",
        social: {
          email: "skashish2426@gmail.com",
          linkedin: "https://www.linkedin.com/in/kashish-jain-a92b05256",
          instagram: "https://www.instagram.com/kashish_7029",
        },
      },
      {
        id: 7,
        name: "Tisha Aggarwal",
        role: "Community Engagement",
        image: "/team/tisha.png",
        social: {
          email: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  third: {
    name: "Associate Members",
    members: [
      {
        id: 8,
        name: "Adarsh Kumar",
        role: "Technicals",
        image: "/team/adarsh.png",
        social: {
          email: "adarsh.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/adarsh-kumar-03a459200",
          instagram:
            "https://www.instagram.com/_aadi005?utm_source=qr&igsh=dmIzNDZqY3c2M2h6",
        },
      },
      {
        id: 9,
        name: "Utsav Jha",
        role: "Operations",
        image: "/team/utsav.png",
        social: {
          email: "ukjha2004@gmail.com",
          linkedin: "https://www.linkedin.com/in/utsav-jha-021009211",
          instagram:
            "https://www.instagram.com/utsavjha744?igsh=MWl0eWJhMXVudXhobg==",
        },
      },
      {
        id: 10,
        name: "Rahul Kumar",
        role: "Community Engagement",
        image: "/team/rahul.png",
        social: {
          email: "rahul.iic@bitsindri.ac.in",
          linkedin:
            "https://www.linkedin.com/in/rahul-kumar-98b607290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/im_rahul3651?igsh=MTVpd3BhZm5mYnl5MA==",
        },
      },
      {
        id: 11,
        name: "Dhruv Gupta",
        role: "Design",
        image: "/team/dhruv.png",
        social: {
          email: "dhruv.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/dhruv-gupta-a70346292",
          instagram:
            "https://www.instagram.com/_0xdhruv?igsh=MXA4bWszMWIxYTdmbQ==",
        },
      },
      {
        id: 12,
        name: "Kunal Kumar Sonkar",
        role: "Startup & Incubation",
        image: "/team/kunal.png",
        social: {
          email: "Kunal.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/kunal-sonkar-bits",
          instagram:
            "https://www.instagram.com/oye_kunaaal?igsh=MzV2eDR2emUzamt4",
        },
      },
      {
        id: 13,
        name: "Shivangi Kumari",
        role: "Innovation Program",
        image: "/team/shivangi.png",
        social: {
          email: "shivangi.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/shivangi-kumari-67b927287/",
          instagram:
            "https://www.instagram.com/shiv_shiviiii_45?igsh=MXcxd2UxdWxvdmo4aA%3D%3D&utm_source=qr",
        },
      },
      {
        id: 14,
        name: "Shreya Pandey",
        role: "Marketing",
        image: "/team/shreya.png",
        social: {
          email: "pandeyshre19@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shreya-p-55b909219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/shrey_apandey19?igsh=MW1xOTRkbzlpdGRmbQ==",
        },
      },
      {
        id: 15,
        name: "Ayush Bhagat",
        role: "Finance",
        image: "/team/ayush.png",
        social: {
          email: "ayush.iic@bitsindri.ac.in",
          linkedin: "www.linkedin.com/in/ ayush-k-bhagat",
          instagram:
            "https://www.instagram.com/ayush_26373?igsh=NTNmZmZzbTI0anE2",
        },
      },
      {
        id: 16,
        name: "Aastha Agarwal",
        role: "Research & Development",
        image: "/team/aastha.png",
        social: {
          email: "aastha.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/aastha-agarwal-043883294",
          instagram: "https://www.instagram.com/aastha28._",
        },
      },
      {
        id: 17,
        name: "Aman Kumar Arya",
        role: "Editorial",
        image: "/team/aman_arya.png",
        social: {
          email: "aman.iic@bitsindri.ac.in",
          linkedin: "www.linkedin.com/in/aman-arya-b8458b2b4",
          instagram: "https://www.instagram.com/amanarya7968/",
        },
      },
      {
        id: 18,
        name: "Shashi Kumar",
        role: "Media",
        image: "/team/shashii.png",
        social: {
          email: "shashi.iic@bitsindri.ac.in",
          linkedin:
            "https://www.linkedin.com/in/shashi-kumar-60b0b3325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/shashisuprabhat106?igsh=dTVhZnU4M2Riajli",
        },
      },
    ],
  },
  second: {
    name: "Coordinators",
    members: [
      {
        id: 19,
        name: "Samir Kumar",
        role: "Finance",
        image: "/team/samir.png",
        social: {
          email: "emailonebrown@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/samir-kumar-650520305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/i_samir17?igsh=MTB5Z3R2cjl1MmwxMQ==",
        },
      },
      {
        id: 20,
        name: "Ravikant",
        role: "Design",
        image: "/team/ravikant.png",
        social: {
          email: "ravi.eceug24@bitsindri.ac.in",
          linkedin:
            "https://www.linkedin.com/in/ravi-kant-b1612b356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/ravi15_12?igsh=cnFrcDRyaDVhNnNp",
        },
      },
      {
        id: 21,
        name: "Praveen Kumar Chaurasiya",
        role: "Editorial",
        image: "/team/pravin.png",
        social: {
          email: "praveen.iic@bitsindri.ac.in",
          linkedin:
            "https://www.linkedin.com/in/praveen-kumar-chaurasiya-a4abb7333/",
          instagram: "https://www.instagram.com/5022.praveen/?hl=en",
        },
      },
      {
        id: 22,
        name: "Bibek Kumar",
        role: "Technicals",
        image: "/team/bibek.png",
        social: {
          email: "bibekkumbhakr000@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/bibek-kumbhakar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/bibekkumbhakr000?igsh=MTN2NGhrdHJyZWp2YQ==",
        },
      },
      {
        id: 23,
        name: "Abhas Kumar",
        role: "Startup & Incubation",
        image: "/team/abhas.png",
        social: {
          email: "abhaskumarbardhan@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/abhas-kumar-bardhan-74b13132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram: "https://www.instagram.com/abhas25_?igsh=ZnRxc3lpbThzYWho",
        },
      },
      {
        id: 24,
        name: "Prajjwal Jha",
        role: "Media",
        image: "/team/prajjwal.png",
        social: {
          email: "Prajjwalx9@gmail.com",
          linkedin: "https://www.linkedin.com/in/prajjwal-jha-98476133b",
          instagram: "https://www.instagram.com/prajjwalx9",
        },
      },
      {
        id: 25,
        name: "Rakesh Kumar Pandey",
        role: "Marketing",
        image: "/team/rakesh.png",
        social: {
          email: "rakeshpandey5510@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/rakesh-pandey-493b7435b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          instagram:
            "https://www.instagram.com/iiamrakeshh?igsh=bTRwb2h3aWdsbzIy&utm_source=qr",
        },
      },
      {
        id: 26,
        name: "Shashank Gupta",
        role: "Operations",
        image: "/team/shashank.png",
        social: {
          email: "shashank.sg.6002@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shashank-gupta-230489338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/i_have_no_idea000_?igsh=aHNrZGs3ZzB2bmZv&utm_source=ig_contact_invite",
        },
      },
      {
        id: 27,
        name: "Rimsha",
        role: "Finance",
        image: "/team/rimsha.png",
        social: {
          email: "rimsha.iic@bitsindri.ac.in",
          linkedin:
            "https://www.linkedin.com/in/rimsha-taslim-5a8724336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/rimshaaax._?igsh=YWtjMGppMXF2dTlt",
        },
      },
      {
        id: 28,
        name: "Tanishq Raj",
        role: "Editorial",
        image: "/team/tanishq.png",
        social: {
          email: "tanishq.iic@bitsindri.ac.in",
          linkedin: "https://www.linkedin.com/in/tanishq-raj58",
          instagram: "https://www.instagram.com/tanishkraj58",
        },
      },
      {
        id: 29,
        name: "Anish Kumar",
        role: "Operations",
        image: "/team/anish.png",
        social: {
          email: "anish2406012@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/anish-kumar-29a9a2336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/anish_official_71?igsh=Nng0OHd2MmM2eDNt",
        },
      },
      {
        id: 30,
        name: "Prakhar Pratyush Jha",
        role: "Innovation Program",
        image: "/team/prakhar.png",
        social: {
          email: "prakharjhapratyush@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/prakhar-pratyush-jha911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/prakharjha911?igsh=cGtrZmk5bDI3bHJq",
        },
      },
      {
        id: 31,
        name: "Aradhana Sharma",
        role: "Technicals",
        image: "/team/aradhna.png",
        social: {
          email: "sharmaarchi70046@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/aradhana-sharma-b486a7358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/aarchi34645?igsh=MWp3dDRmeHRiNDgzNA==",
        },
      },
      {
        id: 32,
        name: "Varsha Rani",
        role: "Community Engagement",
        image: "/team/varsha.png",
        social: {
          email: "varshu1929@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/varsha-rani-a33078294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/varsharani_2005?igsh=ZDc2ZTkxOTV3aGVu",
        },
      },
      {
        id: 33,
        name: "Vatsal Krishna",
        role: "Design",
        image: "/team/vatsal.png",
        social: {
          email: "Vatsal.kr85fri@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/vatsal-krishna-890093359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/vatsalkrishn_?igsh=MTB3c3d1OWFocm44Yg==",
        },
      },
      {
        id: 34,
        name: "Diptanshu Jaiswal",
        role: "Marketing",
        image: "/team/diptanshu.png",
        social: {
          email: "diptanshujaiswal2000@gmail.com",
          linkedin: "http://linkedin.com/in/diptanshu-jaiswal-b765b421b",
          instagram:
            "https://www.instagram.com/diptanshu.jaiswal?igsh=bW52MnVzY2Zja2V0",
        },
      },
      {
        id: 35,
        name: "Pratiush Chourasia",
        role: "Research & Development",
        image: "/team/pratuish.png",
        social: {
          email: "chourasiapratiush@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/pratiush-chourasia-95a510229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/pratiush2023?igsh=am91M3cyN2V2YXE5",
        },
      },
      {
        id: 36,
        name: "Dipak Kumar Ram",
        role: "Media",
        image: "/team/dipak.png",
        social: {
          email: "deepakkrram70@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/deepak-chandrawanshi-a22631337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/invites/contact/?igsh=1t1althpx6hx1&utm_content=m3hraui",
        },
      },
      {
        id: 37,
        name: "Shital Sandhya",
        role: "Marketing",
        image: "/team/shital.png",
        social: {
          email: "sandhyashital4801@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shital-sandhya-b83085320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram: "https://www.instagram.com/SHITAL_45341",
        },
      },
      {
        id: 38,
        name: "Megha",
        role: "Startup & Incubation",
        image: "/team/megha.png",
        social: {
          email: "megh.workk@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/megha-s-708717338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/_megh.a_._?igsh=MW92MGEyc2Vqajd6bA==",
        },
      },
      {
        id: 39,
        name: "Kajal",
        role: "Innovation Program",
        image: "/team/kajal.png",
        social: {
          email: "k6404019@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/kajal-kumari-687a78322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/kajalkumari__2803?igsh=d2d2MWU5OXNmNzV3",
        },
      },
      {
        id: 40,
        name: "Krish",
        role: "Community Engagement",
        image: "/team/krish.png",
        social: {
          email: "krrish01sahu@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/krrish-raj-333926335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/krrish6887?igsh=MWgwc2k0NWVmd2Vt",
        },
      },
      {
        id: 41,
        name: "Ankit Kumar",
        role: "Innovation Program",
        image: "/team/ankit.png",
        social: {
          email: "ankit.in22@gmail.com",
          linkedin: "https://www.linkedin.com/in/akprofilelink",
          instagram: "https://www.instagram.com/_ankit.kr___",
        },
      },
      {
        id: 42,
        name: "Vineet Verma",
        role: "Startup & Incubation",
        image: "/team/vineet.png",
        social: {
          email: "vineetverma163@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/vineet-verma-b81a0a361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/__vineet.verma?igsh=MWo1eHFyZzE4cXlrdg==",
        },
      },
      {
        id: 43,
        name: "Shivam Kumar Singh",
        role: "Research & Development",
        image: "/team/shivam.png",
        social: {
          email: "shivamsingh20052005@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shivam-singh-343222366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/shivam.singh.03?igsh=NHk2YXJrZ2R4MGFp",
        },
      },
      {
        id: 44,
        name: "Parth Kumar",
        role: "Marketing",
        image: "/team/parth.png",
        social: {
          email: "pa825408@gmail.com",
          linkedin: "https://www.linkedin.com/in/parth-kumar-b023a836a",
          instagram: "https://www.instagram.com/itsparth_557",
        },
      },
      {
        id: 45,
        name: "Abhijeet Kumar Chauhan",
        role: "Design",
        image: "/team/abhijeet.png",
        social: {
          email: "abhijeetkumarchouhan5@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/abhijeet-chouhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/realabhijeett?igsh=MTVuNWp6eHVmNDVnNg==",
        },
      },
      {
        id: 46,
        name: "Sudhir Verma",
        role: "Community Engagement",
        image: "/team/sudhir.png",
        social: {
          email: "sudhirkrverma8@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/sudhir-kumar-verma-681793354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/sudhir4_?igsh=MTN4aThrMmgyZHJyOQ==",
        },
      },
      {
        id: 47,
        name: "Piyush Dwivedi",
        role: "Technicals",
        image: "/team/piyush.png",
        social: {
          email: "piyushdwivedi8709@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/piyush-dwivedi-679319272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram:
            "https://www.instagram.com/piyush.dwivedi_27?igsh=MTc5dDI3OHZmMTVz",
        },
      },
      {
        id: 48,
        name: "Maitri",
        role: "Operations",
        image: "/team/maitri.png",
        social: {
          email: "singhmaitri233@gmail.com",
          linkedin: "https://www.linkedin.com/in/maitri-89a17732a",
          instagram:
            "https://www.instagram.com/maitri__232?igsh=YnplY3lydG0zdzRr",
        },
      },
    ],
  },
};
