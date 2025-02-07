import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

export interface ServiceProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

interface ServiceItemProps {
  data: ServiceProps;
}

const ServiceItem = ({ data }: ServiceItemProps) => {
  return (
    <div className="flex gap-5 ">
      <div className="bg-[#163F39] relative w-[80px] lg:w-[110px] flex h-[60px] lg:h-[90px] lg:p-6 p-3 rounded-lg">
        <div className="border-2 absolute bg-none rounded-lg top-1 left-1 self-center border-[#F4CD54] w-[90%] h-[90%] "></div>
        <Image src={data.image} alt="title" />{" "}
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-[#163F39] text-[#F4CD54]">
          {data.title}
        </h1>
        <p className="lg:text-[#163F39] text-[#F4CD54]">{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
