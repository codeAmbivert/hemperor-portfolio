import Image from "next/image";
import ConnectEllipse from "./ConnectEllipse";

const Connect = () => {
  const smallScreen = "";
  return (
    <div
      id="connect"
      className="w-[90vw] py-5 md:py-8 lg:py-16 mx-auto justify-center text-center overflow-hidden relative"
    >
      <ConnectEllipse
        className={`top-[-170px] h-[500px] w-[500px] left-[-110px] md:h-[700px] md:w-[700px]  md:top-[-100px] md:left-[-200px] lg:h-[900px] lg:w-[900px]  lg:top-[-120px] lg:left-[-150px]  overflow-hidden absolute`}
      />
      <ConnectEllipse
        className={`top-[-100px] h-[500px] w-[500px] left-[90px] md:h-[700px] md:w-[700px]  md:top-[-150px] md:left-[100px] lg:h-[900px] lg:w-[900px]  lg:top-[-150px] lg:left-[350px] overflow-hidden absolute`}
      />
      <ConnectEllipse
        className={`top-[-50px] h-[500px] w-[500px] left-[300px] md:h-[700px] md:w-[700px]  md:top-[-100px] md:left-[500px] lg:h-[900px] lg:w-[700px]  lg:top-[-300px] lg:left-[900px] overflow-hidden absolute`}
      />

      <div className="">
        <h1 className="capitalize text-xl md:text-3xl font-bold">
          connect with me
        </h1>
        <p className="text-transparent md:text-xl bg-clip-text bg-gradient-to-b from-[#8338EA] to-[#50DFB4]">
          DesignHemperor
        </p>
      </div>
      <div className="flex justify-around mt-8">
        <a href="#" className="underline text-sm md:text-2xl">
          LinkedIn
        </a>
        <a href="#" className="underline text-sm md:text-2xl">
          Twitter
        </a>
        <a href="#" className="underline text-sm md:text-2xl">
          Instagram
        </a>
        <a href="#" className="underline text-sm md:text-2xl">
          Dribble
        </a>
      </div>
    </div>
  );
};

export default Connect;
