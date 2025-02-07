import React from "react";

const pricingData = [
  { id: 1, name: "Hair Cut", price: "ETB 400" },
  { id: 2, name: "Lineup Cut", price: "ETB 400" },
  { id: 3, name: "Facial Hair Lineup", price: "ETB 400" },
  { id: 4, name: "Clean Up", price: "ETB 400" },
  { id: 5, name: "All In One", price: "ETB 400" },
];

const Pricing = () => {
  return (
    <div className="bg-[#163F39] text-[#F4CD54] py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>

      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
        id="pricing"
      >
        {/* Left Column - First 3 services */}
        <div className="flex-1 space-y-6">
          {pricingData.slice(0, 3).map((item) => (
            <div key={item.id} className="text-lg">
              <p className="font-bold">
                {item.name}{" "}
                <span className="inline-block w-40 border-dotted border-b border-[#F4CD54]"></span>{" "}
                {item.price}
              </p>
              <p className="text-sm text-[#F4CD54]">
                Lorem ipsum is dummy text of the printing and typesetting
                industry. Lorem Ipsum.
              </p>
            </div>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] z-20 h-full bg-[#F4CD54]"></div>

        {/* Right Column - Last 2 services & Button */}
        <div className="flex-1 space-y-6">
          {pricingData.slice(3).map((item) => (
            <div key={item.id} className="text-lg">
              <p className="font-bold">
                {item.name}{" "}
                <span className="inline-block w-40 border-dotted border-b border-[#F4CD54]"></span>{" "}
                {item.price}
              </p>
              <p className="text-sm text-[#F4CD54]">
                Lorem ipsum is dummy text of the printing and typesetting
                industry. Lorem Ipsum.
              </p>
            </div>
          ))}

          {/* Appointment Button */}
          <div className="mt-6 flex justify-start">
            <button className="bg-[#F4CD54] text-[#0C3B34] font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform">
              Book your Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
