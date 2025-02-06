import React from "react";
import Image from "next/image";
import image from "@/public/jimiNav.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky bg-[#163F39] top-0 left-0 z-50 p-5">
      <nav className="bg-none  lg:px-5 flex cursor-pointer items-center justify-between">
        <div>
          {" "}
          <Link href="/">
            <Image src={image} alt="Jimi Nav" />{" "}
          </Link>
        </div>
        <ul className="lg:flex gap-5 text-[#D9AC1E] items-center font-bold text-xl hidden ">
          <li className="bg-[#D9AC1E] flex justify-items-center rounded-2xl w-fit h-fit p-1 px-4 text-[#163F39]">
            Book Appointment
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
