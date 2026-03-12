"use client";

import Image from "next/image";
import { HiOutlineMinus } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

export default function Slider() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-[#143F8F]">
      <div className="flex flex-col md:block">
        <div
          className="text-white z-20 px-6 md:absolute md:left-[5%] md:top-[25%] md:max-w-xl"
        >
          <p className="font-bold text-xs uppercase opacity-80 mb-2">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EMPOWERED{" "}
            <span className="underline underline-offset-8">WORKPLACES</span>
          </h1>

          <p className="text-sm md:w-[400px] opacity-80 leading-relaxed mb-10">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button className="bg-[#FF7300] text-black px-8 pl-2 py-3 font-bold uppercase flex items-center rounded-l-[10px] [clip-path:polygon(0_0,88%_0,100%_100%,0_100%)]">
            <span className="flex items-center px-2">
              <HiOutlineMinus className="text-xl w-8 h-6 font-bold" />
              <RiArrowRightSLine className="-ml-4 mt-0.5 text-lg font-bold" />
            </span>
            LETS CONNECT
          </button>

          <p className="text-xs font-semibold opacity-80 mt-15">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND
            THE WORLD
          </p>
        </div>

        {/* Image  Overlay*/}
        <div
          className="
          relative mx-auto
          w-[300px] h-[300px]
          md:absolute
          md:top-[-42%]
          md:left-[39%]
          md:w-[56vw]
          md:h-[125vh]
          md:rotate-[40.03deg]
          rounded-[162px]
          overflow-hidden
          "
        >
          <div className="relative w-full h-full md:-rotate-[40.03deg] scale-125">
            <Image
              src="/images/firstDetailsOffice.jpg"
              alt="Office"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Curved Image Right */}
      <div
        className="relative  flex flex-col items-center gap-4 mt-10
                  md:absolute md:bottom-10 md:right-10 md:flex-row md:items-center md:gap-2
                  text-white z-20"
      >
        {/* Circle Avatar */}
        <div className="flex -space-x-6">
          <Image
            src="/images/Profile1.png"
            width={50}
            height={50}
            alt="Profile1"
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/Profile2.png"
            width={50}
            height={50}
            alt="Profile2"
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/Profile3.png"
            width={50}
            height={50}
            alt="Profile3"
            className="rounded-full border-2 border-white"
          />
          <span className="font-heading bg-orange-500 px-2 py-4 rounded-full border-2 border-white text-[12px] font-semibold">
            MORE
          </span>
        </div>

        {/* Side  */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold flex items-center justify-center md:justify-start">
            250 <FaPlus className="ml-2 text-sm" />
          </p>
          <p className="text-[10px] w-[70px]">Enjoy Working with us</p>
        </div>
      </div>
    </section>
  );
}
