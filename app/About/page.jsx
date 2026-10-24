"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuLocateFixed } from "react-icons/lu";
import { FaMapPin, FaTrophy, FaHandshake } from "react-icons/fa";
import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const stats = [
  { number: "10,000+", label: "Students & Innovators Impacted" },
  { number: "250+", label: "Startups & Ideas Nurtured" },
  { number: "₹50L+", label: "Grants & Prize Pool Distributed" },
  { number: "100+", label: "Hackathons, Summits & Workshops" },
];

const pillars = [
  {
    icon: <HiOutlineLightBulb className="w-6 h-6 text-accent" />,
    title: "Ideation & Hackathons",
    description:
      "Fostering creative problem-solving through 36-hour hackathons (INNOVATHON), case challenges, and idea pitching competitions across engineering disciplines.",
  },
  {
    icon: <HiOutlineRocketLaunch className="w-6 h-6 text-accent" />,
    title: "Incubation & Acceleration",
    description:
      "Offering dedicated incubation space, seed funding, prototyping labs, and legal/IPR advisory to transform student innovations into scalable market enterprises.",
  },
  {
    icon: <HiOutlineAcademicCap className="w-6 h-6 text-accent" />,
    title: "Research & Fellowships",
    description:
      "Empowering undergraduate innovators through funded, research-driven programs like the UDAAN UG Fellowship with structured mentorship from top faculty and scientists.",
  },
  {
    icon: <HiOutlineBuildingOffice2 className="w-6 h-6 text-accent" />,
    title: "Industry & Venture Alliances",
    description:
      "Partnering with leading tech hubs like TEXMiN (IIT ISM Dhanbad), SAIL, and venture capital firms to provide market validation, mentorship, and commercial scale.",
  },
];

const partners = [
  {
    name: "Ministry of Education Innovation Cell (MIC)",
    src: "/images/logos/MoE_logo.png",
    width: 150,
  },
  {
    name: "AICTE",
    src: "/images/logos/aicte-logo.png",
    width: 80,
  },
  {
    name: "Jharkhand University of Technology",
    src: "/images/logos/jut.png",
    width: 80,
  },
  {
    name: "Birsa Institute of Technology Sindri",
    src: "/images/logos/BIT logo.png",
    width: 90,
  },
  {
    name: "Ministry of Education",
    src: "/images/logos/moe_full_logo.png",
    width: 140,
  },
];

const spotlightItems = [
  {
    id: 1,
    image: "/events/esum03.jpg",
    title: "E-SUMMIT '26",
    category: "Flagship Summit",
    subtitle:
      "Flagship national entrepreneurship summit uniting 10,000+ students and 250+ startups with a ₹25L+ prize pool.",
  },
  {
    id: 2,
    image: "/events/inno05.jpg",
    title: "INNOVATHON 3.0",
    category: "36-Hour Hackathon",
    subtitle:
      "36-hour national innovation marathon building functional prototypes in AI/ML & smart automation.",
  },
  {
    id: 3,
    image: "/events/tex08.jpg",
    title: "TEXcelerate 2026",
    category: "Industry Challenge",
    subtitle:
      "Idea pitching and innovation challenge in collaboration with TEXMiN Hub, IIT ISM Dhanbad.",
  },
  {
    id: 4,
    image: "/events/udan03.webp",
    title: "UDAAN UG Fellowship",
    category: "Research & Prototyping",
    subtitle:
      "Funded research and prototyping fellowship program for undergraduate innovators.",
  },
  {
    id: 5,
    image: "/events/ipc2.webp",
    title: "Idea Pitching Competition",
    category: "IIC Programs",
    subtitle:
      "In collaboration with Jharkhand University of Technology (JUT), Ranchi.",
  },
  {
    id: 6,
    image: "/home/SIH_2025_Winner.jpeg",
    title: "Team Robust Solutions — SIH Winners",
    category: "National Champions",
    subtitle:
      "BIT Sindri team winning the prestigious Smart India Hackathon, tackling real-world national problems.",
  },
  {
    id: 7,
    image: "/events/spot8.webp",
    title: "Governor's Recognition for Excellence",
    category: "State Honors",
    subtitle:
      "President Prof. Prakash Kumar recognized by the Hon'ble Governor of Jharkhand for innovation leadership.",
  },
  {
    id: 8,
    image: "/events/spot9.webp",
    title: "SAIL Chairman Visit to Incubation Centre",
    category: "Industry Outreach",
    subtitle:
      "Deepening industry-academia ties with Steel Authority of India Limited to foster industrial automation.",
  },
  {
    id: 9,
    image: "/events/spot2.webp",
    title: "TEAM ARPIT at National CANSAT",
    category: "Aerospace & Robotics",
    subtitle:
      "Representing BIT Sindri at the national CANSAT Student India Competition with high-altitude can-satellites.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Header */}
      <section className="min-h-[55vh] md:min-h-[60vh] bg-foreground flex items-center justify-center border-b border-gray-200/60">
        <main className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <h1 className="font-calsans text-4xl sm:text-5xl lg:text-7xl leading-tight md:leading-snug mb-6 text-black">
            Igniting <span className="text-accent">Innovation</span>,
            <br />
            Inspiring <span className="text-secondary">Ideas</span>,
            <br />
            Impacting the Future
          </h1>

          <p className="text-sm md:text-base max-w-2xl text-secondary mb-10 leading-relaxed">
            We empower students, faculty, and early-stage founders to transform
            visionary ideas into impactful solutions through mentorship, maker
            infrastructure, and real-world venture opportunities.
          </p>

          <a
            href="#who-are-we"
            className="flex items-center space-x-2 text-secondary hover:text-black transition-colors group cursor-pointer text-sm font-medium"
          >
            <span>Learn About Us</span>
            <span className="text-base animate-bounce">↓</span>
          </a>
        </main>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-calsans text-accent">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-are-we" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center flex-col-reverse md:flex-row justify-between gap-12 lg:gap-16">
          <div className="flex flex-col md:w-1/2">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              (Who We Are)
            </p>
            <h2 className="font-calsans text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fostering the Next Generation of Startup Founders
            </h2>

            <div className="space-y-4 text-sm md:text-base text-secondary leading-relaxed">
              <p>
                We are the official <strong>Institution’s Innovation Council (IIC 8.0)</strong> and
                Incubation Centre of <strong>BIT Sindri</strong>, established under the guidelines
                of the <strong>Ministry of Education’s Innovation Cell (MIC)</strong>, Government of
                India, and AICTE.
              </p>
              <p>
                Our council works as a catalyst to create an environment where bold ideas are explored,
                refined, and developed into meaningful, scalable solutions. Through startup incubation,
                hackathons like <strong>INNOVATHON</strong>, entrepreneurship summits like <strong>E-SUMMIT '26</strong>,
                and national challenges with <strong>TEXMiN Hub (IIT ISM Dhanbad)</strong>, we bridge the
                gap between academic research and commercial ventures.
              </p>
              <p>
                We provide the mentorship, prototyping support, seed capital access, and intellectual
                property (IPR) assistance necessary to empower young innovators to build startups that
                drive technological and economic growth.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/Initiatives"
                className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-semibold shadow"
              >
                Explore Initiatives →
              </Link>
              <Link
                href="/Team"
                className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors text-xs font-semibold"
              >
                Meet the Team →
              </Link>
            </div>
          </div>

          {/* Modern Visual Composition for Incubation Centre */}
          <div className="md:w-1/2 w-full relative">
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Layered Showcase */}
            <div className="relative mx-auto max-w-lg md:max-w-none pt-4 pb-6 px-2 sm:px-4">
              {/* Primary Main Photo: BIT Sindri Incubation Facility */}
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-900 group">
                <Image
                  src="/home/banner_IC.webp"
                  alt="BIT Sindri Incubation Centre"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent block mb-0.5">
                      Incubation Facility
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-calsans leading-tight">
                      BIT Sindri Innovation Centre
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md border border-white/20 text-white shrink-0">
                    Active Hub
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card: Innovators at Work */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 hidden sm:block group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/events/inno07.jpg"
                  alt="Students Collaborating"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-bold">
                  Innovators at Work
                </div>
              </div>

              {/* Overlapping Glassmorphism Floating Pill Badge (Top Right) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <FaTrophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 leading-tight">
                    IIC 8.0 • MIC AICTE
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">
                    Govt. of India Recognized
                  </div>
                </div>
              </div>

              {/* Bottom Right Floating Active Metric Pill */}
              <div className="absolute -bottom-3 right-3 sm:right-6 bg-black/90 backdrop-blur-md text-white border border-white/20 shadow-xl rounded-full px-3.5 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold">
                  250+ Startups & Ideas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50/70 border-y border-gray-200/60 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              (Guiding Principles)
            </p>
            <h2 className="text-3xl sm:text-4xl font-calsans font-bold text-gray-900">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-xl mb-6 shadow-md group-hover:scale-110 transition-transform">
                <LuLocateFixed />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                Long-Term Aspiration
              </span>
              <h3 className="text-2xl font-bold font-calsans text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">
                To build a world-class entrepreneurial culture at BIT Sindri that sparks innovative thinking,
                strengthens startup drive, and empowers students to build technological solutions that make a real
                difference. We aim to shape future founders and leaders who contribute meaningfully to technological
                advancement, industry growth, and societal progress.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-xl mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FaMapPin />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                Core Purpose & Action
              </span>
              <h3 className="text-2xl font-bold font-calsans text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">
                To cultivate an inclusive and vibrant startup incubator that encourages innovation, supports
                idea development, and empowers students to translate concepts into impactful enterprises. We provide
                access to structured mentorship, seed grants, maker spaces, and experiential learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Pillars */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              (How We Operate)
            </p>
            <h2 className="text-3xl sm:text-4xl font-calsans font-bold text-gray-900 mb-4">
              Core Pillars of Innovation
            </h2>
            <p className="text-secondary text-sm md:text-base">
              A comprehensive roadmap designed to discover, mentor, fund, and scale student-led innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold font-calsans text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patronages & Recognitions */}
      <section className="py-16 bg-white border-y border-gray-200/60 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
            (Institutional Backing)
          </p>
          <h2 className="text-3xl font-calsans font-bold text-gray-900 mb-10">
            Patronages & Recognitions
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex items-center justify-center p-3"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={70}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrating Success & Milestones Section - Single Row Infinite Scrolling Marquee */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              (Track Record)
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-calsans font-bold text-gray-900">
              Celebrating Success
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Hover to pause
            </span>
            <Link
              href="/Initiatives"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:underline flex items-center gap-1.5"
            >
              <span>Explore all initiatives</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Infinite Horizontal Marquee Row */}
        <div className="relative w-full overflow-hidden success-marquee py-4">
          {/* Subtle side fade gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="success-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-6 pr-6"
                aria-hidden={copy === 1}
              >
                {spotlightItems.map((item, idx) => (
                  <div
                    key={`${copy}-${item.id || idx}`}
                    className="group relative w-[280px] sm:w-[340px] md:w-[380px] shrink-0 h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end"
                  >
                    {/* Background Image using Next.js Image */}
                    <Image
                      src={item.image}
                      alt={copy === 0 ? item.title : ""}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-colors duration-300" />

                    {/* Category Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-bold font-calsans mb-2 group-hover:text-accent transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-3 leading-relaxed font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-calsans font-bold">
              Ready to Turn Your Vision into Reality?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Whether you are a student with a disruptive prototype, a faculty
              researcher looking to file patents, or an industry partner seeking innovation,
              IIC BIT Sindri is your launchpad.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/Contact"
                className="px-6 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors text-sm font-semibold shadow"
              >
                Get in Touch →
              </Link>
              <Link
                href="/Registration-form"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all text-sm font-semibold backdrop-blur-md"
              >
                Register Your Idea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
