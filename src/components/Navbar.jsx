import { React, useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { assets } from "../assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <div
        className={`${
          sticky ? " transition-[0.05s] duration-500" : ""
        }  container mx-auto flex justify-between items-center py-2 px-6 md:px-20 lg:px-32 bg-transparent`}
      >
        <img src={assets.logo} className="w-[80px]" alt="logo" />
        <ul className="hidden md:flex gap-7 text-black text-lg font-bold">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Features" className="cursor-pointer hover:text-gray-400">
            Features
          </a>
          <a href="#Reviews" className="cursor-pointer hover:text-gray-400">
            Reviews
          </a>
        </ul>
        <button className="hidden md:block bg-orange-500 text-white font-semibold px-8 py-2 rounded-full">
          Pre-Order Now
        </button>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
          alt=""
        />
        <RiMenu3Fill
          className="md:hidden w-7 cursor-pointer text-4xl"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <RiCloseLargeFill
            className="text-4xl"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Home"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Features"
            className="px-4 py-2 rounded-full inline-block"
          >
            Features
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Reviews"
            className="px-4 py-2 rounded-full inline-block"
          >
            Reviews
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
