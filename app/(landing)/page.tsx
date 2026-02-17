import AboutSection from "./components/home/about";
import CertificationSection from "./components/home/certification";
import HeroSection from "./components/home/hero";
import PortfolioSection from "./components/home/portfolio";
import ServiceSection from "./components/home/service";
import TechStack from "./components/home/tech-stack";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ServiceSection />
      <PortfolioSection />
      <CertificationSection />
    </main>    
  );
}
