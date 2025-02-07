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
        </div>
        <div className="flex flex-col gap-2 w-[250px]   text-[#163F39]">
          <h1 className="text-white text-2xl font-bold ">Follow Us</h1>
          <button className="flex items-center px-2 max-w-fit rounded-xl bg-[#F4CD54]">
            <FaTiktok /> <p>TikTok</p>
          </button>
          <button className="flex items-center px-2 rounded-xl max-w-fit bg-[#F4CD54]">
            <FaInstagram /> <p> Instagram</p>
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-[#F4CD54]" />
      <div className="flex lg:flex-row w-[250px] flex-col gap-3 lg:w-full justify-between">
        <h1 className="text-[#F4CD54]">JIMICHOPS 2025@copyright</h1>
        <div className="flex gap-5 text-[#F4CD54]">
          <p>Terms and Conditions</p>
          <p>Privacy and Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
