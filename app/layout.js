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
  metadataBase: new URL("https://iic.bitsindri.ac.in"),
  alternates: {
    canonical: "https://iic.bitsindri.ac.in",
  },
  openGraph: {
    title: "IIC BIT Sindri | Institution’s Innovation Council & E-Cell",
    description:
      "Fostering innovation and entrepreneurship at BIT Sindri through initiatives, incubation, and student-driven innovation programs.",
    url: "https://iic.bitsindri.ac.in",
    siteName: "IIC BIT Sindri",
    images: [
      {
        url: "/og-image.jpg",
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
    "BIT Sindri",
    "IIC BIT Sindri",
    "iicbits",
    "Institution’s Innovation Council",
    "E-Cell BIT Sindri",
    "Entrepreneurship Cell BIT Sindri",
    "Startup BIT Sindri",
    "Incubation Center BIT Sindri",
    "Texmin BIT Sindri",
    "Best Club of BIT Sindri",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="SLrqTUhSx6A1cqM7oGtbfal7cv_j7XUNYeJrL3Ko6jg"
        />

        {/* JSON-LD Structured Data for better SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Institution’s Innovation Council BIT Sindri",
              alternateName: "IIC | E-Cell BIT Sindri",
              url: "https://iic.bitsindri.ac.in",
              logo: "https://iic.bitsindri.ac.in/logo.png",
              hasPart: [
                {
                  "@type": "WebPage",
                  name: "Home",
                  url: "https://iic.bitsindri.ac.in",
                },
                {
                  "@type": "WebPage",
                  name: "About",
                  url: "https://iic.bitsindri.ac.in/about",
                },
                {
                  "@type": "WebPage",
                  name: "TEXMiN BIT Sindri",
                  url: "https://iic.bitsindri.ac.in/BITS_TEXMiN",
                },
                {
                  "@type": "WebPage",
                  name: "Initiatives",
                  url: "https://iic.bitsindri.ac.in/initiatives",
                },
                {
                  "@type": "WebPage",
                  name: "Incubation",
                  url: "https://iic.bitsindri.ac.in/incubation",
                },
                {
                  "@type": "WebPage",
                  name: "Team",
                  url: "https://iic.bitsindri.ac.in/team",
                },
                {
                  "@type": "WebPage",
                  name: "Gallery",
                  url: "https://iic.bitsindri.ac.in/gallery",
                },
                {
                  "@type": "WebPage",
                  name: "Contact",
                  url: "https://iic.bitsindri.ac.in/contact",
                },
              ],
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://iic.bitsindri.ac.in/search?q={search_term_string}",
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
