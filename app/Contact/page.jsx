"use client";

import Image from "next/image";
import { contactUsData } from "../action";
import { useForm } from "react-hook-form";
import { useState } from "react";

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await contactUsData(data);
      console.log(response);
      setSubmitMessage("Message sent successfully!");
      reset();
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <div className="bg-black relative px-4 md:px-12 lg:px-28 py-12 mx-4 my-4 rounded-2xl min-h-screen flex items-center">
        <div className="absolute inset-0 z-10 w-full h-full rounded-2xl bg-gradient-to-t from-black via-black/40 to-black"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/incub.png"
            alt="Contact Background"
            fill
            className="opacity-40 rounded-2xl object-cover"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full z-20">
          {/* Left Section */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Need help? or Have suggestions!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Let's make something happen together
            </p>

            <div className="flex flex-col justify-center">
              <h1 className="font-bold opacity-90 mb-1">MEET</h1>
              <p className="flex flex-col mb-2 text-gray-400">
                <span>Incubation Centre, IT Building</span>
                <span>BIT Sindri, Jharkhand</span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold opacity-90 mb-1">CONTACT</h1>
              <p className="text-gray-400 flex flex-col mb-2">
                <span>iicbits@bitsindri.ac.in</span>
                <span>iicbits@bitsindri.ac.in</span>
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name must not exceed 50 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Name can only contain letters and spaces",
                    },
                  })}
                  placeholder="Enter your Name"
                  className={`w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="Enter the Email"
                  className={`w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                    maxLength: {
                      value: 500,
                      message: "Message must not exceed 500 characters",
                    },
                  })}
                  placeholder="Type Here..."
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitMessage && (
                <p
                  className={`text-sm text-center ${
                    submitMessage.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-95 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Now!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
