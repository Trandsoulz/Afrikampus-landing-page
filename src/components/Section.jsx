const Section = ({ img, header, texts, style }) => {
  return (
    <>
      <div className="w-full mb-4 md:mb-0 flex flex-col md:flex-row  text-[#23272a] md:p-12 lg:p-16 p-8 text-gidugu">
        <div className=" md:2/4 w-full my-auto">
          <img
            src={img}
            alt=""
            className=" md:w-[80%] md:rounded-xl md:border border-black"
          />
        </div>
        <div className="md:2/4 w-full my-auto">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold md:font-extrabold text-bold">
            {" "}
            {header}
          </h2>
          <p className="text-md md:text-xl pt-4 md:pt-6">{texts}</p>
        </div>
      </div>
    </>
  );
};

export default Section;
