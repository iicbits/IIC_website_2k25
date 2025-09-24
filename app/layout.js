import localFont from "next/font/local";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./Home/components/Navbar";
import Footer from "./Home/components/Footer";

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
  title: "IIC BIT Sindri",
  description: "Institution's Innovation Council, BIT Sindri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
