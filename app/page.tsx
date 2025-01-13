import HeroSection from "./components/Home/Hero";
import Services from "./components/Home/Services";
import HowItWorks from "./components/Home/HowItWorks";
import Features from "./components/Home/Features";
import FAQSection from "./components/Home/FAQSection";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Features />
      <HowItWorks />
      <FAQSection />
      <Contact />
    </div>
  );
}
