import { AiOutlineAlignRight } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Navbar = () => {
  //   // Navbar open and close function
  //   const toggleAside = () => {
  //     const aside = document.querySelector(".aside");
  //     aside.classList.toggle("navClose");
  //   };

  // Navbar open and close function
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <nav className="flex w-full py-4 justify-between md:justify-center font-sans font-[500] text-xl text-white">
        <div className="pt-2">
          <h2>Logo</h2>
        </div>
        <div className="text-white pt-2 text-[14px] hidden md:block">
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Download
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Nitro
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Discover
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Safety
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Support
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Blog
          </a>
          <a href="/" className="nav-links hover:underline underline-offset-2">
            Careers
          </a>
        </div>
        <div className="flex">
          <span className="rounded-3xl bg-slate-100 text-black px-4 py-2 text-[15px] font-medium hover:cursor-pointer">
            <a href="http://">Open Afrikamp</a>
          </span>
          <span className="mt-[7px] ml-6 md:hidden">
            <AiOutlineAlignRight
              className="text-3xl hover:cursor-pointer"
              onClick={() => setShowSideBar(true)}
            />
          </span>
        </div>
      </nav>

      {showSideBar ? (
        <aside className="aside h-full w-[330px] bg-white fixed top-0 right-0 md:hidden">
          <div className="m-6 flex justify-between">
            <h2 className="text-xl">Logo</h2>
            <FaTimes
              className="hover:cursor-pointer text-3xl text-slate-700"
              onClick={() => setShowSideBar(false)}
            />
          </div>

          <span className="w-10/12 flex ml-6 h-[1px] bg-slate-400"></span>
          <div className="mx-6">
            <ul>
              <li className="menu-li">
                {" "}
                <a href="#">Home</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Download</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#" className="">
                  Nitro
                </a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Discover</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Safety</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Mod Academy</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Support</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Blog</a>{" "}
              </li>
              <li className="menu-li">
                {" "}
                <a href="#">Careers</a>{" "}
              </li>
            </ul>
          </div>

          <div className="download-afrikamp flex justify-center content-center">
            <a href="/">
              {" "}
              <FiDownload className="text-2xl text-white" />
              <span className="text-white pl-2">Get Afrikamp</span>
            </a>
          </div>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
