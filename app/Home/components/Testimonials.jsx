"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Guy Hawkins",
      role: "Infrastructure at Flo",
      text: "The intuitive interface and advanced security measures of Securify make it the ideal solution for our company's cybersecurity needs.",
      avatar: "/images/incub.png",
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Ronald Richards",
      role: "Infrastructure at Flo",
      text: "Since implementing Securify, we've noticed a significant improvement in our overall security posture. It's a reliable and efficient platform.",
      avatar: "RR",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      name: "Floyd Miles",
      role: "Infrastructure at Flo",
      text: "I appreciate the proactive approach of Securify in addressing emerging threats. It's a proactive solution that keeps our business safe.",
      avatar: "FM",
      bgColor: "bg-gray-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[index], position: i });
    }
    return cards;
  };

  return (
    <div className="md:min-h-screen flex items-center flex-col justify-center p-8 overflow-hidden">
      <h4 className="text-secondary text-center mb-2">(Testimonials)</h4>
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-7">
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
                    isCenter ? "border-accent" : " border-zinc-400"
                  } bg-foreground rounded-2xl p-8 border shadow-2xl flex flex-col`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-20 h-20 ${testimonial.bgColor} rounded-full flex items-center justify-center font-semibold text-lg`}
                    >
                      {testimonial.avatar.length > 2 ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="rounded-full w-full h-full object-cover"
                        />
                      ) : (
                        testimonial.avatar
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 border-t  text-base leading-relaxed mt-4 pt-4 flex-grow">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
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
