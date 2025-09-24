"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "My manager was blown away. I used a technique from Module 4 to generate a full marketing strategy in an afternoon. This course didn't just teach me AI, it got me noticed.",
    author: "Cooper Geidt",
    title: "Senior Prompt Engineer",
    company: "Wave",
    avatar: "/images/small.jpg",
  },
  {
    quote:
      "This is a fantastic course. It has helped me significantly improve my workflow and productivity. I highly recommend it to anyone looking to leverage AI.",
    author: "Jane Doe",
    title: "Lead Developer",
    company: "Tech Solutions",
    avatar: "/images/small.jpg",
  },
  {
    quote:
      "The content is incredibly practical and easy to understand. I was able to apply the lessons immediately at work.",
    author: "John Smith",
    title: "Product Manager",
    company: "Innovate Inc.",
    avatar: "/images/small.jpg",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  const { quote, author, title, company, avatar } =
    testimonials[currentTestimonial];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center relative">
        <blockquote className="text-3xl font-light italic leading-relaxed">
          <p className="before:content-['“'] before:absolute before:-left-8 before:top-0 before:text-5xl before:font-bold before:text-orange-500 after:content-['”'] after:ml-2 after:text-5xl after:font-bold after:text-orange-500">
            {quote}
          </p>
        </blockquote>

        <div className="mt-12 flex flex-col items-center">
          <Image
            src={avatar}
            alt={author}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-700"
          />
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">{author}</p>
            <p className="text-sm font-light">{title}</p>
            <p className="text-sm font-light">{company}</p>
          </div>
        </div>

        <div className="mt-8">
          <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
