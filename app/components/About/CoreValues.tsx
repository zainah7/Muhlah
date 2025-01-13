import React from "react";
import Image from "next/image";
import { trust, arrow, slasa, mautoq } from "@/public/assets/index";

const values = [
  {
    title: "جدير بالثقة",
    description:
      "جدير بالثقة سواء كان الطريق ثقيلًا أو سهلًا، فسنقوم ببناء جسر آمن لعبوره من أجلك",
    image: trust,
  },
  {
    title: "الإبتكار",
    description:
      "نقدم لك تجربة فريدة لتلبية احتياجاتك المالية في أي وقت وفي أي مكان",
    image: arrow,
  },
  {
    title: "السلاسة",
    description:
      "نقوم بإنشاء حلول مالية رقمية لمساعدة الأشخاص على عيش حياة مالية أكثر استقرارًا وأمانًا",
    image: slasa,
  },
  {
    title: "الموثوقية",
    description:
      "نقوم بتمويل جميع عملاء البنك دون الحاجة إلى تحويل الراتب وبموافقة فورية",
    image: mautoq,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 bg-white text-black px-6 md:p-28 ">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          قيمنا الأساسية
        </h2>
        <h3 className="text-center max-w-lg mb-20">
          Tempus id convallis in quis diam risus Tellus. معرف aliquet في
          pulvinar Massa tristique. Bibendum congue arcu sed proin.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-end border p-6 text-right rounded-xl bg-[#FAFEFF]"
            >
              <Image
                src={value.image}
                alt={value.title}
                className="w-12 h-12 border rounded-full p-3 mb-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
