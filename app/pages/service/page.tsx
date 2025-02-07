"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import scissor from "@/public/services/scissors-4-svgrepo-com 1.png";
import razor from "@/public/services/razor-barber-svgrepo-com 1.png";
import shaving from "@/public/services/shaving-brush-shaving-svgrepo-com 1.png";
import face from "@/public/services/output-onlinepngtools-removebg-preview 1.png";
import dye from "@/public/services/hair-dye-svgrepo-com 1.png";
import beard from "@/public/services/beard-male-svgrepo-com 1.png";
import ServiceItem, { ServiceProps } from "@/app/components/serviceItem";

const ServiceItems: ServiceProps[] = [
  {
    id: 1,
    title: "Haircut",
    description:
      "A stylish and professional haircut tailored to suit your facial structure and preferences.",
    image: scissor,
  },
  {
    id: 2,
    title: "Beard Trimming",
    description:
      "Keep your beard neat and well-groomed with precise trimming and shaping.",
    image: razor,
  },
  {
    id: 3,
    title: "Smooth Shave",
    description:
      "Experience a clean and comfortable shave for a fresh, smooth look.",
    image: shaving,
  },
  {
    id: 4,
    title: "Hair Treatment",
    description:
      "Revitalize your hair with nourishing treatments that restore moisture and shine.",
    image: beard,
  },
  {
    id: 5,
    title: "Hair Coloring",
    description:
      "Enhance your style with vibrant and long-lasting hair color options.",
    image: dye,
  },
  {
    id: 6,
    title: "Face Treatment",
    description:
      "Rejuvenate your skin with a deep-cleansing and refreshing face treatment.",
    image: face,
  },
];

const Services: React.FC = () => {
  return (
    <motion.div
      className="w-full max-h-fit flex flex-col gap-7 p-5 lg:p-11 lg:px-52 bg-[#163F39] lg:bg-[#F4CD54]"
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl text-[#F4CD54] lg:text-[#163F39] font-bold">
        Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ServiceItems.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceItem data={service} />
            <hr className="my-3 border-t-2 border-[#F4CD54] block lg:hidden" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
