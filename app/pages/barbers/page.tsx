import React from "react";
import barber2 from "@/public/img1.jpg";
import barber3 from "@/public/img2.jpg";
import BarberCard from "@/app/components/barberCard";

const barbers = [
  {
    name: "Bisrat",
    link: "/barbers/john-doe",
    photo: barber2,
  },
  {
    name: "Alesemunigus",
    link: "/barbers/jane-smith",
    photo: barber2,
  },
  {
    name: "Rahel",
    link: "/barbers/mike-johnson",
    photo: barber3,
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
