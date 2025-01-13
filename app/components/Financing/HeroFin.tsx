import React from "react";
import Image from "next/image";
import { digitalwallet } from "@/public/assets/index";

const Price = () => {
  return (
    <section className="bg-white text-black px-4 sm:px-6 lg:px-12 xl:px-24 py-8 md:py-16 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={digitalwallet}
            alt="Digital wallet illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-right">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            أسعار المنتجات التمويلية من مهلة
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#525866] mt-4">
            تعرف على الأسعار والعمليات الحسابية المرتبطة بمنتجات التمويل
            <br />
            المتوفرة لدينا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Price;
