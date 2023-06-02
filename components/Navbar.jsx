import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt1 } from "react-icons/Hi";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  console.log(router.asPath);

  const handleDropDown = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full fixed bg-black/80 py-5 z-50">
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
              <HiOutlineMenuAlt2 size={30} />
            ) : (
              <HiOutlineMenuAlt1 size={30} />
            )}
          </div>
        </div>
        <ul
          className={
            nav
              ? "flex flex-col opacity-75 text-3xl font-normal w-full h-full items-center justify-around bg-black fixed top-0 left-0"
              : "flex z-30 flex-col opacity-75 text-3xl font-normal w-full h-full items-center justify-around bg-black fixed left-[-200vw]"
          }
        >
          <li className="mr-5">
            <Link
              href="/"
              className={router.pathname === "/" ? "active" : ""}
              onClick={() => handleDropDown()}
            >
              HOME
            </Link>
          </li>
          <li className="mr-5">
            <Link
              href="/about"
              className={router.pathname === "/about" ? "active" : ""}
              onClick={() => handleDropDown()}
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
              onClick={() => handleDropDown()}
            >
              CONTACT ME
            </a>
          </li>
          <li>
            <Link
              href="/case-studies"
              className={router.pathname === "/case-studies" ? "active" : ""}
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
