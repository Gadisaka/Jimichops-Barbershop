import React from "react";
import img1 from "@/public/image1.jpg";
import img2 from "@/public/image2.jpg";
import Image from "next/image";

const Ourshop = () => {
  return (
    <div className="bg-[#F4CD54] p-6 md:p-10">
      <h1 className="text-3xl font-bold  text-[#163F39] mb-6">Our Shop</h1>

      {/* Responsive Grid Layout */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {/* Image 1 */}
        <li className="w-full max-w-[420px] h-64 overflow-hidden rounded-lg">
          <Image
            src={img1}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </li>

        {/* Image 2 */}
        <li className="w-full max-w-[420px] h-64 overflow-hidden rounded-lg">
          <Image
            src={img2}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </li>

        {/* Google Map */}
        <li className="w-full max-w-[420px] h-64 overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
            src="https://www.google.com/maps?q=Addis+Ababa,Ethiopia&output=embed"
            allowFullScreen
            title="Our Location"
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default Ourshop;
