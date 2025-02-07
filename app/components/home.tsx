"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { jimichopsSVG } from "./jimichopsSVG";
import barber from "@/public/barber.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonHover = {
  hover: { scale: 1.1 },
};

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
    <motion.div
      className="flex flex-col lg:flex-row gap-3 justify-between w-full lg:px-10 max-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center w-full lg:w-[45%] h-full justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>{jimichopsSVG}</div>
        <motion.div
          className="lg:flex hidden flex-col bg-[#F4CD54] lg:bg-[#163F39] items-center w-full p-5 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="lg:text-[#F4CD54] text-[#163F39] font-bold text-lg lg:text-3xl w-[300px] lg:w-[500px] text-center">
            Choose your preferred date and time to book your appointment today!
          </p>
          <motion.button
            className="lg:bg-[#F4CD54] bg-[#163F39] flex justify-center items-center font-bold rounded-full text-xl lg:text-2xl w-1/2 py-2  h-fit p-2 lg:p-1 text-[#F4CD54] lg:text-[#163F39]"
            whileHover={buttonHover.hover}
          >
            <a
              data-appointlet-modal
              href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
              style={{ backgroundColor: "#F4CD54" }}
            >
              Book Appointment
            </a>
            <script async defer src="https://js.appointlet.com/"></script>
            <link
              href="https://js.appointlet.com/styles.css"
              rel="stylesheet"
            ></link>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-[45%] flex-col items-center flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={barber} alt="barber" className="w-3/4 lg:w-full" />
        <motion.div
          className="flex lg:hidden flex-col bg-[#F4CD54] lg:bg-[#163F39] items-center w-full p-5 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="lg:text-[#F4CD54] text-[#163F39] font-bold text-lg lg:text-3xl w-[300px] lg:w-[500px] text-center">
            Choose your preferred date and time to book your appointment today!
          </p>
          <motion.button
            className="bg-[#163F39] flex justify-items-center font-bold rounded-2xl text-xl lg:text-2xl w-fit h-fit p-2 lg:p-1 px-4 text-[#F4CD54] lg:text-[#163F39]"
            whileHover={buttonHover.hover}
          >
            <a
              data-appointlet-modal
              href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
              style={{ backgroundColor: "#163F39" }}
            >
              Book Appointment
            </a>
            <script async defer src="https://js.appointlet.com/"></script>
            <link
              href="https://js.appointlet.com/styles.css"
              rel="stylesheet"
            ></link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
