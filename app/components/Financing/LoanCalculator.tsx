import React from "react";

export default function LoanCalculatorSection() {
  return (
    <section className="bg-white text-black  p-6 ">
      <div className="flex flex-col lg:flex-row gap-6 rounded-2xl shadow-lg border p-20">
        {/* Left Column: Calculation Summary */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 border rounded-xl">
          <div className="flex justify-between">
            <div className="text-base sm:text-lg mb-2 text-left space-y-3 sm:space-y-5">
              <p>%41{"{{ نقطة }}"} 74</p>
              <p>٣٤.٥٠ ريال سعودي</p>
              <p> 48{"{{نقطة}}"}242</p>
              <p>3,202.80 ريال سعودي</p>
            </div>

            <div className="text-base sm:text-lg mb-2 text-right space-y-3 sm:space-y-5">
              <p>معدل النسبة السنوي</p>
              <p>الرسوم الإدارية</p>
              <p>التكلفة الإجمالية</p>
              <p>إجمالي مبلغ السداد</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-900 text-white text-center py-3 px-6 sm:py-4 sm:px-10 rounded-xl mt-4">
              <p className="text-sm sm:text-base">القسط الشهري هو</p>
              <p className="text-2xl sm:text-3xl font-bold">1,068 ريال سعودي</p>
              <p className="text-xs sm:text-sm mt-2">
                قد يضع معدل الفائدة السنوية وفقاً للمبلغ وفترة الاستحقاق كما أنه
                يتبع السجل الائتماني لكل عميل.
              </p>
            </div>
            <span className="text-center text-sm sm:text-base">
              * تطبق الشروط والأحكام
            </span>
          </div>
        </div>

        {/* Right Column: Input Controls */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <p className="font-medium mb-2">نوع العميل</p>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="border px-4 sm:px-8 py-1 rounded-md">
                <label className="flex items-center gap-x-2">
                  <span>مقيم</span>
                  <input type="radio" name="clientType" />
                </label>
              </div>
              <div className="border px-4 sm:px-8 py-1 rounded-md">
                <label className="flex items-center gap-x-2">
                  <span>مواطن</span>
                  <input type="radio" name="clientType" />
                </label>
              </div>
            </div>
          </div>

          {/* Loan Amount */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="block mb-2 font-medium text-sm sm:text-base">
                3,000.00 ريال سعودي
              </label>
              <label className="block mb-2 font-medium text-sm sm:text-base">
                مبلغ التمويل المطلوب
              </label>
            </div>
            <input type="range" min="1000" max="5000" className="w-full" />
            <div className="flex justify-between text-xs sm:text-sm mt-1">
              <span>5,000 ريال سعودي</span>
              <span>1,000 ريال سعودي</span>
            </div>
          </div>

          {/* Duration */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="block mb-2 font-medium text-sm sm:text-base">
                6 أشهر
              </label>
              <label className="block mb-2 font-medium text-sm sm:text-base">
                المدة
              </label>
            </div>
            <input type="range" min="6" max="36" step="6" className="w-full" />
            <div className="flex justify-between text-xs sm:text-sm mt-1">
              <span>6 أشهر</span>
              <span>شهر</span>
            </div>
          </div>

          {/* Monthly Income */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="block mb-2 font-medium text-sm sm:text-base">
                15,000.00 ريال سعودي
              </label>
              <label className="block mb-2 font-medium text-sm sm:text-base">
                دخلك الشهري
              </label>
            </div>
            <input type="range" min="3000" max="150000" className="w-full" />
            <div className="flex justify-between text-xs sm:text-sm mt-1">
              <span>150,000 ريال سعودي</span>
              <span>3,000 ريال سعودي</span>
            </div>
          </div>

          {/* Existing Installments */}
          <div className="mb-4 flex flex-col sm:flex-row justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label className="flex items-center gap-x-2">
                <input type="radio" name="currentInstallment" />
                <span>لا</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input type="radio" name="currentInstallment" />
                <span>نعم</span>
              </label>
            </div>
            <p className="font-medium text-sm sm:text-base">
              هل لديك أي قسط حالي؟
            </p>
          </div>

          {/* Owned Home or Land */}
          <div className="mb-4 flex flex-col sm:flex-row justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label className="flex items-center gap-x-2">
                <input type="radio" name="ownedProperty" />
                <span>لا</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input type="radio" name="ownedProperty" />
                <span>نعم</span>
              </label>
            </div>
            <p className="font-medium text-sm sm:text-base">
              هل لديك أي منزل أو أرض حالياً؟
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6 text-xs sm:text-sm text-gray-600 flex justify-end font-semibold">
            <ul className="list-disc pr-5 space-y-2">
              <li>تختلف قيمة الفائدة حسب المدة وتخضع لسياسة شركة مُمولة.</li>
              <li>الرسوم الإدارية 1% من مبلغ التمويل.</li>
              <li>
                رسوم السداد المبكر: تكلفة أجل 3 أشهر من تاريخ إقفال التمويل.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
