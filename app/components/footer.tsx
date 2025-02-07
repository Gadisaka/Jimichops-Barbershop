import React from "react";
import image from "@/public/jimiNav.png";
import Image from "next/image";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-40 flex flex-col justify-center items-center gap-5 py-12 w-full">
      <div className="flex lg:flex-row flex-col gap-3 items-center w-full justify-between ">
        <div className="flex flex-col gap-3">
          <Image src={image} alt="jimichop" />
          <p className="w-[250px] text-lg text-[#F4CD54]">
            Choose your preferred date and time to book your appointment today!
          </p>
        </div>
        <div className="w-[250px] lg:w-fit flex flex-col">
          <h1 className="text-2xl font-bold">Opening Hours</h1>
          <p className="text-xl font-bold text-[#F4CD54]">
            Sunday-Sunday 2:00AM-2:00PM LT
          </p>
          <p className="text-xl font-bold text-[#F4CD54] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                clipRule="evenodd"
              />
            </svg>
            ሰሚት ፍየል ቤት ከልክነሽ ክትፎ ፊትለፊት ብርሃን ባንክ ያለበት ህንፃ 2ተኛ ፎቅ
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[250px]   text-[#163F39]">
          <h1 className="text-white text-2xl font-bold ">Follow Us</h1>
          <a
            className="flex items-center gap-2 px-2 max-w-fit rounded-xl bg-[#F4CD54]"
            href="https://www.tiktok.com/@jimichops_barbershop?_t=ZM-8ti9lG3ihok&_r=1"
          >
            <FaTiktok /> <p>TikTok</p>
          </a>
          <a
            className="flex items-center gap-2 px-2 rounded-xl max-w-fit bg-[#F4CD54]"
            href="https://www.instagram.com/jimichops_barbershop?igsh=MWF5bTh5eGNtcDZjdw%3D%3D&utm_source=qr"
          >
            <FaInstagram /> <p> Instagram</p>
          </a>
        </div>
      </div>
      <hr className="border-t-2 border-[#F4CD54]" />
      <div className="flex lg:flex-row w-[250px] flex-col gap-3 lg:w-full justify-center">
        <h1 className="text-[#F4CD54]">JIMICHOPS 2025@copyright</h1>
        <div className="flex gap-5 text-[#F4CD54]">
          <a href="https://www.gadisa.software" className="text-blue-500">
            Developed By gadisa.software
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
