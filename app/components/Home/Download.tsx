import React from "react";
import Image from "next/image";
import { appstore, googlePlay } from "@/public/assets/index";

const Download = () => {
  return (
    <div className="bg-white">
      {/* App Download Section */}
      <div className="flex flex-col items-center md:mx-24 space-y-5 sm:space-y-7 bg-gradient-to-r from-[#426494] to-[#426494] py-16 md:py-32 md:rounded-2xl md:m-16">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center">
          حمل التطبيق ولبي احتياجك
        </h3>
        <div className="flex flex-col gap-6 items-center   md:flex-row space-x-3 rtl:space-x-reverse">
          <a href="https://www.apple.com/app-store/" target="_blank">
            <Image src={appstore} alt="App Store" className="w-24 md:w-28" />
          </a>
          <a href="https://play.google.com/" target="_blank">
            <Image
              src={googlePlay}
              alt="Google Play"
              className="w-[100px] md:w-32"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
