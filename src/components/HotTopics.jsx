"use client";
import React from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";

const HotTopics = () => {
  const topics = [
    "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Label */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="bg-[#FF7300] text-black px-10 py-3 font-bold uppercase flex items-center rounded-l-[10px] [clip-path:polygon(0_0,88%_0,100%_100%,0_100%)]">
            Hot Topics
          </div>
        </div>

        {/* Items Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full">
          {topics.map((text, index) => (
          
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="w-full h-[4px] bg-[#00338D] mb-3"></div>

                <div className="text-[16px] md:text-[16px] text-black opacity-80 leading-relaxed font-semibold mb-6 flex-grow">
                  {text}
                </div>

                <div className="flex justify-end mt-auto pt-4 group-hover:translate-x-3 transition-transform duration-300 px-2">
                  <HiOutlineMinus className="text-xl w-10 h-8" />
                  <RiArrowRightSLine className="-ml-6 w-6 h-8 text-lg font-bold" />
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
