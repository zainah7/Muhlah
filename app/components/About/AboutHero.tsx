import React from "react";
import Image from "next/image";
import { aboutbg } from "@/public/assets/index";
export default function AboutHero() {
  return (
    <section className="text-right space-y-6 py-16 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-center gap-7 items-center md:space-x-6">
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <Image
            src={aboutbg}
            alt="Hero"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="p-6 md:p-20 max-w-2xl text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            نحن نقود التكنولوجيا المالية من خلال تقديم حلول تتمحور حول العملاء
          </h1>
          <p className="text-lg">
            نقدم حلولاً مالية رقمية مبتكرة تناسب جميع فئات المجتمع وتلبي جميع
            الاحتياجات المالية المختلفة لعملائها
          </p>
        </div>
      </div>
    </section>
  );
}
