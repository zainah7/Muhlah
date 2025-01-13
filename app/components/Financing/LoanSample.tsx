import React from "react";
import Image from "next/image";
import { arrow } from "@/public/assets/index";

const loanDetails = [
  {
    text: "قد تختلف تكلفة التمويل وفقاً لمبلغ التمويل ومدته والتاريخ الائتماني لكل مستفيد",
  },
  {
    text: "الأرقام المعروضة هي أمثلة توضيحية فقط ولا تعتبر التزاماً أو عرضاً من شركة",
  },
  {
    text: "الرسوم الإدارية 1% من مبلغ التمويل",
  },
];

const LoanSample = () => {
  return (
    <section className="p-8 md:p-16 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          مثال على التمويل الشخصي المصغر
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          معدل الربح السنوي (APR)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-2 border">مبلغ التمويل</th>
              <th className="py-4 px-2 border">مدة التمويل (بالشهر)</th>
              <th className="py-4 px-2 border">معدل النسبة السنوي</th>
              <th className="py-4 px-2 border">مبلغ القسط</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-2 border">30,000 ريال سعودي</td>
                <td className="py-4 px-2 border">12 شهراً</td>
                <td className="py-4 px-2 border">56% (نقطة)</td>
                <td className="py-4 px-2 border">3,100.00 ريال سعودي</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {loanDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-right gap-8 p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <Image src={arrow} alt="arrow" className="mr-4 w-8 h-8" />
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-end p-6 rounded-xl shadow-sm border border-gray-200 mt-6">
        <Image src={arrow} alt="arrow" className="mr-4 w-8 h-8" />
        <p className="text-gray-700">
          رسوم السداد المبكر: تكلفة أجل 3 أشهر من تاريخ إقفال التمويل
        </p>
      </div>
    </section>
  );
};

export default LoanSample;
