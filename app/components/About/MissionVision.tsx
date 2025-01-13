import React from "react";
import Image from "next/image";
import { vision } from "@/public/assets/index";
export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
        <div className="text-center md:text-right md:max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-8">
            <span className=" border-b py-4">الرسالة </span>
            والرؤية لدينا
          </h2>
          <p className="text-lg md:text-xl max-w-xs md:max-w-3xl mx-4 md:mx-0">
            الوضع داكن أو فاتح بشكل عام، القوالب المضمنة قبل 10 مع تشغيل صفحة
            النتائج أو التخطيطات التي تهبط إلى المفضلة، ويمكنك تكوينها بسرعة
            لعناصر تستجيب لعشرات المطابقة والمزج .رد فعل أصلي مدمج . كتل المحتوى
            القابلة للتكديس للإنتاج الجاهز للمكتبة هي Stacks" .Kit eCommerce
            :Stacks ,Kit Portfolio :Stacks ,Kit Page Landing :Stacks :products .
            من سلسلة الأكوام
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src={vision}
            alt="vision"
            className="w-full md:w-auto max-w-xs md:max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
