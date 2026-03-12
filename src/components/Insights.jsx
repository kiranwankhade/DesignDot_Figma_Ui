"use client";
import React, { useState } from "react";
import Image from "next/image";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Pre-market Entry",
      content:
        "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
    },
    {
      title: "Market Entry",
      content:
        "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    },
    {
      title: "Operations",
      content:
        "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
    },
    {
      title: "Growth & Expansion",
      content:
        "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    },
  ];

  return (
    <section className="relative w-[95%] m-auto bg-white  overflow-hidden">
      <div className="max-w-screen-3xl mx-auto px-[15px] flex flex-col lg:flex-row justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* INSIGHTS BOX */}
         <div className="w-full sm:w-[230px] h-[160px] sm:h-[180px]  bg-[#EEEEEE] rounded-[28px] flex items-end justify-start p-6">
           <h2 className="font-heading text-[18px] font-semibold leading-snug">
              INSPIRATION & <br /> INSIGHTS
            </h2>
          </div>

          {/* ACCORDION */}
          <div className=" w-full lg:w-[567px]">
            {accordionData.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-4 ${!isActive ? " border-b" : ""} border-gray-300 cursor-pointer`}
                >
                  <h3
                    className={`text-[15px] font-bold mb-2 transition-colors ${
                      isActive ? "text-[#00338D]" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      isActive ? "text-[#00338D]" : "text-gray-600"
                    }`}
                  >
                    {item.content}
                  </p>

                  {isActive && (
                    <div className="w-full h-[3px] bg-[#00338D] mt-4"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* RIGHT SIDE */}
   <div className="w-full lg:w-[50%] flex flex-col sm:flex-row gap-4 lg:gap-6 justify-end items-end lg:h-[550px]">
          
          {/* Card 1 */}
          <div className="relative w-full sm:w-[50%] h-[350px] sm:h-[550px] rounded-[28px] overflow-hidden group">
            
            <Image
              src="/images/coin_image.jpg"
              alt="Pre-Market"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-6 right-6 text-white">
              <h4 className="font-heading text-[18px] font-semibold mb-2">
                Pre-Market
              </h4>
              <p className="text-[12px] leading-relaxed opacity-90">
                Evaluating Supply Chain Readiness Before Committing Capital in
                Emerging Markets
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative w-full sm:w-[20%] h-[350px] sm:h-[550px] rounded-[28px] overflow-hidden group">
            
            <Image
              src="/images/firstDetailsOffice.jpg"
              alt="Operations"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A328C]/90 via-black/40 to-transparent"></div>
           <div className="absolute bottom-6 left-0 right-0 flex justify-center lg:bottom-15">   
              <h4 className="font-heading text-[18px] font-bold text-white tracking-widest rotate-0 sm:rotate-0 lg:rotate-[-90deg]">
                
                Operations
              </h4>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative w-full sm:w-[20%] h-[350px] sm:h-[550px] rounded-[28px] overflow-hidden group">
            
            <Image
              src="/images/verticleMenImage.jpg"
              alt="Growth"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A328C]/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
              
             <h4 className="font-heading text-[18px] font-bold text-white tracking-widest rotate-0 sm:rotate-0 lg:rotate-[-90deg]">
                
                Growth & Expansion
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
