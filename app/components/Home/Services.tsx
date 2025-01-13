import React from "react";
import Image from "next/image";
import ServicesBg from "@/public/assets/images/ServicesBg.svg";

const Services = () => {
  return (
    <section id="services" className="bg-white text-gray-800 py-8 md:py-14">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 md:space-x-reverse mx-auto px-6 md:px-12 text-right">
        {/* Image Section */}
        <div className="flex justify-center md:flex-none w-full md:w-1/2">
          <Image
            src={ServicesBg}
            alt="Services Background"
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[33rem]"
          />
        </div>
        {/* Section Heading */}
        <div className="w-full md:w-1/2 space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            خدماتنا
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            حلول تمويلية استهلاكية نقدية ورقمية بالكامل، بكل سهولة وسرعة
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
