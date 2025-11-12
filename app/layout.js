import localFont from "next/font/local";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./Home/components/Navbar";
import Footer from "./Home/components/Footer";
import Script from "next/script";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff",
  variable: "--font-cal-sans",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "IIC BIT Sindri | E-Cell",
    template: "%s | IIC BIT Sindri",
  },
  description:
    "The Institution’s Innovation Council (IIC) & E-Cell at BIT Sindri fosters innovation, startup culture, and entrepreneurship through initiatives, incubation support, and student-led projects.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/apple-touch-icon.png", rel: "apple-touch-icon" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  metadataBase: new URL("http://iicbits.org"),
  alternates: {
    canonical: "http://iicbits.org",
  },
  openGraph: {
    title: "IIC BIT Sindri | Institution’s Innovation Council & E-Cell",
    description:
      "Fostering innovation and entrepreneurship at BIT Sindri through initiatives, incubation, and student-driven innovation programs.",
    url: "http://iicbits.org",
    siteName: "IIC BIT Sindri",
    images: [
      {
        url: "/og-image.jpg", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "IIC BIT Sindri - Innovation & Entrepreneurship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IIC BIT Sindri | Institution’s Innovation Council & E-Cell",
    description:
      "Empowering innovation, creativity, and startups at BIT Sindri.",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "IIC BIT Sindri",
    "Institution’s Innovation Council",
    "E-Cell BIT Sindri",
    "Entrepreneurship BIT Sindri",
    "Startup BIT Sindri",
    "Innovation BIT Sindri",
    "Incubation BIT Sindri",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Rich Results */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Institution’s Innovation Council BIT Sindri",
              alternateName: "IIC | E-Cell BIT Sindri",
              url: "http://iicbits.org",
              logo: "http://iicbits.org/logo.png", // Replace with your actual logo URL
              sameAs: [
                "https://www.linkedin.com/company/iic-bit-sindri/",
                "https://www.instagram.com/iicbitsindri/",
                "https://twitter.com/iicbitsindri",
              ],
              description:
                "Institution’s Innovation Council (IIC) cum E-Cell BIT Sindri promotes a culture of innovation, startup creation, and entrepreneurship through various programs, events, and incubation support.",
              department: {
                "@type": "CollegeOrUniversity",
                name: "Birsa Institute of Technology, Sindri",
                url: "https://bitsindri.ac.in/",
              },
              hasPart: [
                {
                  "@type": "WebPage",
                  name: "Home",
                  url: "http://iicbits.org",
                  description:
                    "Discover IIC & E-Cell BIT Sindri — nurturing innovation and entrepreneurship on campus.",
                },
                {
                  "@type": "WebPage",
                  name: "About",
                  url: "http://iicbits.org/about",
                  description:
                    "Learn about the vision, mission, and objectives of IIC BIT Sindri.",
                },
                {
                  "@type": "WebPage",
                  name: "Initiatives",
                  url: "http://iicbits.org/initiatives",
                  description:
                    "Explore our innovation and entrepreneurship initiatives that empower student ideas.",
                },
                {
                  "@type": "WebPage",
                  name: "Incubation",
                  url: "http://iicbits.org/incubation",
                  description:
                    "Get incubation support for your startup ideas through our mentorship and resources.",
                },
                {
                  "@type": "WebPage",
                  name: "Team",
                  url: "http://iicbits.org/team",
                  description:
                    "Meet the dedicated team behind IIC BIT Sindri driving innovation forward.",
                },
                {
                  "@type": "WebPage",
                  name: "Gallery",
                  url: "http://iicbits.org/gallery",
                  description:
                    "Browse moments from our events, hackathons, and innovation challenges.",
                },
                {
                  "@type": "WebPage",
                  name: "Contact",
                  url: "http://iicbits.org/contact",
                  description:
                    "Reach out to IIC BIT Sindri for collaborations, queries, and opportunities.",
                },
              ],
              potentialAction: {
                "@type": "SearchAction",
                target: "http://iicbits.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${inter.className} ${calSans.variable} ${dancingScript.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
