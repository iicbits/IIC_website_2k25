"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Prof. Pankaj Rai",
      role: "Chairman, IIC BIT Sindri",
      text: "Our IIC journey reflects the institute's vision of transforming students into innovators and entrepreneurs. The council's milestones stand as a testimony to BIT Sindri's culture of innovation.",
      avatar: "PR",
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Prof. D.K. Singh",
      role: "Vice Chancellor, JUT Ranchi.",
      text: "IIC at BIT Sindri has consistently aligned with the vision of JUT by promoting innovation-driven initiatives and entrepreneurial activities. The council's achievements highlight the potential of our students to contribute nationally and globally.",
      avatar: "DS",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      name: "Prof. Ramesh Yadava",
      role: "Adjunct Faculty & External Member, IIC",
      text: "IIC BIT Sindri has emerged as a vibrant hub of innovation and entrepreneurship in Jharkhand. The commitment of its faculty and students towards problem-solving and startup culture reflects the vision of MoE's Innovation Cell at the grassroots level.",
      avatar: "RY",
      bgColor: "bg-gray-500",
    },
    {
      id: 4,
      name: "Ms. Kumud Sharma",
      role: "External Member, IIC",
      text: "IIC at BIT Sindri has created an environment where creativity is encouraged, ideas are shaped into solutions, and students are inspired to think beyond conventional boundaries. The council's consistent efforts to connect innovation with real-world impact make it a true example of collaborative growth.",
      avatar: "KS",
      bgColor: "bg-purple-500",
    },
    {
      id: 5,
      name: "Ms. Gunjan Gandhi",
      role: "Internal Faculty Member, IIC",
      text: "Being a part of IIC at BIT Sindri has been a deeply enriching experience. It is inspiring to see students transforming their curiosity into impactful innovations with guidance, mentorship, and collaborative learning. The council truly serves as a catalyst in shaping future innovators and leaders.",
      avatar: "GG",
      bgColor: "bg-green-500",
    },
  ];

  useEffect(() => {
    // Handle screen size detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleCards = () => {
    // For mobile, return only the current card
    if (isMobile) {
      return [{ ...testimonials[currentIndex], position: 0 }];
    }

    // For desktop, return 3 cards
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[index], position: i });
    }
    return cards;
  };

  return (
    <div className="md:min-h-screen flex items-center flex-col justify-center px-2 my-10 md:my-0 overflow-hidden">
      <h4 className="text-gray-400 text-center mb-2">(Testimonials)</h4>
      <h1 className="text-5xl md:text-6xl font-bold text-center md:mb-7">
        Testimonials
      </h1>

      <div className="w-full max-w-7xl">
        <div className="relative flex items-center justify-center gap-6 h-96">
          {getVisibleCards().map((testimonial, idx) => {
            const isCenter = testimonial.position === 0;

            return (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-full max-w-md transition-all duration-700 ease-in-out"
              >
                <div
                  className={`${
                    isCenter ? "border-accent" : "border-zinc-400"
                  } bg-black rounded-2xl p-8 md:border-2 shadow-2xl flex flex-col`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-20 h-20 ${testimonial.bgColor} rounded-full flex items-center justify-center font-semibold text-lg text-white`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 border-t border-gray-700 text-base leading-relaxed mt-4 pt-4 flex-grow">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-accent"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
