import React from "react";
import scissor from "@/public/services/scissors-4-svgrepo-com 1.png";
import razor from "@/public/services/razor-barber-svgrepo-com 1.png";
import shaving from "@/public/services/shaving-brush-shaving-svgrepo-com 1.png";
import face from "@/public/services/output-onlinepngtools-removebg-preview 1.png";
import dye from "@/public/services/hair-dye-svgrepo-com 1.png";
import beard from "@/public/services/beard-male-svgrepo-com 1.png";
import ServiceItem from "./serviceItem";

const ServiceItems = [
  {
    id: 1,
    title: "Haircut",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: scissor,
  },
  {
    id: 2,
    title: "Beard Triming",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: razor,
  },
  {
    id: 3,
    title: "Smooth Shave",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: shaving,
  },
  {
    id: 4,
    title: "Hair Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: beard,
  },
  {
    id: 5,
    title: "Hair Coloring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: dye,
  },
  {
    id: 6,

    title: "Face Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit",
    image: face,
  },
];

const Services = () => {
  return (
    <div className="w-full max-h-fit flex flex-col gap-7 p-5 lg:p-11 lg:px-52 bg-[#163F39] lg:bg-[#F4CD54]">
      <h1 className="text-3xl text-[#F4CD54] lg:text-[#163F39] font-bold">
        Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ServiceItems.map((service) => {
          return <ServiceItem data={service} key={service.id} />;
        })}
      </div>
    </div>
  );
};

export default Services;
