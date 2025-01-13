import React from "react";
import Image from "next/image";
import { icon, Contentbg } from "@/public/assets/index";

const CreditTips = () => {
  return (
    <section className="bg-white text-black p-8 md:p-16">
      <div className="text-right">
        <h2 className="text-4xl font-semibold">نصائح ائتمانية</h2>
        <p className="text-gray-600 text-lg">
          حقق أفضل سجل ائتماني جيد باتباع النصائح التالية
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 pl-24">
          <Image src={Contentbg} alt="Content background" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-20">
          <div className="flex justify-end w-full">
            <div className="flex gap-4">
              <div className="text-right">
                <h3 className="font-semibold text-xl">الالتزام بالسداد</h3>
                <p className="text-gray-600 text-base">
                  سدد الأقساط المستحقة كاملة في أوقاتها.
                </p>
              </div>
              <Image src={icon} alt="Icon" className="w-8 h-8" />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex gap-4">
              <div className="text-right">
                <h3 className="font-semibold text-xl">إدارة بطاقات الائتمان</h3>
                <p className="text-gray-600 text-base">
                  تعدد البطاقات الائتمانية قد يزيد من صعوبة الالتزام بالسداد.
                </p>
              </div>
              <Image src={icon} alt="Icon" className="w-8 h-8" />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex gap-4">
              <div className="text-right">
                <h3 className="font-semibold text-xl">الإفصاح عن التزاماتك</h3>
                <p className="text-gray-600 text-base">
                  مشاركتك لتفاصيل التزاماتك المالية هو أمر ضروري لإدارة ميزانيتك
                  بشكل فعال.
                </p>
              </div>
              <Image src={icon} alt="Icon" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditTips;
