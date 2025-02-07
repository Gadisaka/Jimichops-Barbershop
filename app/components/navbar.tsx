"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import image from "@/public/jimiNav.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

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
    <header className="sticky top-0 left-0 z-50 bg-[#163F39] p-5 lg:shadow-none shadow-md">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={image} alt="Jimi Nav" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 text-[#D9AC1E] items-center font-bold text-xl">
          <li className="bg-[#F4CD54] text-[#0C3B34] cursor-pointer font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform">
            <a
              className=""
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
          </li>
          <li className="hover:text-white transition-colors">
            <a href="#service">Service</a>
          </li>
          <li className="hover:text-white transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white transition-colors  ">
            <a href="#pricing">Pricing</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleClick} className="lg:hidden cursor-pointer z-50">
          <svg
            className="w-8 h-8 text-[#D9AC1E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-5  backdrop-blur-sm border text-[#D9AC1E] w-48  shadow-lg rounded-lg p-4"
          >
            <ul className="flex flex-col gap-4 text-center">
              <li onClick={() => handleClick()}>
                <a href="#service">Service</a>
              </li>
              <li onClick={() => handleClick()}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => handleClick()}>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
