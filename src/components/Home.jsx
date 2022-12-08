import HeroSection from "./HeroSection";
import Section from "./Section";
import img2 from "../assets/join-grp.png";
import img3 from "../assets/live-feed-grp.png";
import img4 from "../assets/live-chat-grp.svg";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Section
        img={img2}
        header={"JOIN GROUPS"}
        texts={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
      />

      <div className="bg-[#D9D9D9] bg-opacity-30 w-full mb-4 md:mb-0 flex flex-col md:flex-row-reverse text-[#23272a] md:p-12 lg:p-16 p-8 text-gidugu">
        <div className=" md:2/4 w-full my-auto">
          <img
            src={img3}
            alt=""
            className=" md:w-[80%] md:rounded-xl md:border border-black md:float-right"
          />
        </div>
        <div className="md:2/4 w-full my-auto">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold md:font-extrabold text-bold">
            Live News Feed
          </h2>
          <p className="text-md md:text-xl pt-4 md:pt-6">
            Grab a seat in a voice channel when you're free. Friends in your
            server can see you're around and instantly pop in to talk without
            having to call.
          </p>
        </div>
      </div>

      <Section
        img={img4}
        header={"Networking"}
        texts={
          "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        }
      />

      <Footer />
    </>
  );
};

export default Home;
