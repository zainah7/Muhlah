import React from "react";
import Image from "next/image";
import { herobg, appstore, googlePlay } from "@/public/assets/index";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-[#4285F4] text-white p-6 md:p-20 font-sans min-h-screen">
      <div className="mx-auto flex flex-col-reverse md:flex-row justify-between space-y-6 md:space-y-0 px-6 md:px-36">
        {/* Hero Image */}
        <div className="flex justify-center py-4 mt-10">
          <Image src={herobg} alt="hero bg" className="w-64 md:w-[32rem]" />
        </div>
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl space-y-7 md:space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-7xl font-bold leading-snug text-right">
            تمويل استهلاكي مصغّر.. على مهلك
          </h1>
          <p className="text-sm md:text-lg text-[#cdddd5] text-right">
            تمويل استهلاكي فوري بتجربة تقنية
          </p>
          <div className="flex justify-center md:justify-end gap-4 rtl:space-x-reverse">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="inline-block"
            >
              <Image src={appstore} alt="App Store" className="w-28 md:w-40" />
            </a>
            <a
              href="https://play.google.com/"
              className="inline-block"
              target="_blank"
            >
              <Image
                src={googlePlay}
                alt="Google Play"
                className="w-32 md:w-44"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
