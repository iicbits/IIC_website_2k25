"use client";

import Image from "next/image";
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaBullseye,
  FaMicrochip,
  FaCog,
  FaLaptopCode,
  FaSatelliteDish,
} from "react-icons/fa";
import { GiMining, GiCrystalGrowth } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

export default function page() {
  return (
    <div className="min-h-screen bg-foreground">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Pioneering the <span className="text-accent">Future of</span>
            <br />
            <span className="text-secondary">Cyber-Physical </span>Mining
          </h2>
          <p className="text-sm md:text-base text-secondary mb-12">
            Bridging heritage mining with digital innovation in Jharkhand
          </p>

          <button className="w-full flex items-center justify-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div className="md:border-r border-gray-800">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                ₹2.32 Cr
              </div>
              <p className="text-gray-300">MoU Investment</p>
            </div>
            <div className="md:border-r border-gray-800">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                ₹2 Lakh
              </div>
              <p className="text-gray-300">Seed Grant Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                ₹10K/mo
              </div>
              <p className="text-gray-300">Fellowship Stipend</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="px-6 ">
              <h3 className="text-3xl font-bold text-black mb-6">About Us</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The BITS-TEXMiN CPS CoE is a dedicated Centre of Excellence
                established to revolutionize the mining industry through
                technology. Born from a strategic partnership between BIT Sindri
                and the TEXMiN Foundation at IIT (ISM) Dhanbad.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <FaLightbulb className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Innovate</h4>
                    <p className="text-gray-600 text-sm">
                      Foster a culture of Mining 4.0 through smart, safe, and
                      sustainable technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaRocket className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Incubate</h4>
                    <p className="text-gray-600 text-sm">
                      Transform student projects into commercially viable
                      startups
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaUsers className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Empower</h4>
                    <p className="text-gray-600 text-sm">
                      Equip the next generation with niche skills in Digital
                      Mine Planning and Industrial IoT
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/events/texmin_photo.webp"
                alt="About Us"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl flex items-center justify-center p-6">
                <p className="text-lg font-semibold text-gray-100 italic">
                  "We are not just extracting minerals; we are mining ideas for
                  a smarter tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Our Initiatives
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforming ideas into reality through innovation challenges and
              fellowship programs
            </p>
          </div>

          {/* TEXCELERATE 2025 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition mb-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <h4 className="text-2xl md:text-4xl font-bold text-black mb-3">
                  TEXCELERATE 2025
                </h4>
                <p className="text-gray-600 mb-6">
                  The flagship innovation challenge designed to hunt for the
                  brightest minds capable of solving critical problems in mining
                  and CPS domains.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      Seed Grant up to ₹2,00,000
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      Direct Pre-Incubation Entry
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      Expert Mentorship from IIT (ISM)
                    </span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 py-2 font-bold">
                  <span>Apply Now</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10">
                    <FaMicrochip className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-10 right-10">
                    <GiMining className="w-20 h-20 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/4">
                    <FaCog
                      className="w-12 h-12 text-white animate-spin"
                      style={{ animationDuration: "20s" }}
                    />
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                    <IoIosRocket className="w-16 h-16 text-white" />
                  </div>
                  <h5 className="text-2xl font-bold text-white mb-2">
                    Innovation Challenge
                  </h5>
                  <p className="text-orange-100">Pitch Your Ideas</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <FaLaptopCode className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <GiCrystalGrowth className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <FaSatelliteDish className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UDAAN Fellowship */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 order-2 md:order-1">
                <h4 className="text-2xl md:text-4xl font-bold text-black mb-3">
                  UDAAN UG Fellowship
                </h4>
                <p className="text-gray-600 mb-6">
                  A prestigious grant program dedicated to undergraduate
                  students pursuing deep-tech research and product development.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      ₹10,000 monthly stipend for 10 months
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      Product Development Funding
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm md:text-base text-gray-700">
                      Industry Connect & Networking
                    </span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 py-2 font-bold">
                  <span>Learn More</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
              <div className="relative bg-gradient-to-br from-black to-gray-900 p-8 flex items-center justify-center order-1 md:order-2">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10">
                    <FaRocket className="w-16 h-16 text-orange-500" />
                  </div>
                  <div className="absolute bottom-10 left-10">
                    <FaUsers className="w-20 h-20 text-orange-500" />
                  </div>
                  <div className="absolute top-1/3 right-1/4">
                    <FaMicrochip className="w-12 h-12 text-orange-500" />
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                    <FaChartLine className="w-16 h-16 text-orange-500" />
                  </div>
                  <h5 className="text-2xl font-bold text-white mb-2">
                    Research Fellowship
                  </h5>
                  <p className="text-gray-300">Fuel Your Innovation</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-500">
                        10
                      </div>
                      <div className="text-xs text-gray-300">Months</div>
                    </div>
                    <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-500">
                        ₹10K
                      </div>
                      <div className="text-xs text-gray-300">Monthly</div>
                    </div>
                    <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-500">
                        ₹1L
                      </div>
                      <div className="text-xs text-gray-300">Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
