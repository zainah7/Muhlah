import React from "react";
import Image from "next/image";
import background from "@/public/assets/images/bg.svg";

const HowItWorks = () => {
  return (
    <section id="howitworks" className="bg-white py-16 text-black">
      <div className="mx-auto px-6 text-center space-y-12 flex flex-col items-center">
        {/* Section Heading */}
        <div>
          <h2 className="text-3xl font-bold">اطلب تمويل</h2>
        </div>
        <div>
          <Image src={background} alt="background" />
        </div>

        {/* Steps Grid with Border Top */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-t-2 border-gray-100 py-8">
          {/* Step 4 */}
          <div className="flex flex-col items-center lg:items-center space-y-4">
            <h3 className="text-xl font-semibold text-[#1A2B61]">
              ٤ سدد على مهل
            </h3>
            <p className="text-sm text-right">بطريقة الدفع المناسبة لك</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center lg:items-center space-y-4">
            <h3 className="text-xl font-semibold text-[#1A2B61]">
              ٣ يتحول لحسابك
            </h3>
            <p className="text-sm text-right">
              أضف حسابك في أي بنك من البنوك المحلية لاستلام تمويلك
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center lg:items-center space-y-4">
            <h3 className="text-xl font-semibold text-[#1A2B61]">
              ٢ اطلب تمويل
            </h3>
            <p className="text-sm text-center">بكل سهولة وبحسبة بسيطة</p>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center lg:items-center space-y-4">
            <h3 className="text-xl font-semibold text-[#1A2B61]">
              ١ حمل التطبيق
            </h3>
            <p className="text-sm text-center">
              تطبيقنا سهل ومتوفر لجميع الأجهزة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
