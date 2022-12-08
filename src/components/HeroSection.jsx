import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <header className=" lg:pb-20 md:pb-16 pb-12 bg-heroBg bg-center bg-cover bg-no-repeat">
        <Navbar />
        <HeroContent />

        {/* <div className="absolute bottom-0 right-[3rem] left-[-5rem] md:hidden opacity-80"> bg-[#404eed]
          <img src={img1} alt="img of svg" className="ml-[-8] w-6/4" /> 
        </div> */}
      </header>
    </>
  );
};

export default HeroSection;
