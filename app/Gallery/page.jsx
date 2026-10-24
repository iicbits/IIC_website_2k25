"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/gallery/ipc1.webp", title: "Idea Pitching Competition" },
  { src: "/gallery/inno1.webp", title: "Innovathon" },
  { src: "/gallery/tex3.webp", title: "TEXcelerate" },
  { src: "/gallery/ideo2.webp", title: "IDEOGRAPH" },
  { src: "/events/esum06.jpg", title: "E-SUMMIT '26" },
  { src: "/events/esum05.jpg", title: "E-SUMMIT '26" },
  { src: "/events/esum03.jpg", title: "E-SUMMIT '26" },
  { src: "/events/esum04.jpg", title: "E-SUMMIT '26" },
  { src: "/events/tex01.webp", title: "TEXcelerate 2026" },
  { src: "/events/tex02.webp", title: "TEXcelerate 2026" },
  { src: "/events/tex03.webp", title: "TEXcelerate 2026" },
  { src: "/events/tex06.jpg", title: "TEXcelerate 2026" },
  { src: "/events/tex07.jpg", title: "TEXcelerate 2026" },
  { src: "/events/entr01.webp", title: "Being an Entrepreneur" },
  { src: "/events/entr03.webp", title: "Being an Entrepreneur" },
  { src: "/events/entr04.webp", title: "Being an Entrepreneur" },
  { src: "/events/entr05.webp", title: "Being an Entrepreneur" },
  { src: "/events/udan01.webp", title: "UDAAN UG Fellowship" },
  { src: "/events/udan02.webp", title: "UDAAN UG Fellowship" },
  { src: "/events/udan03.webp", title: "UDAAN UG Fellowship" },
  { src: "/events/20260417_174022.heif.jpeg", title: "UDAAN UG Fellowship" },
  { src: "/events/inno09.JPG", title: "INNOVATHON 3.0" },
  { src: "/events/inno07.jpg", title: "INNOVATHON 3.0" },
  { src: "/events/inno03.webp", title: "INNOVATHON 3.0" },
  { src: "/events/inno04.webp", title: "INNOVATHON 3.0" },
  { src: "/events/inno05.webp", title: "INNOVATHON 3.0" },
  { src: "/events/inno08.jpg", title: "INNOVATHON 3.0" },
  { src: "/events/equt01.webp", title: "Equity Minds" },
  { src: "/events/equt02.webp", title: "Equity Minds" },
  { src: "/events/equt03.webp", title: "Equity Minds" },
  { src: "/events/equt04.jpg", title: "Equity Minds" },
  { src: "/events/equt07.jpg", title: "Equity Minds" },
  { src: "/events/bild01.webp", title: "BuildX EXPO" },
  { src: "/events/bild02.webp", title: "BuildX EXPO" },
  { src: "/events/bild03.webp", title: "BuildX EXPO" },
  { src: "/events/bild04.webp", title: "BuildX EXPO" },
  { src: "/events/ses06.jpg", title: "E-Summit Keynotes & Talks" },
  { src: "/events/ses05.jpg", title: "E-Summit Keynotes & Talks" },
  { src: "/events/ses04.webp", title: "E-Summit Keynotes & Talks" },
  { src: "/events/ses07.jpg", title: "E-Summit Keynotes & Talks" },
  { src: "/events/mms2.jpeg", title: "MENTOR MENTEE SCHEME" },
  { src: "/events/mms1.jpeg", title: "MENTOR MENTEE SCHEME" },
  { src: "/events/mms3.jpeg", title: "MENTOR MENTEE SCHEME" },
  { src: "/events/mms4.jpeg", title: "MENTOR MENTEE SCHEME" },
  { src: "/events/mms5.jpeg", title: "MENTOR MENTEE SCHEME" },
  { src: "/events/ipc1.webp", title: "Idea Pitching Competition" },
  { src: "/events/ipc2.webp", title: "Idea Pitching Competition" },
  { src: "/events/ideo2.webp", title: "IDEOGRAPH" },
  { src: "/events/ideo1.webp", title: "IDEOGRAPH" },
  { src: "/events/ideo3.webp", title: "IDEOGRAPH" },
  { src: "/events/ideo4.webp", title: "IDEOGRAPH" },
  { src: "/events/sih3.webp", title: "SIH Internals" },
  { src: "/events/sih2.webp", title: "SIH Internals" },
  { src: "/events/sih1.webp", title: "SIH Internals" },
  { src: "/events/sih4.webp", title: "SIH Internals" },
];

const GalleryPage = () => (
  <section>
    <div className="min-h-[60vh] bg-foreground">
      <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
        <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
          A{" "}
          <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
          <span className="text-accent">Glimpse</span>
          <br />
          <span className="text-secondary">into</span>{" "}
          <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
          Our Journey
        </h2>

        <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
          Explore moments of innovation, creativity, and collaboration captured
          from our events, workshops, and startup initiatives.
        </p>

        <a href="#gallery-images" className="flex items-center space-x-2">
          <span>Scroll Down</span>
          <span className="text-lg animate-bounce">↓</span>
        </a>
      </main>
    </div>

    <div id="gallery-images" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-secondary mb-4">(Archives)</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-calsans font-extrabold">
          IIC Moments
        </h2>
      </div>

      <div className="gallery-marquee">
        <div className="gallery-marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 gap-6 pr-6"
              aria-hidden={copy === 1}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={`${copy}-${index}`}
                  className="group relative aspect-[4/3] w-[240px] shrink-0 overflow-hidden rounded-xl shadow-lg sm:w-[300px] md:w-[360px]"
                >
                  <Image
                    src={item.src}
                    alt={copy === 0 ? item.title : ""}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-black/50 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-white">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="gallery-marquee" aria-hidden="true">
          <div className="gallery-marquee-track gallery-marquee-track--reverse">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-6 pr-6"
              >
                {galleryImages.map((item, index) => (
                  <div
                    key={`${copy}-${index}`}
                    className="group relative aspect-[4/3] w-[240px] shrink-0 overflow-hidden rounded-xl shadow-lg sm:w-[300px] md:w-[360px]"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end bg-black/50 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-white">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryPage;
