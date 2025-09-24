import Image from "next/image";
import Hero from "./Home/components/Hero";
import IntroIIC from "./Home/components/IntroIIC";
import Events from "./Home/components/Events";
import Resources from "./Home/components/Resources";
import JoinUs from "./Home/components/JoinUs";
import FAQComponent from "./Home/components/Faqs";
import Testimonials from "./Home/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="min-h-screen w-full px-4">
        <Image
          src="/images/incub.png"
          alt="Description of image"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      <IntroIIC />
      <Events />
      <Resources />
      <Testimonials />
      <FAQComponent />
      <JoinUs />
    </>
  );
}
