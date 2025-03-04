import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface BarberCardProps {
  name: string;
  link: string;
  photo: StaticImageData;
}

const BarberCard = ({ name, link, photo }: BarberCardProps) => {
  return (
    <div className="bg-gradient-to-r w-[300px] from-[#163F39] to-[#021915] text-[#F4CD54] font-bold flex flex-col items-center justify-center gap-4 p-4 rounded-xl relative">
      <div className="relative w-[200px] h-[200px]">
        <Image
          className=" object-cover rounded-xl"
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#163F39] to-transparent opacity-80 rounded-xl"></div>
      </div>
      <h2 className="text-white">{name}</h2>
      <button className="bg-[#F4CD54] rounded-full text-xl px-6 py-1 text-[#163F39]">
        Book{" "}
        <a
          data-appointlet-modal
          href={link}
          style={{ backgroundColor: "#F4CD54" }}
        >
          Book Appointment with {name}
        </a>
        <script async defer src="https://js.appointlet.com/"></script>
        <link
          href="https://js.appointlet.com/styles.css"
          rel="stylesheet"
        ></link>
      </button>
    </div>
  );
};

export default BarberCard;
