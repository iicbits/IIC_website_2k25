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

      <div className="md:min-h-screen w-full px-4">
        <Image
          src="/images/incub.png"
          alt="Incubation Centre"
          width={700}
          height={400}
          className="object-fit w-full"
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
