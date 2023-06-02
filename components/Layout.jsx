import { useRouter } from "next/router";
import Connect from "./Connect";
import ConnectEllipse from "./ConnectEllipse";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();
  let spiralDivStyling1;
  let spiralDivStyling2;
  if (router.asPath === "/") {
    spiralDivStyling1 =
      "top-[1100px] md:top-[710px] lg:top-[930px] w-[70px] lg:w-[130px] right-[0] absolute";
    spiralDivStyling2 =
      "top-[1110px] md:top-[710px] lg:top-[940px] w-[70px] lg:w-[130px] right-[0] absolute";
  } else if (router.asPath === "/about") {
    spiralDivStyling1 =
      "top-[640px] md:top-[650px] lg:top-[750px] w-[70px] md:w-[95px] lg:w-[130px] right-[0] absolute";
    spiralDivStyling2 =
      "top-[650px] md:top-[660px] lg:top-[760px] w-[70px] md:w-[95px] lg:w-[130px] right-[0] absolute";
  } else {
    spiralDivStyling1 = "hidden";
    spiralDivStyling2 = "hidden";
  }
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="overflow-hidden flex flex-col items-center relative">
        <ConnectEllipse
          className={`top-[-300px] w-[900px] left-[-500px] absolute`}
        />
        <ConnectEllipse
          className={`hidden md:block md:top-[-300px] md:w-[700px] left-[300px] absolute`}
        />
        <div className={`${spiralDivStyling1}`}>
          <div className="spiral-div" id="first"></div>
        </div>
        <div className={`${spiralDivStyling2}`}>
          <div className="spiral-div" id="second"></div>
        </div>
        {children}
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
