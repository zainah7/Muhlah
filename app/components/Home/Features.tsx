import React from "react";
import Image from "next/image";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  FinanceInvestment,
} from "@/public/assets/index";
const Features = () => {
  return (
    <section id="features" className="bg-white py-16 text-black font-sans">
      <div className="mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#1A2B61] mb-4">
            تمويل سريع وسهل وموثّق
          </h1>
          <div className="md:max-w-[650px]">
            <h3 className="text-lg">
              مهلة هو تطبيق يمكّنك من الحصول على القروض بشكل فوري. يتيح لك تجربة
              رقمية بالكامل، حيث يهدف إلى توفير الخدمات المالية والشمول المالي
              لمختلف فئات المجتمع.
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-20 justify-center gap-10 items-center">
          <div>
            <div className="flex flex-col items-end">
              <h2 className="text-5xl font-bold mb-12 text-[#1A2B61]">
                ما يميزنا
              </h2>
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Feature 1 */}
              <div className="flex flex-col md:items-end items-center space-y-4 text-center">
                <Image
                  src={feature1}
                  alt="تمويل رقمي فوري"
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-semibold">تمويل رقمي فوري</h3>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:items-end items-center space-y-4 md:text-center">
                <Image src={feature2} alt="بدون كفيل" className="w-10 h-10" />
                <h3 className="text-xl font-semibold">بدون كفيل</h3>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:items-end items-center space-y-4 text-center">
                <Image
                  src={feature3}
                  alt="متوافق مع أحكام الشريعة"
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-semibold">
                  متوافق مع أحكام الشريعة
                </h3>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:items-end items-center space-y-4 text-center">
                <Image
                  src={feature4}
                  alt="حاسبة متقدمة"
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-semibold">حاسبة متقدمة</h3>
              </div>
            </div>
          </div>
          <div>
            <Image src={FinanceInvestment} alt="FinanceInvestment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
