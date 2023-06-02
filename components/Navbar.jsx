import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleDropDown = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full fixed bg-black/80 py-6 z-50">
      <div className="w-[90vw] mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl">DesignHemperor</h1>

          <ul className="md:flex opacity-75 font-normal hidden">
            <li className="mr-5">
              <Link href="/" className={router.pathname == "/" ? "active" : ""}>
                HOME
              </Link>
            </li>
            <li className="mr-5">
              <Link
                href="/about"
                className={router.pathname === "/about" ? "active" : ""}
              >
                ABOUT
              </Link>
            </li>
            <li className="mr-5">
              <a
                href="#connect"
                className={
                  router.pathname === "/#connect" ||
                  router.pathname === "/about#connect" ||
                  router.pathname === "/case-studies#connect"
                    ? "active"
                    : ""
                }
              >
                CONTACT ME
              </a>
            </li>
            <li>
              <Link
                href="/case-studies"
                className={router.pathname === "/case-studies" ? "active" : ""}
              >
                CASE STUDIES
              </Link>
            </li>
          </ul>
          <div
            onClick={() => {
              handleDropDown();
            }}
            className="md:hidden z-50"
          >
            {!nav ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <ul
          className={
            nav
              ? "text-black flex flex-col text-xl font-normal h-[50%] w-[70vw] md:w-[30vw] p-5 items-center justify-around bg-white fixed top-20 rounded left-0"
              : "flex z-50 flex-col text-3xl font-normal w-full h-full items-center justify-around bg-black fixed left-[-200vw]"
          }
        >
          <li className="md:mr-5">
            <Link
              href="/"
              className={
                router.pathname === "/" ? "border-b-2 border-b-black" : ""
              }
              onClick={() => handleDropDown()}
            >
              HOME
            </Link>
          </li>
          <li className="md:mr-5">
            <Link
              href="/about"
              className={
                router.pathname === "/about" ? "border-b-2 border-b-black" : ""
              }
              onClick={() => handleDropDown()}
            >
              ABOUT
            </Link>
          </li>
          <li className="md:mr-5">
            <a
              href="#connect"
              className={
                router.pathname === "/#connect" ||
                router.pathname === "/about#connect" ||
                router.pathname === "/case-studies#connect"
                  ? "border-b-2 border-b-black"
                  : ""
              }
              onClick={() => handleDropDown()}
            >
              CONTACT ME
            </a>
          </li>
          <li>
            <Link
              href="/case-studies"
              className={
                router.pathname === "/case-studies"
                  ? "border-b-2 border-b-black"
                  : ""
              }
              onClick={() => handleDropDown()}
            >
              CASE STUDIES
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
