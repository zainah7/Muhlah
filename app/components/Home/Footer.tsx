import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  linkedin,
  instagram,
  twitter,
  logo,
  phone,
  email,
} from "@/public/assets/index";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className=" mx-auto px-6 py-10 space-y-8">
        <div className=" text-right bg-white rounded-2xl px-4 text-black p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="flex flex-col md:items-end space-y-4 text-sm md:text-end">
              <div className="flex items-center gap-1 justify-end md:justify-start">
                <span className="cursor-pointer">8003010016</span>
                <Image src={phone} alt="phone icon" width={20} height={20} />
              </div>
              <div className="flex items-center gap-2 justify-end md:justify-start">
                <span className="underline cursor-pointer">
                  support@muhlah.sa
                </span>
                <Image src={email} alt="email icon" width={20} height={20} />
              </div>

              <span>أوقات العمل: الأحد - الخميس، 9 ص - 5 م</span>
              <span className="md:w-[300px]">
                الطريق الدائري الشمالي الفرعي، حي النفل، الرياض 13312 المملكة
                العربية السعودية
              </span>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-[#bebfc3]">
                شركة
              </h3>
              <ul className="space-y-2 text-sm">
                <li>رقم السجل التجاري: 1010977646</li>
                <li>شركة مهلة تخضع لرقابة البنك المركزي، رخصة رقم 13312</li>
              </ul>
            </div>
            <div className="py-9 flex flex-col">
              <Link href="/privacy">سياسة الخصوصية</Link>
              <Link href="/#contact"> تواصل معنا</Link>
            </div>

            {/* Privacy & Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-[#bebfc3]">
                معلومة
              </h3>
              <ul className="space-y-2 text-sm flex flex-col">
                <Link href="/home">الرئيسية</Link>
                <Link href="/about">عن مهلة</Link>
                <Link href="/sharia">اللجنة الشرعية</Link>
                <Link href="#protection">مبادئ حماية العملاء</Link>
                <Link href="/terms">القوائم المالية</Link>
                <Link href="/terms">الشروط والأحكام</Link>
              </ul>
            </div>
            <div className="flex justify-center md:items-start">
              <Image src={logo} alt="logo" className="w-8 md:w-10" />
            </div>
          </div>

          {/* Social Links & Logo */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:items-end space-y-6 lg:space-y-0 mt-8">
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={twitter}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div>
              <p className="text-sm">© 2025 جميع الحقوق محفوظة لشركة مهلة</p>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="bg-white text-black py-6 px-6 text-right rounded-2xl shadow-md leading-relaxed w-full">
          <p className="text-sm">
            شركة مهلة للتمويل هي إحدى الجهات المرخصة من البنك المركزي السعودي.
            منتجات مهلة متوافقة مع أحكام الشريعة الإسلامية وتخضع لمراجعة وإشراف
            اللجنة الشرعية التابعة لشركة
            <br />
            <span>
              مهلة للتمويل. تقوم اللجنة الشرعية بمراجعة وتدقيق الإجراءات
              والعمليات بشكل دوري للتأكد من الالتزام بأحكام التورق حسب أحكام
              الشريعة الإسلامية.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
