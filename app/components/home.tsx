"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jimichopsSVG } from "./jimichopsSVG";
import barber from "@/public/barber.png";

const Main = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Prevents SSR
    const script = document.createElement("script");
    script.src = "https://js.appointlet.com/";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-3 justify-between w-full lg:px-10 max-h-screen s overflow-hidden">
      <div className="flex flex-col  items-center w-full lg:w-[45%] h-full justify-center">
        {/* <Image
          src={image}
          alt="Jimichops Barbershop"
          className="w-3/4 lg:w-full"
        /> */}
        <div>{jimichopsSVG}</div>
        <div className="lg:flex hidden flex-col bg-[#F4CD54]  lg:bg-[#163F39] items-center w-full p-5 gap-5">
          <p className="lg:text-[#F4CD54] text-[#163F39] font-bold text-lg lg:text-3xl w-[300px] lg:w-[500px] text-center">
            Choose your preferred date and time to book your appointment today!
          </p>
          <button className="lg:bg-[#F4CD54] bg-[#163F39] flex justify-items-center font-bold rounded-2xl text-xl lg:text-2xl w-fit h-fit p-2 lg:p-1 px-4 text-[#F4CD54] lg:text-[#163F39]">
            <a
              className=""
              data-appointlet-modal
              href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
              style={{ backgroundColor: "#F4CD54" }}
            >
              book appointment
            </a>
            <script async defer src="https://js.appointlet.com/"></script>
            <link
              href="https://js.appointlet.com/styles.css"
              rel="stylesheet"
            ></link>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[45%]  flex-col items-center flex justify-center">
        <Image src={barber} alt="barber" className="w-3/4 lg:w-full" />
        <div className="flex lg:hidden flex-col bg-[#F4CD54]  lg:bg-[#163F39] items-center w-full p-5 gap-5">
          <p className="lg:text-[#F4CD54] text-[#163F39] font-bold text-lg lg:text-3xl w-[300px] lg:w-[500px] text-center">
            Choose your preferred date and time to book your appointment today!
          </p>
          <button className="lg:bg-[#F4CD54] bg-[#163F39] flex justify-items-center font-bold rounded-2xl text-xl lg:text-2xl w-fit h-fit p-2 lg:p-1 px-4 text-[#F4CD54] lg:text-[#163F39]">
            <a
              className="appointlet-button"
              data-appointlet-modal
              href="https://appt.link/book-at-jimichops-RRolGdTP"
              style={{ backgroundColor: "#1e9bff" }}
            >
              Schedule a time
            </a>
            <script async defer src="https://js.appointlet.com/"></script>
            <link
              href="https://js.appointlet.com/styles.css"
              rel="stylesheet"
            ></link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
