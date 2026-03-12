import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-[0px] sm:px-[0px] md:px-[25px] lg:px-[40px] flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/demo_icon.png"
            width={89}
            height={89}
            alt="logo"
          />
        </div>

        <nav className="hidden lg:flex flex-1 justify-center gap-10 text-[16px] font-bold text-[#333333] ml-45">
          <a href="#">WHO WE SERVE</a>
          <a href="#">SOLUTIONS</a>
          <a href="#">RESOURCES</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className="flex items-center gap-8 flex-shrink-0">
          <span className="text-xl cursor-pointer">
            <FiSearch className="text-[25px] font-bold" />
          </span>

          <div className="flex items-center gap-[6px]cursor-pointer text-[16px] font-bold text-[#333333] gap-2">
            <span>IND</span>
            <BiSolidDownArrow className="text-[#0E2134] text-[13.32px] mt-[2px]" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-[16px] font-bold text-[#333333] gap-2">
            <span>ENGLISH</span>
            <BiSolidDownArrow className="text-[#0E2134] text-[13.32px] mt-[2px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
