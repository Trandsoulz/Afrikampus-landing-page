// import { bgHero } from "../assets/hero-bg.jpg";

import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <header className="h-screen bg-heroBg bg-center bg-cover bg-no-repeat">
        <Navbar />
        <HeroContent />
      </header>
    </>
  );
};

export default HeroSection;
