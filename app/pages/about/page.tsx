"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutSVG } from "@/app/components/aboutSVG";

const About: React.FC = () => {
  return (
    <motion.div
      id="about"
      className="w-full max-h-fit flex flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-8 gap-4 items-center py-10 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-5 items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold mb-5 text-[#F4CD54]">About Us</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {AboutSVG}
        </motion.div>
        <p className="lg:w-[644px] w-[300px] text-sm my-5 lg:text-xl">
          At JIMICHOPS Barbershop, our skilled barbers deliver precise cuts,
          shaves, and styles, from classic haircuts to modern fades and sculpted
          beards. At JIMICHOPS Barbershop, our skilled barbers deliver precise
          cuts, shaves, and styles, from classic haircuts to modern fades and
          sculpted beards. At JIMICHOPS Barbershop, our skilled barbers deliver
          precise cuts, shaves, and styles.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://drive.google.com/file/d/1k9sq6zVbYaAOjLSW-s1ibt5Rkc4cKl3N/preview"
          className="bg-[#0C3B34] h-[350px] lg:h-[550px] lg:w-[450px] w-[300px] p-5 rounded-lg"
          width="100%"
          height="100%"
          allow="autoplay"
          title="video"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default About;
