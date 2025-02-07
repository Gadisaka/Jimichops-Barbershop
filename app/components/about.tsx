import React from "react";
import { AboutSVG } from "@/app/components/aboutSVG";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-h-fit flex flex-col lg:flex-row justify-center  text-center lg:text-left lg:gap-8 gap-4 items-center py-10 lg:py-20"
    >
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold mb-5 text-[#F4CD54]">About Us</h1>
        {AboutSVG}
        <p className="lg:w-[644px] w-[300px] text-sm my-5 lg:text-xl ">
          At JIMICHOPS Barbershop, our skilled barbers deliver precise cuts,
          shaves, and styles, from classic haircuts to modern fades and sculpted
          beards.At JIMICHOPS Barbershop, our skilled barbers deliver precise
          cuts, shaves, and styles, from classic haircuts to modern fades and
          sculpted beards.At JIMICHOPS Barbershop, our skilled barbers deliver
          precise cuts, shaves, and styles,
        </p>
      </div>
      <div className="bg-gray-300 h-[350px] lg:h-[550px]  lg:w-[450px] w-[300px] p-5 rounded-lg"></div>
    </div>
  );
};

export default About;
