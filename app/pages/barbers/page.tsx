import React from "react";
import barber1 from "@/public/barbers/photo_2024-06-19_09-03-12.jpg";
import BarberCard from "@/app/components/barberCard";

const barbers = [
  {
    name: "John Doe",
    link: "/barbers/john-doe",
    photo: barber1,
  },
  {
    name: "Jane Smith",
    link: "/barbers/jane-smith",
    photo: barber1,
  },
  {
    name: "Mike Johnson",
    link: "/barbers/mike-johnson",
    photo: barber1,
  },
  {
    name: "Emily Davis",
    link: "/barbers/emily-davis",
    photo: barber1,
  },
  {
    name: "Chris Brown",
    link: "/barbers/chris-brown",
    photo: barber1,
  },
];

const Barbers = () => {
  return (
    <div className="bg-[#F4CD54] max-h-fit w-full flex flex-col items-center text-[#163F39] text-4xl font-bold py-6">
      {/* <hr className="border-[#163F39]" /> */}
      <div className="justify-center flex items-center py-6">
        {" "}
        <h1>Barbers </h1>{" "}
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 w-fit justify-items-center  gap-10">
        {barbers.map((barber) => {
          return (
            <BarberCard
              key={barber.name}
              name={barber.name}
              link={barber.link}
              photo={barber.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Barbers;
