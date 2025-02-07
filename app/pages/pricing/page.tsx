"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const pricingData = [
  {
    id: 1,
    name: "Hair Cut",
    price: "ETB 400",
    description: "A professional haircut tailored to your style preference.",
  },
  {
    id: 2,
    name: "Trim",
    price: "ETB 200",
    description: "A quick trim to maintain your current hairstyle.",
  },
  {
    id: 3,
    name: "Child Haircut",
    price: "ETB 300",
    description: "A fun and gentle haircut service for children.",
  },
  {
    id: 4,
    name: "Color",
    price: "ETB 300",
    description: "Hair coloring service with high-quality dye products.",
  },
  {
    id: 5,
    name: "Face Treatment",
    price: "ETB 300",
    description: "A rejuvenating facial treatment to refresh your skin.",
  },
  {
    id: 6,
    name: "Hair Treatment",
    price: "ETB 300",
    description: "Nourishing hair treatment for healthy, vibrant hair.",
  },
  {
    id: 7,
    name: "Hair Wash",
    price: "ETB 150",
    description: "A thorough and relaxing hair washing experience.",
  },
];

const Pricing = () => {
  return (
    <motion.div
      className="bg-[#163F39] text-[#F4CD54] py-12 px-4"
      id="pricing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Pricing
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Column - First 3 services */}
        <div className="flex-1 space-y-6">
          {pricingData.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              className="text-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-bold">
                {item.name}{" "}
                <span className="inline-block w-40 border-dotted border-b border-[#F4CD54]"></span>{" "}
                {item.price}
              </p>
              <p className="text-sm text-[#F4CD54]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vertical Divider */}
        <motion.div
          className="hidden md:block w-[2px] z-20 h-full bg-[#F4CD54]"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Right Column - Last 2 services & Button */}
        <div className="flex-1 space-y-6">
          {pricingData.slice(4).map((item, index) => (
            <motion.div
              key={item.id}
              className="text-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-bold">
                {item.name}{" "}
                <span className="inline-block w-40 border-dotted border-b border-[#F4CD54]"></span>{" "}
                {item.price}
              </p>
              <p className="text-sm text-[#F4CD54]">{item.description}</p>
            </motion.div>
          ))}

          {/* Appointment Button */}
          <motion.div
            className="mt-6 flex justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-[#F4CD54] text-[#0C3B34] font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <a
                className=""
                data-appointlet-modal
                href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
                style={{ backgroundColor: "#F4CD54" }}
              >
                Book your Appointment Now
              </a>
              <script async defer src="https://js.appointlet.com/"></script>
              <link
                href="https://js.appointlet.com/styles.css"
                rel="stylesheet"
              ></link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
