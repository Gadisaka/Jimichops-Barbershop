import React from "react";
import img1 from "@/public/image1.jpg";
import img2 from "@/public/image2.jpg";
import Image from "next/image";

const Ourshop = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Image src={img1} alt="img" />{" "}
        </li>
        <li>
          {" "}
          <Image src={img2} alt="img" />{" "}
        </li>
        <li>
          {" "}
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps?q=Addis+Ababa,Ethiopia&output=embed"
            allowFullScreen
            title="Google Maps location of Addis Ababa, Ethiopia"
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default Ourshop;
