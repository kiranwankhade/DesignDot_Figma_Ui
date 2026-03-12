"use client";
import React from "react";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
export default function AboutFirm() {
  return (
    <section className="relative w-[95%] m-auto py-10 overflow-hidden ">
      <div className="max-w-screen-3xl mx-auto px-[15px] flex flex-col lg:flex-row gap-16">
        {/* LEFT SECTION */}
        <div className="relative w-full lg:w-[60%]">
          <div className="absolute left-0 top-0 w-[650px] md:w-[650px] lg:w-[800px] h-[400px] md:h-[500px] lg:h-[650px] pointer-events-none">
            <Image
              src="/images/map.jpg"
              alt="map"
              fill
              className="object-cover opacity-100"
            />
          </div>
          <div className="relative z-10 ">
            <div className="flex items-start gap-8 mb-12 ">
              {/* ABOUT BOX */}
              <div className="w-[224px] h-[218px] bg-[#EEEEEE] rounded-[28px] flex items-end justify-start p-6 ">
                <h2 className="font-heading text-[20px] font-semibold leading-snug">
                  ABOUT <br /> FIRM
                </h2>
              </div>
              {/* DESCRIPTION */}
              <div className="flex flex-2 flex-col gap-4">
                <h3 className="text-[22px]  ">HLS Global Group</h3>
                <p
                  className="text-[16px] text-gray-600 max-w-[450px] md:max-w-[515px] lg:max-w-[720px] xl:max-w-[820px] 2xl:max-w-[900px] text-justify text-[#333333] "
                >
                  is an international accounting and business advisory firm with
                  a focus on providing superior services in the areas of
                  accounting, tax, audit, advisory, and consulting. Founded in
                  1990, we pride ourselves in delivering the highest levels of
                  quality and customer service while remaining cost-effective.
                  We have grown to more than 250 professionals serving clients
                  in the United States, Japan, Mexico, India, Germany, and UAE.
                  While catering to the business requirements of Japanese
                  subsidiaries operating in the United States, Mexico, India,
                  Germany, and UAE, we also provide comprehensive solutions to
                  non-Japanese multinational companies operating in Japan.
                </p>
                <div className="max-w-[600px] mt-4">
                  {/* FIRST ROW */}
                  <div className="grid grid-cols-2 gap-12 pb-8">
                    <div>
                      <p className="text-[36px] font-bold flex items-center">
                        250 <FaPlus className="ml-1 text-sm" />
                      </p>
                      <p className="text-[14px] text-gray-600">
                        Professional Staff <br /> Members Globally
                      </p>
                    </div>
                    <div>
                      <p className="text-[36px] font-bold flex items-center">
                        1000 <FaPlus className="ml-1 text-sm" />
                      </p>
                      <p className="text-[14px] text-gray-600">
                        Clients in the HLS <br /> Global Network
                      </p>
                    </div>
                  </div>
                  {/* BLUE LINE */}
                  <div className="w-full h-[2px] bg-[#0A2A66] mb-8"></div>
                  {/* SECOND ROW */}
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <p className="text-[36px] font-bold flex items-center">
                        35 <FaPlus className="ml-1 text-sm" />
                      </p>
                      <p className="text-[14px] text-gray-600">
                        Years of Experience <br /> Connecting Japan <br /> and
                        the World
                      </p>
                    </div>
                    <div>
                      <p className="text-[36px] font-bold flex items-center">
                        15 <FaPlus className="ml-1 text-sm" />
                      </p>
                      <p className="text-[14px] text-gray-600">
                        Countries Covered <br /> With Our Alliance <br />
                        Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[45%] flex flex-col items-end">
          <div className="flex items-center bg-[#FF7D00] px-6 py-2 rounded-full text-black mb-6">
            <span className="text-[11px] font-bold mr-6 uppercase">
              WE ARE LOCATED
            </span>
            <span className="text-[12px] font-bold flex items-center gap-2">
              INDIA <BiSolidDownArrow className="text-[10px]" />
            </span>
          </div>
          <div className="relative w-full max-w-[712px] h-[350px] md:h-[420px] lg:h-[520px] rounded-[26px] overflow-hidden">
            <Image
              src="/images/buildingImage.png"
              alt="building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
