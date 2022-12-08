import { AiOutlineDownload } from "react-icons/ai";

const HeroContent = () => {
  return (
    <>
      <div className=" font-gidugu md:mt-[7rem] mt-20 lg:w-8/12 md:w-11/12 w-10/12 text mx-auto text-white lg:text-center md:text-left text-center">
        <div>
          <h1
            className="uppercase text-3xl md:text-7xl font-bold tracking-[0.005em]"
            // style={{ textStretch: "ultra-expanded" }}
          >
            Imagine A Platform....
          </h1>
          <p
            className="font-gidugu text-md md:text-lg mt-4 md:mt-8 md:leading-8 lg:w-8/12 lg:mx-auto md:w-9/12"
            // style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            where you can join different communities where just you and a
            handful of friends or likeminds can spend time together, get
            informations and communicate to a large community of students.
          </p>
        </div>
        <div className="flex lg:justify-around md:w-10/12 w-11/12 lg:mx-auto md:mx-0 mx-auto  flex-wrap mt-4 text-md md:text-lg">
          <a
            href="http://"
            className="bg-[#ffffff] text-[#23272a]  md:py-3 md:px-8 rounded-full m-2 justify-center p-4 px-6 md:mx-0 mx-auto lg:mx-auto"
          >
            Join Community
          </a>
          <a
            href="http://"
            className="bg-[#23272a] text-[#ffffff] md:py-3 md:px-8 rounded-full m-2 justify-center p-4 px-6 md:mx-0 mx-auto lg:mx-auto"
          >
            Open in Browser
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
