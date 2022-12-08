const Footer = () => {
  const date = new Date();
  const d = date.getFullYear();

  const copyright = (
    <h3 className="text-white my-auto"> &copy; Afrikamp {d}</h3>
  );

  return (
    <>
      <footer className="p-8 bg-[#000000] mx-auto font-gidugu">
        <div className="flex text-white lg:flex-row flex-col">
          <div className="lg:w-1/4 md:px-12 py-4">
            <h2 className="uppercase font-bold text-3xl">Imagine a platform</h2>
            <a
              href="mailto:afrikamp@gmail.com"
              className="text-xl hover:text-[#9747FF] transition-all 1s"
            >
              afrikamp@gmail.com
            </a>
          </div>

          <div className="flex lg:w-3/4 md:flex-row flex-col md:justify-between lg:justify-evenly justify-evenly md:px-12">
            <div className="footer-heading mb-4">
              <h1 className="font-semibold text-[#9747FF]">Products</h1>
              <ul>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-heading mb-4">
              <h1 className="font-semibold text-[#9747FF]">Resources</h1>
              <ul>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-heading mb-4">
              <h1 className="text-[#9747FF] font-semibold">Company</h1>
              <ul>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-heading mb-4">
              <h1 className="font-semibold text-[#9747FF]">Policies</h1>
              <ul>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="leading-relaxed text-sm font-light hover:underline "
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#9747FF] w-11/12 h-[2px] m-4"></div> */}

        <div className="flex justify-center md:justify-between md:mx-6 px-6 border-t-2 border-[#9747FF] mt-8 pt-4 md:w-11/12">
          <a
            href="/"
            className="rounded-2xl bg-[#9747FF] bg-opacity-80 text-white px-6 py-3 text-[15px] font-medium hover:cursor-pointer hover:text-[#9747FF] hover:bg-white transition-all 1.5s md:block hidden"
          >
            Join Community
          </a>
          {copyright}
        </div>
      </footer>
    </>
  );
};

export default Footer;
