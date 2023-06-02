import Connect from "./Connect";
import ConnectEllipse from "./ConnectEllipse";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
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
        <div
          className={`top-[700px] md:top-[400px] w-[300px] right-[0] absolute`}
        >
          <img
            src="/purple ellipse.png"
            className="h-full w-full"
            alt="ellipse"
          />
        </div>
        <div
          className={`top-[1130px] md:top-[710px] lg:top-[930px] w-[80px] lg:w-[130px] right-[0] absolute`}
        >
          <img src="/aesthetics.png" className="h-full w-full" alt="ellipse" />
        </div>
        {children}
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
