"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="section-gap py-20 bg-white text-[#1A2B61] ">
      <div
        className={
          "text-center text-[28px] py-5 space-y-3 border-t-2 border-gray-100 md:mx-64"
        }
      >
        <h1 className="md:text-[48px] text-[28px] font-Bold ">
          الأسئلة الشائعة
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        <div className="1" onClick={() => toggleFaq(1)}>
          <div className="py-3 border p-4">
            <div className="flex justify-between items-center">
              {activeIndex === 1 ? <Minus /> : <Plus />}
              <h1 className=" text-[16px] md:text-[24px] font-medium">
                كيف يتم حساب الربح في حالة السداد المبكر وما هي طريقة الدفع؟
              </h1>
            </div>
            {activeIndex === 1 && (
              <p className=" text-[16px] md:text-[21px] mt-5 text-right">
                كيف يتم حساب الربح في حالة السداد المبكر وما هي طريقة الدفع؟
              </p>
            )}
          </div>
          <div className={"flex-1 h-[1px] bg-[#CCCCCC4D]" + " "} />
        </div>

        <div className="2" onClick={() => toggleFaq(2)}>
          <div className="py-3 border p-4">
            <div className="flex justify-between items-center">
              {activeIndex === 2 ? <Minus /> : <Plus />}
              <h1 className=" text-[16px] md:text-[24px] font-medium">
                هل يمكنني طلب التمويل من التطبيق؟
              </h1>
            </div>
            {activeIndex === 2 && (
              <p className="text-[16px] md:text-[21px] mt-5 text-right">
                أسد وقطر ذلك في الذكور. وعنصر السهولة مجاني. من المتوقع أن يكون
                الواجب المنزلي عبارة عن سلة خميرة أو صينية خبز. لكن ألم الكرامة
                غدا يكره الحكمة للشرب. يقوم Maecenas بالدعاية لتزيين البولفينار.
                ويجب أن تكون أرضًا قذرة.
              </p>
            )}
          </div>
          <div className={"flex-1 h-[1px] bg-[#CCCCCC4D]" + " "} />
        </div>
        <div className="2" onClick={() => toggleFaq(3)}>
          <div className="py-3 border p-4">
            <div className="flex justify-between items-center">
              {activeIndex === 3 ? <Minus /> : <Plus />}
              <h1 className=" text-[16px] md:text-[24px] font-medium">
                كيف يمكنني التقديم؟
              </h1>
            </div>
            {activeIndex === 3 && (
              <p className=" text-[16px] md:text-[21px] mt-5 text-right">
                أسد وقطر ذلك في الذكور. وعنصر السهولة مجاني. من المتوقع أن يكون
                الواجب المنزلي عبارة عن سلة خميرة أو صينية خبز. لكن ألم الكرامة
                غدا يكره الحكمة للشرب. يقوم Maecenas بالدعاية لتزيين البولفينار.
                ويجب أن تكون أرضًا قذرة.
              </p>
            )}
          </div>
          <div className={"flex-1 h-[1px] bg-[#CCCCCC4D]" + " "} />
        </div>
        <div className="2" onClick={() => toggleFaq(4)}>
          <div className="py-3 border p-4">
            <div className="flex justify-between items-center">
              {activeIndex === 4 ? <Minus /> : <Plus />}
              <h1 className=" text-[16px] md:text-[24px] font-medium ">
                ماذا أحتاج حتى أكون مؤهلاً للحصول على قرض؟
              </h1>
            </div>
            {activeIndex === 4 && (
              <p className=" text-[16px] md:text-[21px] mt-5 text-right">
                أسد وقطر ذلك في الذكور. وعنصر السهولة مجاني. من المتوقع أن يكون
                الواجب المنزلي عبارة عن سلة خميرة أو صينية خبز. لكن ألم الكرامة
                غدا يكره الحكمة للشرب. يقوم Maecenas بالدعاية لتزيين البولفينار.
                ويجب أن تكون أرضًا قذرة.
              </p>
            )}
          </div>
          <div className={"flex-1 h-[1px] bg-[#CCCCCC4D]" + " "} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
