const Footer = () => {
  return (
    <div className=" mt-10 w-full bg-[#0B0B0B]">
      <div className="flex mx-auto w-[90vw] px-4 py-8 justify-between items-center">
        <div>
          <h1 className="capitalize text-xl md:text-3xl lg:text-5xl font-bold mb-5">
            Do you have a <br /> next level idea?
          </h1>
          <p className="opacity-75 text-xs md:text-sm lg:text-base">Let's talk about it</p>
        </div>
        <div className="flex flex-col-reverse items-center">
          <a
            href="mailto:Charlesemmanuel4business@gmail.com"
            className="bg-[#8338EA] my-2 py-3 md:px-10 lg:px-20 lg:py-4 px-6 text-sm lg:text-base rounded-md mb-5 hover:bg-gradient-to-b from-[#8338EA] to-[#50DFB4] "
          >
            Get in touch
          </a>

          <a
            href="mailto:Charlesemmanuel4business@gmail.com"
            className="text-xs md:text-base lg:text-2xl underline my-2"
          >
            Charlesemmanuel4
            <br />
            business@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
