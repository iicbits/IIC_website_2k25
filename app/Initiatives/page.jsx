"use client";


import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const services = [
 {
   title: "E-SUMMIT '26",
   category: "E-Summit '26",
   description:
     "E-SUMMIT’26 is the flagship national-level entrepreneurship and innovation summit organized for the first time by the Institution’s Innovation Council (IIC 8.0) at BIT Sindri from April 17th–19th, 2026. Bringing together 10,000+ students, 250+ startups, venture capitalists, and industry experts, the summit features startup pitching sessions, hackathons, expert talks, panel discussions, and hands-on workshops with a ₹25L+ prize pool.",
   image: ["/events/esum01.jpeg",
      "/events/esum02.webp",
   ],
 },
 {
   title: "TEXcelerate 2026",
   category: "E-Summit '26",
   description:
     "TEXcelerate 2026 is a flagship idea pitching and innovation challenge organized under E-Summit'26 in collaboration with TEXMiN Hub, IIT ISM Dhanbad. The competition focuses on scalable industry-oriented solutions in Mining 4.0, Cyber-Physical Systems, and sustainability, providing teams with seed funding, pre-incubation, and expert mentorship.",
   image: [
     "/events/tex01.webp",
     "/events/tex02.webp",
     "/events/tex03.webp",
   ],
 },
 {
   title: "Being an Entrepreneur",
   category: "E-Summit '26",
   description:
     "Being an Entrepreneur is a case-based competition at E-Summit'26 focused on real-world business strategy, startup problem-solving, and critical decision-making under realistic market scenarios.",
   image: [
     "/events/entr01.webp",
     "/events/entr03.webp",
     "/events/entr04.webp",
     "/events/entr05.webp",
      

   ],
 },
 {
   title: "UDAAN UG Fellowship",
   category: "E-Summit '26",
   description:
     "The UDAAN UG Fellowship Program at E-Summit'26 empowers undergraduate innovators through funded, research-driven projects aligned with real-world national priorities, offering structured mentorship, prototyping support, and seed funding per fellow.",
   image: [
     "/events/udan01.webp",
     "/events/udan02.webp",
     "/events/udan03.webp",
   ],
 },
 {
   title: "INNOVATHON 3.0",
   category: "E-Summit '26",
   description:
     "INNOVATHON 3.0 is a 36-hour national-level innovation hackathon at E-Summit'26 organized by IIC BIT Sindri. Participants build functional prototypes and practical, industry-oriented technology solutions in AI/ML, automation, and smart manufacturing under expert mentorship.",
   image: [
     "/events/inno01.webp",
     "/events/inno02.webp",
     "/events/inno03.webp",
     "/events/inno04.webp",
     "/events/inno05.webp",
   ],
 },
 {
   title: "Equity Minds",
   category: "E-Summit '26",
   description:
     "A premier venture capital and financial simulation competition at E-Summit'26, testing participants on company valuation, venture equity, investment rounds, and portfolio decision-making.",
   image: [
     "/events/equt01.webp",
     "/events/equt02.webp",
     "/events/equt03.webp",
   ],
 },
 {
   title: "BuildX EXPO",
   category: "E-Summit '26",
   description:
     "A project exhibition platform at E-Summit'26 for school and college innovators to present research-driven ideas, working prototypes, and technology-based solutions addressing real-world industry and community challenges.",
   image: [
     "/events/bild01.webp",
     "/events/bild02.webp",
     "/events/bild03.webp",
     "/events/bild04.webp",
   ],
 },
 {
   title: "E-Summit Keynotes & Talks",
   category: "E-Summit '26",
   description:
     "Keynote sessions and panel discussions at E-Summit'26 featuring seasoned entrepreneurs, venture capitalists, industry leaders, and digital creators sharing startup wisdom and insights on emerging tech.",
   image: [
     "/events/ses04.webp",
     "/events/ses02.webp",
     "/events/ses03.webp",
     "/events/ses01.webp",
   ],
 },
 {
   title: "MENTOR MENTEE SCHEME",
   category: "IIC Programs",
   description:
     "Under the Supervision of Chairman, Prof. Pankaj Rai (Director, BIT Sindri), President, Prof. Prakash Kumar & Convener Prof. Rahul Kumar. Standard Xth Students from Mother's Teresa School visited BIT Sindri Innovation & Incubation Centre Foundation.",
   image: [
     "/events/mms2.jpeg",
     "/events/mms1.jpeg",
     "/events/mms3.jpeg",
     "/events/mms4.jpeg",
     "/events/mms5.jpeg",
   ],
 },
 {
   title: "Idea Pitching Competition",
   category: "IIC Programs",
   description:
     "As a part of its core mission to promote innovation, creativity, and problem-solving among students, the Institution’s Innovation Council (IIC 7.0) in collaboration with Jharkhand University of Technology, Ranchi BIT Sindri organized Idea Pitching Competition. This event was specifically curated to encourage students to explore innovative solutions rooted in real-world problems.",
   image: ["/events/ipc1.webp", "/events/ipc2.webp"],
 },
 {
   title: "IDEOGRAPH",
   category: "IIC Programs",
   description:
     "In honor of World Creativity and Innovation Day, BIT Sindri’s Institution’s Innovation Council (IIC 7.0) hosted IDEOGRAPH, a compelling and imaginative poster presentation event that brought together student innovators from across engineering disciplines.",
   image: [
     "/events/ideo2.webp",
     "/events/ideo1.webp",
     "/events/ideo3.webp",
     "/events/ideo4.webp",
   ],
 },
 {
   title: "SIH Internals",
   category: "IIC Programs",
   description:
     "The Hackathon & Coding Club at BIT Sindri, in collaboration with the Entrepreneurial Cell and Institution’s Innovation Council (IIC 7.0), successfully organized an internal hackathon which was designed to foster technological innovation, teamwork, and problem-solving skills among students.",
   image: [
     "/events/sih3.webp",
     "/events/sih2.webp",
     "/events/sih1.webp",
     "/events/sih4.webp",
   ],
 },
];


const InitiativesPage = () => {
 const [activeTab, setActiveTab] = useState("All");
 const [slideIndices, setSlideIndices] = useState({});


 const tabs = ["All", "E-Summit '26", "IIC Programs"];


 const filteredServices =
   activeTab === "All"
     ? services
     : services.filter((s) => s.category === activeTab);


 const nextSlide = (title, max) => {
   setSlideIndices((prev) => ({
     ...prev,
     [title]: ((prev[title] || 0) + 1) % max,
   }));
 };


 const prevSlide = (title, max) => {
   setSlideIndices((prev) => ({
     ...prev,
     [title]: ((prev[title] || 0) - 1 + max) % max,
   }));
 };


 return (
   <section className="">
     {/* Hero Header */}
     <div className="min-h-[50vh] md:min-h-[60vh] bg-foreground flex items-center justify-center">
       <main className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
         <h1 className="font-calsans text-4xl sm:text-5xl lg:text-7xl leading-tight md:leading-snug mb-6 text-black">
           Where Ideas{" "}
           <span className="text-accent">Compete</span>,
           <br />
           <span className="text-secondary">Collaborate </span>& Come Alive
         </h1>


         <p className="text-sm md:text-base max-w-xl text-secondary mb-10 leading-relaxed">
           Our initiatives bring together innovation challenges, hackathons,
           workshops, and real-world problem solving to shape the next
           generation of innovators.
         </p>


         <a
           href="#initiatives-content"
           className="flex items-center space-x-2 text-secondary hover:text-black transition-colors group cursor-pointer text-sm font-medium"
         >
           <span>Browse Initiatives</span>
           <span className="text-base animate-bounce">↓</span>
         </a>
       </main>
     </div>


     {/* Initiatives Content */}
     <div id="initiatives-content" className="px-4 md:px-8 py-12">
       <div className="max-w-7xl mx-auto">
         {/* Header & Tabs */}
         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
           <div>
             <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
               (Initiatives & Events)
             </p>
             <h2 className="text-3xl sm:text-4xl font-calsans font-bold text-gray-900">
               Our Programs
             </h2>
           </div>


           {/* Category Filter Tabs to eliminate excessive scroll */}
           <div className="flex flex-wrap gap-2">
             {tabs.map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                   activeTab === tab
                     ? "bg-black text-white shadow"
                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>
         </div>


         {/* Compact Responsive Grid: cuts down vertical scroll by ~75% */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredServices.map((service) => {
             const slideIdx = slideIndices[service.title] || 0;
             const images = service.image || [];


             return (
               <div
                 key={service.title}
                 className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden p-5"
               >
                 <div>
                   {/* Image Carousel / Photo Space */}
                   {images.length > 0 ? (
                     <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-inner">
                       <Image
                         src={images[slideIdx]}
                         alt={service.title}
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className="object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                       {images.length > 1 && (
                         <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button
                             onClick={() =>
                               prevSlide(service.title, images.length)
                             }
                             className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition text-sm shadow"
                             aria-label="Previous image"
                           >
                             ‹
                           </button>
                           <button
                             onClick={() =>
                               nextSlide(service.title, images.length)
                             }
                             className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition text-sm shadow"
                             aria-label="Next image"
                           >
                             ›
                           </button>
                         </div>
                       )}
                       {images.length > 1 && (
                         <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-mono">
                           {slideIdx + 1}/{images.length}
                         </div>
                       )}
                     </div>
                   ) : (
                     <div className="relative aspect-[16/10] w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-4 text-center text-gray-400 mb-4 group-hover:border-gray-400 transition-colors">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-8 h-8 text-gray-400 mb-1"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={1.5}
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                         />
                       </svg>
                       <span className="text-xs font-semibold text-gray-600">
                         Photo Space
                       </span>
                       <span className="text-[10px] text-gray-400">
                         Add path in image array
                       </span>
                     </div>
                   )}


                   {/* Category pill */}
                   <div className="mb-2">
                     <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700">
                       {service.category}
                     </span>
                   </div>


                   {/* Title */}
                   <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                     {service.title}
                   </h3>


                   {/* Description */}
                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                     {service.description}
                   </p>
                 </div>
               </div>
             );
           })}
         </div>
       </div>


       {/* Compact Call to Action Button */}
       <div className="mx-auto mt-20 w-full h-[45vh] md:h-[40vh] max-w-7xl">
         <div className="relative w-full h-full">
           <Image
             src="/events/EventCTA.webp"
             alt="Incubator"
             fill
             className="object-cover rounded-3xl"
           />
           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center rounded-3xl px-6 text-center">
             <h3 className="text-white text-3xl md:text-4xl font-bold">
               Let's <span className="text-accent">Collaborate</span> & Create Something Big
             </h3>
             <p className="text-gray-300 mt-3 text-xs md:text-sm max-w-lg">
               To collaborate with us, reach out at iicbits@bitsindri.ac.in
               or simply fill out the contact form.
             </p>
             <Link
               href="/Contact"
               className="mt-6 px-5 py-2 border border-neutral-400 rounded-full text-xs font-medium transition-colors duration-300 text-white hover:border-accent hover:text-accent"
             >
               Contact Us<span className="ml-1.5">→</span>
             </Link>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};


export default InitiativesPage;

